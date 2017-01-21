app.controller('NotesCtrl', function($scope, firebaseFactory) {
    firebaseFactory.getData().then(function(val) {
      $scope.messages = val.data;
      // console.log('val', val.data);
    });

    // remove message from firebase and from the DOM
    $scope.removeMessage = function(key, value) {
      let url = 'https://mf-user-notes.firebaseio.com/' + key + '.json';
      //firebaseFactory.deleteMessage(url);

      console.log(value);
      // value.splice()
    }
})
