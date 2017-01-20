app.factory('firebaseFactory', function($http) {
  return {
    getData: () => {
      return $http.get('https://realtime-database-b10ca.firebaseio.com/.json')
        .then((val) => {
          console.log('val', val)
          return val.data.title;
        })
    }
  }
})
