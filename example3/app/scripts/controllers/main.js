'use strict';

/**
 * @ngdoc function
 * @name example3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the example3App
 */

angular.module('example3App').controller('MainCtrl', function($scope, $http, $filter) {

    $scope.linef = ' ................................ ';
    $scope.saveData = {};

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
        console.log('$scope.saveData = ' + $scope.saveData);

        var data = JSON.stringify($scope.saveData);
        /*{
                            'date_input': $filter('date')($scope.saveData.dateData, 'yyyy-MM-dd'),
                            'number_data': $scope.saveData.numData
                        })*/


        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        $http({
            method: 'POST',
            url: '../../add.php',
            data: data,
            config: config
        }).
        then(function(response) {
            $scope.status = response.status;
            $scope.ajaxData = response.data;
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