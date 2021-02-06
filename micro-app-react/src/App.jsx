import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter className="App" basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'} >
      <Route path="/" exact component={Home} />
      <Route path="/list" exact component={List} />
    </BrowserRouter>
  );
}

export default App;
