// set up 4 routes: `/register`, `/login`, `/notes`, `/new`
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/home', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html'
        })
        .when('/notes', {
            controller: 'NotesCtrl',
            templateUrl: 'partials/noteList.html'
        })
        .when('/new', {
            controller: 'NewNoteCtrl',
            templateUrl: 'partials/newNote.html'
        })
        .when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        })
        .when('/register', {
            controller: 'RegisterCtrl',
            templateUrl: 'partials/registration.html'
        })
        .otherwise({
            redirectTo: '/home'
        })
})
