export default {
    name: 'TheChatMessageComponent',
    props: ['message'],

    template: `

    <article class="chat-messages" :class= " { 'other-messages' :matchedID }">
    <div class="chat-window">   
        <h2 class="sentname"> {{ message.name }}:</h2>
        <div class="contentm">    
        {{message.content }}
        </div>
    </div>

    <p></p>
    </article>
    `,


    data() {
        return {
            message: 'hello from the chat message component',
            // every time an incoming message arrives from the server, we'll check to see if it's from the current user.
            // if it is, we'll set this to true, which will trigger the CSS class to be applied to the message.
            // if it is not from the current user, we'll set this to false, which will trigger the CSS class to be applied to the message.
            matchedID: this.$parent.socketID == this.message.id,
        }
    }
}