

var app = angular.module('toDoList', []);

app.controller('MainController', function($scope){
  $scope.item = "";
  $scope.toDos = [];

  $scope.addClick = function(item){
    console.log('Added ' + $scope.item);
    $scope.toDos.push(item);
  }

  $scope.remove = function(){
    var done = $scope.toDos.splice(this.$index, 1);
    console.log('removed ' + done);
  }

})
