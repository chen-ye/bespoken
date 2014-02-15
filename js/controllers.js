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
        console.log("User started recognition.");
    };

    $scope.stopRecognition = function () {
        recognition.stop();
        console.log("User stopped recognition");
    };

    recognition.onstart = function () {
        $scope.recording = true;
        console.log("Recognition API has been started.");
    };

    recognition.onend = function () {
        $scope.recording = false;
        console.log("Recognition API has been stopped.");
    };

    recognition.onerror = function (event) {
        console.log("There has been an error.");
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
