angular.module('eStore')
.controller('cartCtrl', function($scope, mainService) {

$scope.cart = mainService.cart;


})
