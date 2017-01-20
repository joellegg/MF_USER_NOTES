app.controller('NewNoteCtrl', function($scope, firebaseFactory) {
    console.log('new note controller');
    // add an ng-submit to the form to run a function to push to firebase
    firebaseFactory.getData().then((val) => {
      console.log('this new thing', val);
  })
})
