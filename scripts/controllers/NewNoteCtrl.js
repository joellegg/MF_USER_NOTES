app.controller('NewNoteCtrl', function($scope, firebaseFactory, $http) {
  $scope.newNote = {};
  // add an ng-submit to the form to run a function to push to firebase
  $scope.addNote = function(note) {
    firebaseFactory.postData($scope.newNote);
    //$http.post('https://mf-user-notes.firebaseio.com/.json', $scope.newNote);
    $scope.newNote = {}
  }
})
