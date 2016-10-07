var app=angular.module('myApp',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/index.html");
  $stateProvider
  .state('index',{
    url: '/index.html'
  })
    .state('team', 
    {
      url: '/details/:key',
      views: {
      '': {
      templateUrl: 'details.html',
      controller: 'teamController'
    }}
    })    
  });
app.controller('teamController',['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	$scope.data={};
	$http({
    method: 'GET',
    url: 'data.json'
    }).success(function (res) {
    $scope.data=res;
   /*console.log($stateParams.key);*/
     var index=$stateParams.key;
      if(index!=undefined){
      $scope.title=res.teams[index].name;
      $scope.desc=res.teams[index].description;
      	console.log($scope.title);
      $scope.pic=res.teams[index].url;
    }
    });
}]);