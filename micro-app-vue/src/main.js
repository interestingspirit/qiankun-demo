import "./public-path";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import actions from "./shared";

let app = null;
let router = null;

function render(props) {
  actions.setActions(props);
  const { container } = props;
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/vue/" : "/"),
    routes
  });
  app = createApp(App);
  app.use(store);
  app.use(router);
  app.mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("micro app vue bootstrap");
}

export async function mount(props) {
  console.log("micro app vue mount, props", props);
  render(props);
}

export async function unmount(props) {
  console.log("micro app vue unmount, props", props);
  app.unmount();
  app = null;
  router = null;
}
