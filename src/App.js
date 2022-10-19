import React from "react";
import './App.css';
import {Header} from "./components/header";
import {Aside} from "./components/aside";
import {Main} from "./components/main"



function App() {
  return (
    <div className="gridContainer">
      <header> <Header/></header>
        <aside>
            <Aside/>
        </aside>

        <main>
            <Main/>
        </main>

    </div>
  );
}

export default App;
