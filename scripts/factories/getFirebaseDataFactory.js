app.factory('getFirebaseDataFactory', function($http) {
    return {
        getData: () => {
            return $http.get('https://mf-user-notes.firebaseio.com/.json')
                .then((val) => {
                    console.log('val', val)
                    return val.data.list;
                })
        }
    }
})
