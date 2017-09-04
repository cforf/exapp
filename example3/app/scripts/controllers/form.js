'use strict';

/**
 * @ngdoc function
 * @name example3App.controller:formCtrl
 * @description
 * # formCtrl
 * Controller of the example3App
 */


angular.module('example3App').controller('formCtrl', function($scope) {
    $scope.dataForm = [];

    $scope.date = new Date();
    $scope.numData = null;

    $scope.addDataForm = function() {
        console.log('submit data from form ');
        $scope.dataForm.push($scope.date, $scope.numData);
        console.log($scope.dataForm);
    };
});