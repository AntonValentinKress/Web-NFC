function consoleLog(data) {
    var logElement = document.getElementById('log');
    logElement.innerHTML += data + '\n';
}

function singleconsoleLog(data) {
    var logElement = document.getElementById('log');
    logElement.innerHTML = data;
}