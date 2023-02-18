// import will always go on top
import chatMsg from "./components/ChatMessage.js";

const socket = io();

// utility function for socket
function setUserID({ sID }) {
    vm.socketID = sID;
}

function showNewMessage({ message }) {
    vm.messages.push(message);
    console.log(message);
}

function handleUserTyping(user) {
    console.log("user is typing a message");
}

const { createApp } = Vue;

const vm = createApp({
    data() {
        return {
            socketID: "",
            message: "",
            messages: [],
            nickname: "",
        };
    },

    methods: {
        // this is the method that will be called when the button is clicked
        dispatchMessage() {
            socket.emit("chat_message", {
                content: this.message,
                name: this.nickname || "anonymous",
                id: this.socketID,
            });

            this.message = "";
        },

        catchTextFocus() {
            //emit a typing event to the server
            console.log("focused");
            socket.emit("typing", {
                name: this.nickname || "anonymous",
                id: this.socketID,
            });
        },
    },

    components: {
        newmsg: chatMsg,
    },
}).mount("#app");

socket.addEventListener("connected", setUserID);
socket.addEventListener("new_message", showNewMessage);
socket.addEventListener("typing", handleUserTyping);
