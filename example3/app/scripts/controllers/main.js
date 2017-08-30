'use strict';

/**
 * @ngdoc function
 * @name example3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the example3App
 */

var data = [2525, 2626, 2727, 2828, 2929, 3030, 3131, 3232];

angular.module('example3App').controller('MainCtrl', function($scope) {

    $scope.ajaxData = data;

    $scope.mouseEnter = function() {
        console.log("mouse over");

        $scope.btnStyle = {
            "margin-top": "-5px",
            "cursor": "pointer",
            "box-shadow": "0px 8px 2px rgba(0,0,0,.25)"
        };

        $scope.sectionStyle = {
            "margin-top": "35px"
        };
    };

    $scope.btnStyle = {
        "-webkit - box - shadow": "none",
        "box - shadow": "none",
        "color": "#363636",
        "background - color": "#ff7800",
        "border": "2 px solid #363636",
        "border-radius": "8px",
        "font-family": "dejavu",
        "font-size": "1.8em"
    };

    $scope.sectionStyle = {
        "margin-top": "30px"
    };


});