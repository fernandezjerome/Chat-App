export default {
    name: "UserTypingCompont",

    template: `
    <div>
        <div> {{typist}} </div>
     </div>
    `,
    data() {
        return {
            typing: "",
            message: "",
            typing: false,
            typist: "",
        };
    },
};
