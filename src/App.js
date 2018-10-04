import React from "react";
import PatternView from "./PatternView";
import ControlView from "./ControlView";
import "./App.css";

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <ControlView />
                <PatternView />
            </div>
        );
    }
}
