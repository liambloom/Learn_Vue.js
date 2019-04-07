//jshint esversion:6
Vue.component("item", {
  props: ["todo"],
  template: "<li>{{ todo }}</li>"
});
const list = new Vue({
  el: "#content",
  data: {
    todos: [
      { txt: "foo" },
      { txt: "bar" },
      { txt: "foobar" }
    ],
    input: ""
  },
  methods: {
    enterCheck: function() {
      if (event.keyCode === 13) {
        list.todos.push({ txt: this.input });
        this.input = "";
      }
    }
  },
  /*created: () => {
    console.log("I exist!");
  }*/
});
/*list.$watch("todos", () => {
  console.log(list.todos.length);
});*/