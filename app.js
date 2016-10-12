// we put all the js code into an anonymous function
// this is good practice to isolate the namespace
; (function() {


// with this we make js less forgiving so that we catch
// more hidden errors during development
'use strict';


var app = angular.module('myapp', []);


app.controller('mycontroller', ['$scope', '$http', function($scope, $http) {

    $scope.message = '';
    $scope.show_message = false;

    $scope.do_something = function (s) {
        $scope.message = s;
        $scope.show_message = true;

        // this is needed to trigger update of the $scope
        // because the event was called from "outside" angular
        $scope.$apply();
    };

    var $checkableTree = $('#treeview-checkable').treeview({
        data: defaultData,
        showIcon: false,
        showCheckbox: true,
        onNodeChecked: function(event, node) {
            $scope.do_something('box checked');
        },
        onNodeUnchecked: function (event, node) {
            $scope.do_something('box unchecked');
        }
    });

}]);


// close the anonymous function
})();
