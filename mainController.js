angular.module('eStore')
.controller('mainController', function($scope, mainService) {

$scope.broken = mainService.broken;

})
