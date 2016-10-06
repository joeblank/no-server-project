angular.module('eStore')
.controller('cartCtrl', function($scope, mainService) {

setTimeout(function() {
  var cart = mainService.getCart();
  $scope.cartItems = cart;
}, 2000);

$scope.cartItems = mainService.getCart();
})
