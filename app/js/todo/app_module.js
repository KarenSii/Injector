var app = angular.module('app',['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: '/Views/home.html'
  })
  $routeProvider
  .when('/comofunciona',{
    templateUrl: '/Views/como.html'
  })
  .when('/caracteristicas',{
    templateUrl: '/Views/caracteristicas.html'
  })
  .when('/contacto',{
    templateUrl: '/Views/contacto.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
