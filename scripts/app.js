// Initialize Firebase
var config = {
apiKey: "AIzaSyCluQz_okGKN8WJ3uxB7vgI9OgzhyNARRA",
authDomain: "mf-user-notes.firebaseapp.com",
databaseURL: "https://mf-user-notes.firebaseio.com",
storageBucket: "mf-user-notes.appspot.com",
messagingSenderId: "79812579627"
};
firebase.initializeApp(config);

let app = angular.module('notesApp', ['ngRoute']);

// set up 4 routes: `/register`, `/login`, `/notes`, `/new`
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.
        when('/register', {
            controller: 'RegisterCtrl',
            templateUrl: 'partials/registration.html'
        })
        when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        })
        when('/notes', {
            controller: 'NotesCtrl',
            templateUrl: 'partials/noteList.html'
        })
        when('/new', {
            controller: 'NewNoteCtrl',
            templateUrl: 'partials/newNote.html'
        })
        otherwise({
            redirectTo: '/register'
        })
}
