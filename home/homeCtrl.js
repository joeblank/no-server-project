angular.module('eStore')
.controller('homeCtrl', function($scope, mainService) {


$scope.home = mainService.home;


})
