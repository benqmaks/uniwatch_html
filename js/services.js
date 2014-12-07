'use strict';

app.factory('catalogService', ['$http', function($http) {
    var myService = {
        list: function() {
            var promise = $http.get('').then(function (response) {
                console.log(response);
                return response.data;
            });

            return promise;
        }
    };
    return myService;
}]);

app.service('productStorage', function () {
    var product = {};
    return {
        setProduct: function (product) {
            product = name;
        },
        getProduct: function () {
            return product;
        }
    }
});