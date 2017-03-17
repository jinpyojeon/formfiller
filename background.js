

chrome.commands.onCommand.addListener(function(command) {
    for (var i = 0; i < labels.length; i++) {
        document.getElementById(labels[i].label).value = labels[i].fill;
    }
});
