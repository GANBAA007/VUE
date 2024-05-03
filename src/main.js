import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.css";

const app = createApp(App);
app.mount("#app");

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");

  menuButton.addEventListener("click", function () {
    // Code to toggle the visibility of the dropdown menu
    console.log("Button clicked!");
  });
});
