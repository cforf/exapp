'use strict';

/**
 * @ngdoc function
 * @name example3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the example3App
 */

angular.module('example3App').controller('MainCtrl', function($scope, $http, $filter) {

    var stringDate = $filter('date')(new Date(), 'yyyy-MM-dd');

    $scope.linef = ' ................................ ';
    $scope.saveData = {};
    $scope.clearData = {};

    $scope.saveData.dateData = new Date(stringDate);
    $scope.clearData = angular.copy($scope.saveData);

    $scope.query = function() {
        $http({
            method: 'GET',
            url: '../../query.php'
        }).
        then(function(response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data;
        }, function(response) {
            $scope.ajaxData = response.data || 'Request failed';
            $scope.status = response.status;
        });
    };

    $scope.save = function() {

        console.log('before promise $scope.clearData.numData  = ' + $scope.clearData.numData);

        var data = $.param({
            'date_input': $filter('date')($scope.saveData.dateData, 'yyyy-MM-dd'),
            'number_data': $scope.saveData.numData
        });

        $http({
            method: 'POST',
            url: '../../add.php',
            data: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }).
        then(function(response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data;
            //clear form-->
            $scope.saveData = angular.copy($scope.clearData);

            $scope.query();
        }, function(response) {
            $scope.ajaxData = response.data || 'Request failed';
            $scope.status = response.status;
        });
    };

    $scope.mouseEnter = function() {

        $scope.btnStyle = {
            'margin-top': '-5px',
            'cursor': 'pointer',
            'box-shadow': '0px 8px 2px rgba(0,0,0,.25)'
        };

        $scope.sectionStyle = {
            'margin-top': '35px'
        };
    };

    $scope.mouseDown = function() {

        $scope.btnStyle = {
            'margin-top': '0px',
            '-webkit - box - shadow': 'none',
            'box-shadow': 'none'
        };

        $scope.sectionStyle = {
            'margin-top': '30px'
        };
    };

    $scope.mouseLeave = function() {

        $scope.btnStyle = {
            'margin-top': '0px',
            '-webkit - box - shadow': 'none',
            'box-shadow': 'none'
        };

        $scope.sectionStyle = {
            'margin-top': '30px'
        };
    };

    $scope.btnStyle = {
        '-webkit - box - shadow': 'none',
        'box - shadow': 'none',
        'margin-top': '0px'
    };

    $scope.sectionStyle = {
        'margin-top': '30px'
    };

    $scope.query();
})

.directive('viewData', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/view_data.html'
    };
});