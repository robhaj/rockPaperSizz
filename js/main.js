var app = angular.module('controllerApp', []);

app.controller('GameController', function($scope){
  $scope.playerScore = 0;
  $scope.cpuScore = 0;
  $scope.cpu = '';
  $scope.player = '';
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

  $scope.winConditions = function(p1,cpu){
    if (p1 === cpu){
      console.log('game tied');
      return 'tie';
    } else if(p1==='rock' && cpu==='scissors'){
      console.log('p1 wins');
      $scope.playerScore += 1;
      return 'player';
    } else if(p1.length < cpu.length){
      console.log('cpu wins');
      $scope.cpuScore += 1;
      return 'cpu';
    } else {
      console.log('p1 wins');
      $scope.playerScore +=1;
      return 'player';
    }
  };

  $scope.cpuMove = function(){
    var num = Math.floor(Math.random()*3);
    return options[num];
  };

});

var options = ["rock","paper","scissors"];
