'use strict';



var app = angular.module('app', []);
app.controller('appCtrl', ['$scope', function() {

}]);

app.controller('catalogCtrl', ['$scope', 'catalogService', function($scope, catalogService) {
    $scope.products = [
        {
            name: 'Perrelet P Pierre Lanier',
            price: '4500',
            id: 1,
            currency: '$',
            image: 'images/catalog/perrelet-a1047-2.jpg'
        },{
            name: 'Perrelet P Pierre Lanier',
            price: '4500',
            id: 1,
            currency: '$',
            image: 'images/catalog/perrelet-a1047-2.jpg'
        },{
            name: 'Perrelet P Pierre Lanier',
            price: '4500',
            id: 1,
            currency: '$',
            image: 'images/catalog/perrelet-a1047-2.jpg'
        },{
            name: 'Perrelet P Pierre Lanier',
            price: '4500',
            id: 1,
            currency: '$',
            image: 'images/catalog/perrelet-a1047-2.jpg'
        },{
            name: 'Perrelet P Pierre Lanier',
            price: '4500',
            id: 1,
            currency: '$',
            image: 'images/catalog/perrelet-a1047-2.jpg'
        },
        {
            name: 'Perrelet P Pierre Lanier',
            price: '4500',
            id: 2,
            currency: '$',
            image: 'images/catalog/perrelet-a1047-2.jpg'
        },
        {
            name: 'Perrelet P Pierre Lanier',
            price: '4500',
            id: 3,
            currency: '$',
            image: 'images/catalog/perrelet-a1047-2.jpg'
        },
        {
            name: 'Perrelet P Pierre Lanier',
            price: '4500',
            id: 4,
            currency: '$',
            image: 'images/catalog/perrelet-a1047-2.jpg'
        },
        {
            name: 'Perrelet P Pierre Lanier',
            price: '4500',
            id: 5,
            currency: '$',
            image: 'images/catalog/perrelet-a1047-2.jpg'
        }
    ];

    $scope.getProducts = function (offset, count) {
        catalogService.list().then(function(response) {
            $scope.products = response;
        });
    };

    $scope.viewProduct = function() {

    };
}]);

app.controller('productCtrl', ['$scope', function($scope) {
    $scope.product = {
        name: 'Perrelet P Pierre Lanier',
        price: '4500',
        id: 1,
        img: 'images/catalog/perrelet-a1047-2.jpg',
        desc: 'Manufacturer: Switzerland / Movement: mechanical with automatic winding / Glass: sapphire / Type: Switches / Case : Steel / Water Resistant: 50m / Strap : Rubber / Style: Men',
        related: [
            {
                name: 'Perrelet P Pierre Lanier',
                id: 4,
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                id: 4,
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                id: 4,
                image: 'images/catalog/perrelet-a1047-2.jpg'
            }
        ],
        ordered: [
            {
                name: 'Perrelet P Pierre Lanier',
                id: 4,
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                id: 4,
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                price: '4500',
                id: 4,
                currency: '$',
                image: 'images/catalog/perrelet-a1047-2.jpg'
            }
        ],
        carted: [
            {
                name: 'Perrelet P Pierre Lanier',
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                id: 4,
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                id: 4,
                image: 'images/catalog/perrelet-a1047-2.jpg'
            }
        ]
    };
    $scope.getProductInfo = function() {

    }
}]);

app.controller('cartCtrl', ['$scope', function($scope) {
    $scope.cart = {
        items: [
            {
                name: 'Perrelet P Pierre Lanier',
                price: '4500',
                id: 1,
                count: 2,
                currency: '$',
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                price: '4500',
                id: 2,
                count: 3,
                currency: '$',
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                price: '4500',
                id: 3,
                count: 4,
                currency: '$',
                image: 'images/catalog/perrelet-a1047-2.jpg'
            }
        ]
    };

    $scope.addItem = function () {

    };

    $scope.deleteItem = function () {

    };

    $scope.refreshCart = function() {

    };
}]);

app.controller('checkoutCtrl', ['$scope', function($scope) {
    $scope.checkout = {
        items: [
            {
                name: 'Perrelet P Pierre Lanier',
                price: '4500',
                id: 1,
                count: 2,
                currency: '$',
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                price: '4500',
                id: 2,
                count: 3,
                currency: '$',
                image: 'images/catalog/perrelet-a1047-2.jpg'
            },
            {
                name: 'Perrelet P Pierre Lanier',
                price: '4500',
                id: 3,
                count: 4,
                currency: '$',
                image: 'images/catalog/perrelet-a1047-2.jpg'
            }
        ]
    };

    $scope.proceedCheckout = function () {

    };

    $scope.cancelCheckout = function () {

    };
}]);