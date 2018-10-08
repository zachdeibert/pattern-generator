import React from "react";
import "./DownloadButton.css";

export default class DownloadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "dataURI": null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.dataURI) {
            this.setState({
                "dataURI": null
            });
        } else {
            this.setState({
                "dataURI": "data:application/octet-stream;base64," + btoa(document.querySelector("svg").outerHTML)
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.dataURI && (
                    <div className="download-dialog">
                        <div className="background" onClick={this.handleClick} />
                        <div className="dialog">
                            <h2>Download Ready</h2>
                            <a download="pattern.svg" href={this.state.dataURI}>Download pattern.svg</a>
                        </div>
                    </div>
                )}
                <div className="download-button material-icons" onClick={this.handleClick}>
                    cloud_download
                </div>
            </div>
        );
    }
}
