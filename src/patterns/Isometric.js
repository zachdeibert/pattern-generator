import React from "react";
import NumericParameter from "../parameters/NumericParameter";
import ColorParameter from "../parameters/ColorParameter";
import PatternDatabase from "../PatternDatabase";

const dpi = 300;
const tan30 = Math.tan(Math.PI / 6);

class Isometric extends React.Component {
    constructor(props) {
        super(props);
        this.props.width.current.pattern = this;
        this.props.height.current.pattern = this;
        this.props.size.current.pattern = this;
        this.props.foreground.current.pattern = this;
        this.props.background.current.pattern = this;
    }

    render() {
        const w = this.props.width.current.state.value * dpi;
        const h = this.props.height.current.state.value * dpi;
        const s = this.props.size.current.state.value * dpi;
        const c = this.props.foreground.current.state.value;
        const dy = s / tan30 / 2;
        let lines = [];
        let i = 0;
        if (s > 0) {
            for (let y = dy; y < h; y += dy) {
                lines.push(<line x1={0} x2={w} y1={y} y2={y} stroke={c} key={`line-${i++}`} />);
            }
            let maxY = dy;
            for (let y = dy; y < h + w / tan30; y += 2 * dy) {
                let x1 = 0;
                let y1 = y;
                if (y1 > h) {
                    x1 = (y1 - h) * tan30;
                    y1 = h;
                } else {
                    maxY = y1;
                }
                let x2 = w;
                let y2 = y - w / tan30;
                if (y2 < 0) {
                    x2 -= -y2 * tan30;
                    y2 = 0;
                }
                lines.push(<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} key={`line-${i++}`} />);
            }
            for (let y = maxY; y > -w / tan30; y -= 2 * dy) {
                let x1 = 0;
                let y1 = y;
                if (y1 < 0) {
                    x1 += -y1 * tan30;
                    y1 = 0;
                }
                let x2 = w;
                let y2 = y + w / tan30;
                if (y2 > h) {
                    x2 -= (y2 - h) * tan30;
                    y2 = h;
                }
                lines.push(<line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} key={`line-${i++}`} />);
            }
        } else {
            lines.push(<rect x="0" y="0" width={w} height={h} fill={c} key={`line-${i++}`} />);
        }
        return (
            <svg viewBox={`0 0 ${w} ${h}`}>
                <rect x="0" y="0" width={w} height={h} fill={this.props.background.current.state.value} />
                {lines}
            </svg>
        );
    }
}

(() => {
    const widthRef = React.createRef();
    const heightRef = React.createRef();
    const sizeRef = React.createRef();
    const backgroundRef = React.createRef();
    const foregroundRef = React.createRef();
    const width = <NumericParameter label="Width" defaultValue={8.5} key="width" ref={widthRef} />;
    const height = <NumericParameter label="Height" defaultValue={11} key="height" ref={heightRef} />;
    const size = <NumericParameter label="Size" defaultValue={0.25} key="size" ref={sizeRef} />;
    const background = <ColorParameter label="Background Color" defaultValue="#FFFFFF" key="background" ref={backgroundRef} />;
    const foreground = <ColorParameter label="Foreground Color" defaultValue="#3F3FFF" key="foreground" ref={foregroundRef} />;
    PatternDatabase.register("Isometric Paper", [
        width,
        height,
        size,
        background,
        foreground
    ], <Isometric width={widthRef} height={heightRef} size={sizeRef} background={backgroundRef} foreground={foregroundRef} />);
})();
