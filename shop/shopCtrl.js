angular.module('eStore')
.controller('shopCtrl', function($scope, mainService) {

$scope.shop = mainService.shop;

})
