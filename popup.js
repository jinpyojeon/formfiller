var addButton = document.getElementsByName("add");

console.log(addButton);

addButton.onclick = function() {
    
};

function addDiv() {
    var div = document.createElement("div");
    div.innerHTML =
        "<div>" +
        "<input type=\"text\" class=\"labels\">" +
        "<br>" +
        "<input type=\"text\" class=\"fill\">" +
        "<button type=\"button\">Remove</button>" +
        "</div>";
    document.body.appendChild(div);
}