export default {
  data() {
    return {
      messageTitle: "Hello, its vue js 3",
      messageText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
  },
  template: `
    <section style="padding: 150px 0;">
      <div class="container">
        <h2>{{messageTitle}}</h2>
        <p>{{messageText}}</p>
      </div>
    </section>
  `
};
