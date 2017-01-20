app.controller('NavbarCtrl', function($scope, $location) {
  $scope.currentTab = '/home';
  $scope.selectedTab = function() {
    $scope.currentTab = $location.url();
    console.log(typeof $scope.currentTab);
    // console.log('location', $location.url());
  }
})
