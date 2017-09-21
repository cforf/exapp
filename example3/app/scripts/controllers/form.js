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
    $scope.matchPattern = new RegExp('[0-9]{6}');

    $scope.addDataForm = function(isvalid) {
        if (isvalid) {
            console.log('submit data from form ');
            $scope.dataForm.push($filter('date')($scope.dateData, 'yyyy-MM-dd'), $scope.numData);
            console.log($scope.dataForm);
        } else {
            console.log('submit error -> ');
            $scope.showError = true;
        }
        console.log('submit -> ');
        //clear fields-->
    };

    $scope.check = function(valid, w) {
        // console.log($filter('date')($scope.date, 'yyyy-MM-dd'));
        console.log('stringDate= ' + stringDate);
        console.log('$scope.date = ' + $scope.dateData);
        console.log('form.validate = ' + valid);
        console.log('form.date_input = ' + w);
    };

    $scope.getError = function(error) {
      
        if (angular.isDefined(error)) {
            if (error.required) {
                return 'Required!';
            } else if (error.pattern) {
                return 'Input number by pattern 012345(6 digits)';
            } else if (error.date) {
                return 'Not a valid date! Input date by pattern YYYY-MM-DD';
            }
        }
    };
});