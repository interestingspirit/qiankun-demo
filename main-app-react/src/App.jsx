import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout'
import Home from './pages/Home';
import './App.css'

const menus = [
    {
      key: "Home",
      title: "主页",
      path: "/"
    },
    {
      key: "VueMicroApp",
      title: "Vue 主页",
      path: "/vue"
    },
    {
      key: "VueMicroAppList",
      title: "Vue 列表页",
      path: "/vue/list"
    },
    {
      key: "ReactMicroApp",
      title: "React 主页",
      path: "/react"
    },
    {
      key: "ReactMicroAppList",
      title: "React 列表页",
      path: "/react/list"
    },
  ];

function App() {

  return (
    <BrowserRouter className="App">
      <BasicLayout menus={menus}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*">
            <div id="container"></div>
          </Route>
        </Switch>
      </BasicLayout>
    </BrowserRouter>
  )
}

export default App
