app.factory('firebaseFactory', function($http) {
  return {
    getData: () => {
      return $http.get('https://mf-user-notes.firebaseio.com/.json');
    },
    postData: function(newNote) {
      return $http.post('https://mf-user-notes.firebaseio.com/.json', newNote);
    },
    deleteMessage: function(url) {
      //let url = 'https://mf-user-notes.firebaseio.com/' + key + '.json'
      //console.log('key', key)
      return $http.delete(url)
    }
  }
})
