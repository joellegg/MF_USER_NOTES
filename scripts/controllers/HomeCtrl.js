app.controller('HomeCtrl', function($scope, getFirebaseDataFactory) {
    console.log('home controller');

    getFirebaseDataFactory.getList()
    .then((val) => {
        console.log('val from homeCtrl', val);
        $scope.list = val;
    })
})
