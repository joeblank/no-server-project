angular.module('eStore', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            })
            .state('shop', {
                url: '/shop',
                templateUrl: 'shop/shop.html',
                controller: 'shopCtrl'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'cart/cart.html',
                controller: 'cartCtrl'
            })






    })
