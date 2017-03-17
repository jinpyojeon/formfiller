

var labels = [];

var app = angular.module('app', []);

app.controller('labelsCtrl', function($scope) {
    
});

// var table = document.getElementsByClassName("table");

function addDiv () {
    $(table).find('tbody').append(
        "<tr><td>Label</td>" + 
        "<td>Content</td>" +
        "<td><button type=\"button\" class=\"btn btn-primary\">Remove</button></tr>");
}