"use strict";
 
(function(){
	var app = angular.module('scholarApp', ['pdf']);
	
	var app = angular.module('scholarApp', [
	  'ngRoute'
	  ,'ngSanitize'
	  ,'scholarCtrls'
	  ,'scholarDirectives'
	  ,'pdfDelegate'
	]);
	
	app.config(['$routeProvider',
	  function($routeProvider) {
		$routeProvider
		.when('/home', {
			title: 'Maktabah As-Sunnah'
			,templateUrl: 'partials/main.html'
		  })
		.when('/scholars', {
			title: 'Scholars List'
			,templateUrl: 'partials/scholar-list.html'
			,controller : 'scholarListCtrl'
		  })
		.when('/scholars/:scholarId', {
			templateUrl: 'partials/scholar-detail.html'
			,controller : 'scholarDetailCtrl'
		  })
		.when('/scholars/:scholarId/:books', {
			templateUrl: 'partials/scholar-post.html'
			,controller : 'scholarPostCtrl'
		  })
		.otherwise({
			redirectTo: '/home'
		  });
	  }]);

	app.run(['$location', '$rootScope', function($location, $rootScope) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.title = current.$$route.title;
		});
	}]); 

})();
