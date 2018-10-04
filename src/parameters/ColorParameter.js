import React from "react";

export default class ColorParameter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "value": this.props.defaultValue || "#000000"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        if (ev.target.value.match(/^#[0-9a-fA-F]{6}$/)) {
            this.setState({
                "value": ev.target.value
            }, () => {
                this.pattern.forceUpdate();
            });
        }
    }

    render() {
        return (
            <div className="input-field">
                <label>{this.props.label}</label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}
