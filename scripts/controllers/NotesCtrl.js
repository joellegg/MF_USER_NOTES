app.controller('NotesCtrl', function($scope, firebaseFactory) {
    //console.log('notes list controller');
    firebaseFactory.getData().then(function(val) {
      $scope.messages = val.data;
      // console.log('val', val.data);
    });

    $scope.removeMessage = function(key) {
      let url = 'https://mf-user-notes.firebaseio.com/' + key + '.json';
      console.log(url);
      firebaseFactory.deleteMessage(url);

    }
    // $scope.deleteMessage = function(key) {
    //   console.log('key', key)
    // }
})
