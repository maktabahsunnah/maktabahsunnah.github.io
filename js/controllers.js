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
        $scope.scholars = [];
        $http.get('data/' + $routeParams.scholarId + '.json').success(function(data) { 
            $scope.scholars = data;
            $scope.scholars = data.books;
            $scope.scholars = data.booktitle;
            $scope.scholars = data.booklink;
        });
    }]); 
	
    app.controller('scholarPostCtrl', ['$http', '$scope', '$routeParams', function($http, $scope,$routeParams){
        $scope.scholars = [];
        $http.get('data/' + $routeParams.scholarId + '.json').success(function(data) { 
            $scope.scholars = data.books;
        });
    }]); 
	
})();
