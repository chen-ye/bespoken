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

    var setData = function (sentence) {
        $scope.data = sentence;
    }

    recognition.onresult = function (event) {
        console.log("Retrieved result");
        console.log(event);
        var data;
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            data += event.results[i][0].transcript;
        }
        $scope.data = data;
    };

    recognition.onaudiostart = function (event) {
        console.log("On audio start event fired.");
    };

    recognition.onsoundstart = function (event) {
        console.log("on sound start event fired.");
    };

    recognition.onspeechstart = function (event) {
        console.log("on speech start event fired.");
    };

    recognition.onspeechend = function (event) {
        console.log("on speech end event fired.");
    };

    recognition.onsoundend = function (event) {
        console.log("on sound end event fired");
    };

    recognition.onaudioend = function (event) {
        console.log("on audio end event fired.");
    };

    recognition.onnomatch = function (event) {
        console.log("on no match event fired");
    };
}]);
