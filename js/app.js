var kevinApp = angular.module("kevinApp", ['ngAnimate']);

kevinApp.controller("kevinController", function($scope){

});

// connect animations
$('#github').addClass("animated fadeIn");
$('#linkedin').addClass("animated fadeIn");
$('#facebook').addClass("animated fadeIn");

// featurette animations
$('#epic-featurette').waypoint(function(){
  $('#epic-featurette').addClass("animated fadeInLeft");
}, { offset: '85%' });
$('#utarl-featurette').waypoint(function(){
  $('#utarl-featurette').addClass("animated fadeInRight");
}, { offset: '85%' });
$('#surewalk-featurette').waypoint(function(){
  $('#surewalk-featurette').addClass("animated fadeInLeft");
}, { offset: '85%' });
$('#christmas-featurette').waypoint(function(){
  $('#christmas-featurette').addClass("animated fadeInRight");
}, { offset: '85%' });
$('#sanger-featurette').waypoint(function(){
  $('#sanger-featurette').addClass("animated fadeInLeft");
}, { offset: '85%' });