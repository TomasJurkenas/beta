import logo from './logo.svg';
import './App.css';

import {  Routes, Route } from "react-router-dom";
import {Header} from "./components/header";

function App() {
  return (
    <div>
        <Routes>
            <header><Header/></header>
            <Route path="/"><Header/></Route>

        </Routes>
      {/*<header> <Header/></header>*/}
      {/*  <Routes>*/}
      {/*      <Route>*/}
      {/*          <aside>*/}
      {/*              <nav></nav>*/}
      {/*          </aside>*/}
      {/*      </Route>*/}
      {/*      <Route>*/}
      {/*          <main>*/}
      {/*              <div></div>*/}
      {/*          </main>*/}
      {/*      </Route>*/}
      {/*  </Routes>*/}
      {/*<footer></footer>*/}
    </div>
  );
}

export default App;
