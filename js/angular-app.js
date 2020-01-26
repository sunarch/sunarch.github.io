// Define the `sunarchApp` module
var sunarchApp = angular.module('sunarchApp', []);

// Define the `JSInfoController` controller on the `sunarchApp` module
sunarchApp.controller('JSInfoController', function JSInfoController($scope) {

    $scope.window = [
        { key: "closed",        value: window.closed },
        { key: "defaultStatus", value: window.defaultStatus },
        { key: "innerHeight",   value: window.innerHeight },
        { key: "innerWidth",    value: window.innerWidth },
        { key: "name",          value: window.name },
        { key: "opener",        value: window.opener },
        { key: "outerHeight",   value: window.outerHeight },
        { key: "outerWidth",    value: window.outerWidth },
        { key: "pageXOffset",   value: window.pageXOffset },
        { key: "pageYOffset",   value: window.pageYOffset },
        { key: "screenLeft",    value: window.screenLeft },
        { key: "screenTop",     value: window.screenTop },
        { key: "screenX",       value: window.screenX },
        { key: "screenY",       value: window.screenY },
        { key: "status",        value: window.status }
    ];

    $scope.navigator = [
        { key: "appCodeName",   value:  navigator.appCodeName },
        { key: "appName",       value: navigator.appName },
        { key: "appVersion",    value: navigator.appVersion },
        { key: "cookieEnabled", value: navigator.cookieEnabled },
        { key: "platform",      value: navigator.platform },
        { key: "userAgent",     value: navigator.userAgent },
        { key: "javaEnabled()",     value: navigator.javaEnabled() }
    ];

    $scope.screen = [
        { key: "availHeight", value: screen.availHeight },
        { key: "availWidth",  value: screen.availWidth },
        { key: "colorDepth",  value: screen.colorDepth },
        { key: "height",      value: screen.height },
        { key: "pixelDepth",  value: screen.pixelDepth },
        { key: "width",       value: screen.width }
    ];

    $scope.history = [
        { key: "length", value: history.length }
    ];

    $scope.location = [
        { key: "hash",     value: location.hash },
        { key: "host",     value: location.host },
        { key: "hostname", value: location.hostname },
        { key: "href",     value: location.href },
        { key: "pathname", value: location.pathname },
        { key: "port",     value: location.port },
        { key: "protocol", value: location.protocol },
        { key: "search",   value: location.search }
    ];

});
