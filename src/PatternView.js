import React from "react";
import "./PatternView.css";

export default class PatternView extends React.Component {
    render() {
        return (
            <div className="pattern-view">
                {this.props.pattern}
            </div>
        );
    }
}
