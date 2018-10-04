import React from "react";

export default class NumericParameter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": this.props.defaultValue || 0,
            "textValue": this.props.defaultValue || ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleStateChanged = this.handleStateChanged.bind(this);
    }

    handleStateChanged() {
        this.pattern.forceUpdate();
    }

    handleChange(ev) {
        if (ev.target.value === "") {
            this.setState({
                "value": 0,
                "textValue": ""
            }, this.handleStateChanged);
        } else {
            const value = parseFloat(ev.target.value);
            if (!isNaN(value)) {
                if (ev.target.value.endsWith(".")) {
                    this.setState({
                        "value": value,
                        "textValue": `${value}.`
                    }, this.handleStateChanged);
                } else {
                    this.setState({
                        "value": value,
                        "textValue": value
                    }, this.handleStateChanged);
                }
            }
        }
    }

    render() {
        return (
            <div className="input-field">
                <label>{this.props.label}</label>
                <input type="text" value={this.state.textValue} onChange={this.handleChange} />
            </div>
        );
    }
}
