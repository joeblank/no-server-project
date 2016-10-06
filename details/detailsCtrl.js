angular.module('eStore')
.controller('detailsCtrl', function($scope, $stateParams, mainService) {

mainService.getOneItem($stateParams.id).then(function(response) {
  $scope.singleItem = response;
  console.log(response);
})


$scope.addToCart = function (item) {
mainService.addToCart(item);
}

})
