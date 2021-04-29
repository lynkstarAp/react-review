import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "../views/Home/index";
import FourOFour from "../views/404/index";
import PokeEdite from "../views/PokeDetail";
import ScrollToTop from "../views/components/ScrollToTop";

export default function Routes() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path="/pokemon/:id">
                    <PokeEdite></PokeEdite>
                </Route>
                <Route>
                    <FourOFour></FourOFour>
                </Route>
            </Switch>
        </Router>
    );
}
