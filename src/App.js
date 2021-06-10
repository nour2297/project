import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Personnels from "./Components/Personnel/Personnels";
import DemandeCongés from "./Components/Congés/DemandeCongés";
import Home from "./Components/Home";
import ValidationCongés from "./Components/Congés/ValidationCongés";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar></SideBar>
        <Switch>
          {/* <Route exact path="/" /> */}

          <Route exact path="/Home" component={Home}></Route>
          <Route path="/Personnels" component={Personnels} />
          <Route path="/DemandeCongés" component={DemandeCongés} />
          <Route path="/ValidationCongés" component={ValidationCongés} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
