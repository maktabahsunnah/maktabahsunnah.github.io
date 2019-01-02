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
            $scope.books = data.booktitle;
            $scope.books = data.booklink;
        });
    }]); 
	
    app.controller('scholarPostCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, pdfDelegate, $routeParams){
        $scope.scholars = [];
	$scope.pdfUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/relativity.pdf';
        $http.get('data/' + $routeParams.scholarId + '.json').success(function(data) { 
            $scope.scholars = data.books;
        });
    }]); 
	
})();
