var app = angular.module('removeJS', [])

app.controller('kontroler1', ['$scope', function($scope){

  $scope.people = [
    {name: "Hugo", lastname: "Pokus", pic: "images/yeoman.png"},
    {name: "Kami", lastname: "Woka", pic: "images/yeoman.png"},
    {name: "Szyo", lastname: "Nagu", pic: "images/yeoman.png"},
    {name: "Maci", lastname: "Kwapu", pic: "images/yeoman.png"},

  ];

  $scope.teamlead = {name: "Kami", lastname: "Woka", pic: "images/yeoman.png"};

  $scope.people2 = [
    {name: "Hugo", lastname: "Pokus", pic: "images/yeoman.png", ranga: "kowal"},
    {name: "Kami", lastname: "Woka", pic: "images/yeoman.png", ranga: "rycerz"},
    {name: "Szyo", lastname: "Nagu", pic: "images/yeoman.png", ranga: "hutnik"},
    {name: "Maci", lastname: "Kwapu", pic: "images/yeoman.png", ranga: "bard"},

  ];

}]);

app.directive('dyrektywa', function(){
  return {
    scope: {
      member: '=info'
    },
    restrict: 'AEC',
    templateUrl: function(elem, attr){
      attr.type = attr.type||'1';
      return 'widok'+attr.type+'.html';
    }
  };
});
