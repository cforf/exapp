'use strict';

/**
 * @ngdoc function
 * @name example3App.controller:formCtrl
 * @description
 * # formCtrl
 * Controller of the example3App
 */


angular.module('example3App').controller('formCtrl', function($scope, $filter) {
    var stringDate = $filter('date')(new Date(), 'yyyy-MM-dd');

    $scope.dataForm = [];

    $scope.dateData = new Date(stringDate);

    // $scope.date = $filter('date')($scope.date, 'yyyy-MM-dd');
    // var today = $filter('date')(new Date(), 'yyyy-MM-dd');
    // $scope.date = $filter('date')(new Date(), 'yyyy-MM-dd'); //today;
    $scope.numData = null;

    $scope.addDataForm = function() {
        console.log('submit data from form ');
        $scope.dataForm.push($filter('date')($scope.dateData, 'yyyy-MM-dd'), $scope.numData);
        console.log($scope.dataForm);
        //clear fields-->
    };

    $scope.check = function() {
        // console.log($filter('date')($scope.date, 'yyyy-MM-dd'));
        console.log('stringDate= ' + stringDate);
        console.log('$scope.date = ' + $scope.dateData);
    };
});