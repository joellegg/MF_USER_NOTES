app.controller('NotesCtrl', function($scope, firebaseFactory) {
    //console.log('notes list controller');
    firebaseFactory.getData().then(function(val) {
      $scope.messages = val.data;
    });
})
