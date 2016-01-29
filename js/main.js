var app = angular.module('controllerApp', []);
var options = ["rock","paper","scissors"];

app.controller('GameController', function($scope){
  $scope.playerScore = 0;
  $scope.cpuScore = 0;

  $scope.winConditions = function(p1,cpu){
    if (p1 === cpu){
      return 'tie';
    } else if(p1==='rock' && cpu==='scissors'){
      $scope.playerScore += 1;
      return 'player';
    } else if(p1.length < cpu.length || p1==='scissors' && cpu==='rock'){
      $scope.cpuScore += 1;
      return 'cpu';
    } else {
      $scope.playerScore +=1;
      return 'player';
    }
  };

  $scope.rock = function(){
    $scope.cpu = $scope.cpuMove();
    $scope.player = 'rock';
    $scope.winConditions('rock', $scope.cpu);
  };
  $scope.paper = function(){
    $scope.cpu = $scope.cpuMove();
    $scope.player = 'paper';
    $scope.winConditions('paper', $scope.cpu);
  };
  $scope.scissors = function(){
    $scope.cpu = $scope.cpuMove();
    $scope.player = 'scissors';
    $scope.winConditions('scissors', $scope.cpu);
  };
  $scope.cpuMove = function(){
    var num = Math.floor(Math.random()*3);
    return options[num];
  };
});
