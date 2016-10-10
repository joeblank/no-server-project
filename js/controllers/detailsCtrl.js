angular.module('eStore')
.controller('detailsCtrl', function($scope, $stateParams, mainService) {

mainService.getOneItem($stateParams.id).then(function(response) {
  $scope.singleItem = response;
  console.log(response);
})

$scope.move = function() {
  $(function() {
    // $('.details-image').css({'transform': 'rotate(5deg)'})
  })
}

$scope.hiddenCartDiv = false;
$scope.showHiddenCartDiv = function() {
    $scope.hiddenCartDiv = $scope.hiddenCartDiv ? false : true;
}

$scope.addToCart = function (item, qty) {
  item.quantity = qty;
mainService.addToCart(item);
}

$scope.animation = function() {
  $(function() {
    $('.details-image').css({'animation': 'width 5s infinite'})
    })
  }


  $(function() {
    $('.hidden-div-close').click(function() {
      $('.hidden-div').hide()
    })
  })

$(function() {
  $('.add-to-cart-button').click(function() {
    $('.details-image').css({
      'animation': 'photo 2s'

    })
  })
})

})
