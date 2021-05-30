import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Personnels from "./Components/Personnel/Personnels";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar></SideBar>
        <Switch>
          <Route exact path="/" />
          <Route path="/Home" component={Home}></Route>
          <Route path="/Personnels" component={Personnels} />
          <Route path="/contact" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
