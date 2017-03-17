// var formfill = {
//     label 
// }

//console.log(addButton);

//var addButton = document.getElementsByName("add")[0];

// addButton.onclick = addDiv();

// var tbody = document.getElementsByClassName("table")
//                     .getElementsByTagName("tbody");

var table = document.getElementsByClassName("table");

function addDiv () {
    $(table).find('tbody').append(
        "<tr><td>Label</td>" + 
        "<td>Content</td>" +
        "<td><button type=\"button\" class=\"btn btn-primary\">Remove</button></tr>");
}