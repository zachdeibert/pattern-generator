import React from "react";
import PatternView from "./PatternView";
import ControlView from "./ControlView";
import DownloadButton from "./DownloadButton";
import "./App.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "pattern": null
        };
        this.handlePatternChange = this.handlePatternChange.bind(this);
    }

    handlePatternChange(pattern) {
        this.setState({
            "pattern": pattern
        });
    }

    render() {
        return (
            <div className="app">
                <ControlView handlePatternChange={this.handlePatternChange} />
                <PatternView pattern={this.state.pattern} />
                <DownloadButton />
            </div>
        );
    }
}
