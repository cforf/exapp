'use strict';

/**
 * @ngdoc function
 * @name example3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the example3App
 */

var data = [2525, 2626, 2727, 2828, 2929, 3030, 3131, 3232];

angular.module('example3App').controller('MainCtrl', function ($scope) {

  $scope.ajaxData = data;

});
