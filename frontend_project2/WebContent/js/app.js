var app = angular.module("myApp", [ 'ngRoute' ])
app.config(function($routeProvider) {

	$routeProvider
	  
	.when('/registration', {
		templateUrl : 'views/registrationform.html',
		controller : 'UserController'
	})

	.when('/login', {

		templateUrl : 'views/login.html',
		controller : 'UserController'

	})

	.otherwise({
		templateUrl : 'views/home.html'

	})

})

app.run(function($rootScope,$location,UserService) {

	$rootScope.logout = function() {
		UserService.logout().then(function(response) {
			$rootScope.message = "logged out successfully.."
			$location.path('/login')

		}, function(response) {
			console.log(response.status)
			$rootScope.message=response.data.message
			$location.path('/login')
		})

	}

})
