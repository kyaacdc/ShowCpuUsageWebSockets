if (!window.WebSocket) {
	document.body.innerHTML = 'WebSockets is not supported in browser';
}

// Create connection
var socket = new WebSocket("ws://localhost:8081");

// Input messages handler
socket.onmessage = function(event) {
  incomingMessage = event.data;
  showMessage(incomingMessage);
};

var s = "#subscribe";

// Show message
function showMessage(message) {
  $(s).empty();
  $(s).append(message);
}

var Child = {
    props: ['cpuMessage'],
    template: '<p>{{cpuMessage}}</p>',
};

var vm = new Vue({
    el: '#app',
    data: {
        cpuUsage: ' Server CPU usage ',
        styleObjectBefore: {
            color: 'blue',
            fontSize: '30px'
        }

    },

    components: {
        'cpuload': Child
    }
});
