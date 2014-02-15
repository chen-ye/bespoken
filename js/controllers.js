'use strict';

var controllers = angular.module('bespoken.controllers', []);

controllers.controller('bespokenSpeech', ['$scope', function($scope)  {
    console.log("swag school");
    $scope.data = "Initial.";
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    $scope.recording = false;
    $scope.startRecognition = function () {
        recognition.start();
    };

    $scope.stopRecognition = function () {
        recognition.stop();
    };

    recognition.onstart = function () {
        $scope.recording = true;
    };

    recognition.onend = function () {
        $scope.recording = false;
    };

    recognition.onerror = function (event) {
        console.log(event);
        $scope.recording = false;
        window.alert("there has been an error");
    };

    recognition.onresult = function (event) {
        console.log("Retrieved result");
        console.log(event);
        $scope.data = event;
    };
}]);
