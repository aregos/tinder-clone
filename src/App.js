import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        {/* Header */}
        <Switch>
            <Route path="/chat/:person">
                <Header backButton="/chat" />
                <ChatScreen />
            </Route>
            <Route path="/chat">
                <Header backButton="/"/>
                    {/* Individual chat screen */}
                <Chats />
            </Route>
            <Route path="/">
                <Header />
                {/* Tinder cards */}
                <TinderCards/>
                {/* Button below Tinder cards */}
                <SwipeButtons />
            </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
