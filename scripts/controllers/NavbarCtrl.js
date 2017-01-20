app.controller('NavbarCtrl', function($scope, $location) {
  $scope.isCurrentTab =  (url) => url === $location.url();
})
