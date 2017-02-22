(function(){
    var app = angular.module('store-products', []);
    app.directive('productSpecs' ,function(){
        return{
            restrict:"A",
            templateUrl:'product-specs.html'
        };
    });
    app.directive('productReviews' ,function(){
        return{
            restrict:"A",
            templateUrl:'product-reviews.html'
        };
    });
    app.directive('productPanel', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-panel.html',
            controller: function(){
                        this.tab=1;
                        this.selectTab=function(setTab){
                        this.tab=setTab;
                        };
                        this.isSelected=function(checkTab){
                        return this.tab === checkTab;
                        };
                        },
            controllerAs: 'panel',
        };
    });
    app.directive('productTitle', function(){
        return{
            restrict: 'E',
            templateUrl:  'product-title.html',
        }
    });
    app.directive('productImages', function(){
        return{
            restrict: 'E',
            templateUrl: 'product-images.html',
        }
    });
    })();