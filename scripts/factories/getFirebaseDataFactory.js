app.factory('firebaseFactory', function($http) {
  return {
    getData: () => {
      return $http.get('https://mf-user-notes.firebaseio.com/.json');
    },
    postData: (newNote) => {
      return $http.post('https://mf-user-notes.firebaseio.com/.json', newNote);
    },
    deleteMessage: (url) => {
      return $http.delete(url);
    }
  }
})
