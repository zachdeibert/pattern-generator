import React from "react";

export default class NumericParameter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": this.props.defaultValue || 0,
            "textValue": this.props.defaultValue || ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        if (ev.target.value === "") {
            this.setState({
                "value": 0,
                "textValue": ""
            });
        } else {
            const value = parseFloat(ev.target.value);
            if (!isNaN(value)) {
                if (ev.target.value.endsWith(".")) {
                    this.setState({
                        "value": value,
                        "textValue": `${value}.`
                    });
                } else {
                    this.setState({
                        "value": value,
                        "textValue": value
                    });
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
