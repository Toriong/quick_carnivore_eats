import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Restaurants from './Restaurants';
import NavBar from "./NavBar"
import Footer from './Footer'
import CheckoutPage from './CheckoutPage'

const Pages = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Restaurants />
                </Route>
                <Route exact path="/menu/:storeName">
                    <Menu />
                </Route>
                <Route exact path="/checkoutPage">
                    <CheckoutPage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}


export default Pages;