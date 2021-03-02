import React, {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";



function App() {

    const[{}, dispatch] = useStateValue();

    useEffect(()=>{
            //will only run once when app component loads...
            auth.onAuthStateChanged(authUser => {
                console.log('the user is >>> ',authUser);

                if(authUser){
                    //user just logged in/ the was logged in
                    dispatch({
                        type: 'SET_USER',
                        user: authUser
                    })
                }
                else{
                    //the user is logged out
                    dispatch({
                        type: 'SET_USER',
                        user: null
                    })
                }
            })
    },[])

    return (

        <Router>

        <div className="app">

            <Switch>

            <Route path="/Login">

               <Login />
            </Route>

            <Route path="/Checkout">
                <Header />
                <Checkout />
            </Route>

            <Route path="/payment">
                <Header />
                <h1> i am the payment </h1>
                <Payment/>
            </Route>

            <Route path="/">
                <Header />
                <Home />
            </Route>

            </Switch>

        </div>

        </Router>
    );
    
}

export default App;