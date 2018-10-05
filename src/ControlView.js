import React from "react";
import PatternDatabase from "./PatternDatabase";
import "./ControlView.css";

export default class ControlView extends React.Component {
    constructor(props) {
        super(props);
        const name = PatternDatabase.getPatternNames()[0];
        const pattern = PatternDatabase.getPattern(name);
        this.state = {
            "patternName": name,
            "parameters": pattern.parameters
        };
        this.props.handlePatternChange(pattern.pattern);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        const pattern = PatternDatabase.getPattern(ev.target.value);
        this.setState({
            "patternName": ev.target.value,
            "parameters": pattern.parameters
        });
        this.props.handlePatternChange(pattern.pattern);
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
                {this.state.parameters}
            </div>
        );
    }
}
