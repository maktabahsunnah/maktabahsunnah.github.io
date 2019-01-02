"use strict";
 
(function(){
     var app = angular.module('scholarCtrls', []);
	  
     app.controller('scholarListCtrl', ['$http', '$scope', function($http, $scope){
        $scope.scholars = [];

        $http.get('data/scholars.json').success(function(data) {
            $scope.scholars = data;
        });
		
		 $scope.totalScholars = function(){
			return $scope.scholars.length;
		};
    }]);
	
  app.controller('scholarDetailCtrl', ['$http', '$scope', '$routeParams', function($http, $scope,$routeParams){
    $http.get('data/' + $routeParams.scholarId + '.json').success(function(data) {
        $scope.books = [];
        angular.forEach(data.books, function(value, key) {
            $scope.books.push(value);
        });
        $scope.isVisible = function(name){
            return true;
        };
    });
  }]); 
	
    app.controller('scholarPostCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams){
        $scope.scholars = [];
        $http.get('data/' + $routeParams.scholarId + '.json').success(function(data) { 
            $scope.scholars = data;
            $scope.books = data.title;
            $scope.books = data.url;
        });
    }]); 
	
})();
