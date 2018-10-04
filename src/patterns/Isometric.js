import React from "react";
import NumericParameter from "../parameters/NumericParameter";
import PatternDatabase from "../PatternDatabase";

class Isometric extends React.Component {
    render() {
        return (
            <g>

            </g>
        );
    }
}

(() => {
    const width = <NumericParameter label="Width" defaultValue={8.5} key="width" />;
    const height = <NumericParameter label="Height" defaultValue={11} key="height" />;
    const size = <NumericParameter label="Size" defaultValue={0.25} key="size" />;
    PatternDatabase.register("Isometric Paper", [
        width,
        height,
        size
    ], <Isometric width={width} height={height} size={size} />);
})();
