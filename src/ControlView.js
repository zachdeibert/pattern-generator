import React from "react";
import PatternDatabase from "./PatternDatabase";
import "./ControlView.css";

export default class ControlView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "patternName": PatternDatabase.getPatternNames()[0],
            "pattern": PatternDatabase.getPattern(PatternDatabase.getPatternNames()[0])
        };
    }

    handleChange(ev) {
        this.setState({
            "patternName": ev.target.value,
            "pattern": PatternDatabase.getPattern(ev.target.value)
        });
    }

    render() {
        return (
            <div className="control-view">
                <div className="input-field">
                    <label>Pattern Type</label>
                    <select value={this.state.patternName} onChange={this.handleChange}>
                        {PatternDatabase.getPatternNames().map((name, i) => (
                            <option key={`pattern-${i}`} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
                {this.state.pattern.parameters}
            </div>
        );
    }
}
