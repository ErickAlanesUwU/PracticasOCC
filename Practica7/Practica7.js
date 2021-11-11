var app = angular.module('ProductoApp', []);
app.controller('ProductController', ($scope) => {

    $scope.product = {};
    $scope.products = new Array();
   
    $scope.addProduct = () => {
        $scope.products.push({

            productName: $scope.product.productName,
            priceproduct: $scope.product.priceproduct,
            cantproduct: $scope.product.cantproduct,
            descproduct: $scope.product.descproduct,
        });
    }



    

    $scope.deleteProduct = (i) => {
        $scope.products .splice(i, 1);
    }
});