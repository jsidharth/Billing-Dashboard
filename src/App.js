import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div class="container-fluid">
        <div class="row min-vh-100 flex-column flex-md-row">
          <Sidebar />
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
