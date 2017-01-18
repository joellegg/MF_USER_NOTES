const app = angular.module('notesApp', ['ngRoute']);

// Initialize Firebase
var config = {
apiKey: "AIzaSyCluQz_okGKN8WJ3uxB7vgI9OgzhyNARRA",
authDomain: "mf-user-notes.firebaseapp.com",
databaseURL: "https://mf-user-notes.firebaseio.com",
storageBucket: "mf-user-notes.appspot.com",
messagingSenderId: "79812579627"
};
firebase.initializeApp(config);
