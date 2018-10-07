import React from "react";
import NumericParameter from "../parameters/NumericParameter";
import ColorParameter from "../parameters/ColorParameter";
import PatternDatabase from "../PatternDatabase";

const dpi = 300;
const margin = 5;

class TriangleMesh extends React.Component {
    constructor(props) {
        super(props);
        this.props.width.current.pattern = this;
        this.props.height.current.pattern = this;
        this.props.spacing.current.pattern = this;
        this.props.spacingDeviation.current.pattern = this;
        this.props.vertexSize.current.pattern = this;
        this.props.edgeSize.current.pattern = this;
        this.props.steps.current.pattern = this;
        this.props.background.current.pattern = this;
        this.props.foreground.current.pattern = this;
    }

    render() {
        const w = this.props.width.current.state.value * dpi;
        const h = this.props.height.current.state.value * dpi;
        const spacing = this.props.spacing.current.state.value * dpi;
        const vertSpacing = spacing * Math.sin(Math.PI / 3);
        const spacingDev = this.props.spacingDeviation.current.state.value * dpi;
        const vertexSize = this.props.vertexSize.current.state.value * dpi;
        const edgeSize = this.props.edgeSize.current.state.value * dpi;
        const color = this.props.foreground.current.state.value;
        let gfx = [];
        if ((spacing === 0 && spacingDev === 0) || spacingDev < 0) {
            gfx.push(<rect x="0" y="0" width={w} height={h} fill={color} key="box" />);
        } else {
            let verts = [];
            let edges = [];
            try {
                let offset = 0;
                for (let y = -vertSpacing * margin, prevCount = 0; y < h + vertSpacing * margin; y += vertSpacing) {
                    let count = 0;
                    for (let x = -spacing * margin + offset, firstX = true; x < w + spacing * margin; x += spacing) {
                        let v = [ x, y, [] ];
                        verts.push(v);
                        if (!firstX) {
                            edges.push([ v, verts[verts.length - 2] ]);
                            v[2].push(verts[verts.length - 2]);
                            verts[verts.length - 2][2].push(v);
                        }
                        if (prevCount > 0 && count < prevCount) {
                            edges.push([ v, verts[verts.length - prevCount - 1] ]);
                            v[2].push(verts[verts.length - prevCount - 1]);
                            verts[verts.length - prevCount - 1][2].push(v);
                            if (!firstX || offset !== 0) {
                                edges.push([ v, verts[verts.length - prevCount - (offset === 0 ? 2 : 0)] ]);
                                v[2].push(verts[verts.length - prevCount - (offset === 0 ? 2 : 0)]);
                                verts[verts.length - prevCount - (offset === 0 ? 2 : 0)][2].push(v);
                            }
                        }
                        firstX = false;
                        ++count;
                    }
                    prevCount = count;
                    offset = spacing / 2 - offset;
                }
                for (let i = 0; i < this.props.steps.current.state.value; ++i) {
                    verts.forEach(v => {
                        let d = spacingDev * Math.random();
                        let a = Math.PI * 2 * Math.random();
                        let x = v[0] + d * Math.cos(a);
                        let y = v[1] + d * Math.sin(a);
                        let valid = true;
                        v[2].forEach(v2 => {
                            if (Math.sqrt(Math.pow(x - v2[0], 2) + Math.pow(y - v2[1], 2)) > spacing + spacingDev) {
                                valid = false;
                            }
                        });
                        if (valid) {
                            v[0] = x;
                            v[1] = y;
                        }
                    });
                    let cont;
                    do {
                        cont = false;
                        for (let j = 0; j < verts.length; ++j) {
                            let neighborhood = verts.filter(v => Math.sqrt(Math.pow(v[0] - verts[j][0], 2) + Math.pow(v[1] - verts[j][1], 2)) < spacing - spacingDev);
                            if (neighborhood.length > 1) {
                                let x = 0;
                                let y = 0;
                                neighborhood.forEach(v => {
                                    x += v[0];
                                    y += v[1];
                                });
                                x /= neighborhood.length;
                                y /= neighborhood.length;
                                const v1 = neighborhood[0];
                                neighborhood.splice(0, 1);
                                v1[0] = x;
                                v1[1] = y;
                                neighborhood.forEach(v2 => {
                                    v2[2].forEach(v3 => {
                                        if (v1[2].indexOf(v3) < 0) {
                                            v1[2].push(v3);
                                            v3[2][v3[2].indexOf(v2)] = v1;
                                            edges.push([ v1, v3 ]);
                                        }
                                    });
                                    let deadEdges = [];
                                    edges.forEach(e => {
                                        if (e[0] === v2 || e[1] === v2) {
                                            deadEdges.push(e);
                                        }
                                    });
                                    deadEdges.forEach(e => {
                                        edges.splice(edges.indexOf(e), 1);
                                    });
                                    verts.splice(verts.indexOf(v2), 1);
                                });
                            }
                        }
                    } while (cont);
                }
                let deadVerts = [];
                verts.forEach(v => {
                    if (v[0] < 0 || v[0] > w || (v[1] < 0 && v[1] > h)) {
                        deadVerts.push(v);
                    }
                });
                deadVerts.forEach(v => {
                    verts.splice(verts.indexOf(v), 1);
                });
                verts.forEach(v1 => {
                    deadVerts = [];
                    v1[2].forEach(v2 => {
                        if (verts.indexOf(v2) < 0) {
                            deadVerts.push(v2);
                        }
                    });
                    deadVerts.forEach(v2 => {
                        v1[2].splice(v1[2].indexOf(v2), 1);
                    });
                });
                let deadEdges = [];
                edges.forEach(e => {
                    if (verts.indexOf(e[0]) < 0 || verts.indexOf(e[1]) < 0) {
                        deadEdges.push(e);
                    }
                });
                deadEdges.forEach(e => {
                    edges.splice(edges.indexOf(e), 1);
                });
                offset = w / 2;
                verts.forEach(v => {
                    if (v[0] > offset) {
                        v[0] -= offset;
                    } else {
                        v[0] += offset;
                    }
                });
                let topLeft = verts[0];
                let topRight = verts[0];
                let bottomLeft = verts[0];
                let bottomRight = verts[0];
                verts.forEach(v => {
                    if (Math.sqrt(Math.pow(topLeft[0], 2) + Math.pow(topLeft[1], 2)) > Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2))) {
                        topLeft = v;
                    }
                    if (Math.sqrt(Math.pow(w - topRight[0], 2) + Math.pow(topRight[1], 2)) > Math.sqrt(Math.pow(w - v[0], 2) + Math.pow(v[1], 2))) {
                        topRight = v;
                    }
                    if (Math.sqrt(Math.pow(bottomLeft[0], 2) + Math.pow(h - bottomLeft[1], 2)) > Math.sqrt(Math.pow(v[0], 2) + Math.pow(h - v[1], 2))) {
                        bottomLeft = v;
                    }
                    if (Math.sqrt(Math.pow(w - bottomRight[0], 2) + Math.pow(h - bottomRight[1], 2)) > Math.sqrt(Math.pow(w - v[0], 2) + Math.pow(h - v[1], 2))) {
                        bottomRight = v;
                    }
                });
                let wrappingMap = {};
                let loop = (v) => {
                    let v2 = [ w + v[0], v[1], [] ];
                    verts.push(v2);
                    wrappingMap[v.slice(0, 2)] = v2;
                };
                let v;
                for (v = topLeft; v !== bottomLeft;) {
                    loop(v);
                    // eslint-disable-next-line
                    let vs = v[2].filter(v2 => v2[1] > v[1]);
                    let v1 = vs[0];
                    vs.forEach(v2 => {
                        if (v1[0] > v2[0]) {
                            v1 = v2;
                        }
                    });
                    v = v1;
                }
                loop(v);
                loop = (v) => {
                    let v2 = [ v[0] - w, v[1], [] ];
                    verts.push(v2);
                    wrappingMap[v.slice(0, 2)] = v2;
                };
                for (v = topRight; v !== bottomRight;) {
                    loop(v);
                    // eslint-disable-next-line
                    let vs = v[2].filter(v2 => v2[1] > v[1]);
                    let v1 = vs[0];
                    vs.forEach(v2 => {
                        if (v1[0] < v2[0]) {
                            v1 = v2;
                        }
                    });
                    v = v1;
                }
                loop(v);
                deadEdges = [];
                let newEdges = [];
                edges.forEach(e => {
                    let hash1 = e[0].slice(0, 2);
                    let hash2 = e[1].slice(0, 2);
                    if (wrappingMap[hash1] && wrappingMap[hash2] && Math.abs(e[0][0] - e[1][0]) > w / 2) {
                        e[0][2].splice(e[0][2].indexOf(e[1]));
                        e[1][2].splice(e[1][2].indexOf(e[0]));
                        deadEdges.push(e);
                        newEdges.push([ e[0], wrappingMap[hash2] ]);
                        e[0][2].push(wrappingMap[hash2]);
                        wrappingMap[hash2][2].push(e[0]);
                        newEdges.push([ e[1], wrappingMap[hash1] ]);
                        e[1][2].push(wrappingMap[hash1]);
                        wrappingMap[hash1][2].push(e[1]);
                    }
                });
                deadEdges.forEach(e => {
                    edges.splice(edges.indexOf(e), 1);
                });
                newEdges.forEach(e => {
                    edges.push(e);
                });
                topLeft = [ w, h ];
                topRight = [ 0, h ];
                bottomRight = [ 0, 0 ];
                bottomLeft = [ w, 0 ];
                verts.forEach(v => {
                    if (v[0] < w / 2) {
                        if (Math.sqrt(Math.pow(w / 2 - topLeft[0], 2) + Math.pow(topLeft[1], 2)) > Math.sqrt(Math.pow(w / 2 - v[0], 2) + Math.pow(v[1], 2))) {
                            topLeft = v;
                        }
                        if (Math.sqrt(Math.pow(w / 2 - bottomLeft[0], 2) + Math.pow(h - bottomLeft[1], 2)) > Math.sqrt(Math.pow(w / 2 - v[0], 2) + Math.pow(h - v[1], 2))) {
                            bottomLeft = v;
                        }
                    } else {
                        if (Math.sqrt(Math.pow(topRight[0], 2) + Math.pow(topRight[1], 2)) > Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2))) {
                            topRight = v;
                        }
                        if (Math.sqrt(Math.pow(bottomRight[0], 2) + Math.pow(h - bottomRight[1], 2)) > Math.sqrt(Math.pow(v[0], 2) + Math.pow(h - v[1], 2))) {
                            bottomRight = v;
                        }
                    }
                });
                let leftSide = [];
                loop = (v) => {
                    if (v) {
                        leftSide.push(v);
                    }
                };
                for (v = topLeft; v !== bottomLeft;) {
                    loop(v);
                    // eslint-disable-next-line
                    let vs = v[2].filter(v2 => v2[1] > v[1]);
                    let v1 = vs[0];
                    vs.forEach(v2 => {
                        if (v1[0] < v2[0]) {
                            v1 = v2;
                        }
                    });
                    v = v1;
                }
                loop(v);
                loop = (v) => {
                    let s = leftSide.sort((a, b) => Math.abs(v[1] - a[1]) - Math.abs(v[1] - b[1]));
                    for (var i = 0; i < 3; ++i) {
                        v[2].push(s[i]);
                        s[i][2].push(v);
                        edges.push([ v, s[i] ]);
                    }
                };
                for (v = topRight; v !== bottomRight;) {
                    // eslint-disable-next-line
                    let vs = v[2].filter(v2 => v2[1] > v[1]);
                    let v1 = vs[0];
                    vs.forEach(v2 => {
                        if (v1[0] > v2[0]) {
                            v1 = v2;
                        }
                    });
                    loop(v);
                    v = v1;
                }
                loop(v);
                deadEdges = [];
                edges.forEach(e1 => {
                    if (deadEdges.indexOf(e1) < 0) {
                        let m1 = (e1[0][1] - e1[1][1]) / (e1[0][0] - e1[1][0]);
                        let t1 = m1 * e1[0][0] - e1[0][1];
                        let l1 = Math.min(e1[0][0], e1[1][0]) + 0.0001;
                        let g1 = Math.max(e1[0][0], e1[1][0]) - 0.0001;
                        edges.forEach(e2 => {
                            let m2 = (e2[0][1] - e2[1][1]) / (e2[0][0] - e2[1][0]);
                            let t2 = m2 * e2[0][0] - e2[0][1];
                            let l2 = Math.min(e2[0][0], e2[1][0]) + 0.0001;
                            let g2 = Math.max(e2[0][0], e2[1][0]) - 0.0001;
                            let x =(t1 - t2) / (m1 - m2);
                            if (x > l1 && x > l2 && x < g1 && x < g2) {
                                e2[0][2].splice(e2[0][2].indexOf(e2[1]), 1);
                                e2[1][2].splice(e2[1][2].indexOf(e2[0]), 1);
                                edges.splice(edges.indexOf(e2), 1);
                                deadEdges.push(e2);
                            }
                        });
                    }
                });
                let middles = verts.filter(v => Math.abs(w / 2 - v[0]) < w / 4);
                for (let i = 0; i < this.props.steps.current.state.value; ++i) {
                    middles.forEach(v => {
                        let d = spacingDev * Math.random();
                        let a = Math.PI * 2 * Math.random();
                        let x = v[0] + d * Math.cos(a);
                        let y = v[1] + d * Math.sin(a);
                        let valid = true;
                        v[2].forEach(v2 => {
                            if (Math.sqrt(Math.pow(x - v2[0], 2) + Math.pow(y - v2[1], 2)) > spacing + spacingDev) {
                                valid = false;
                            }
                        });
                        if (valid) {
                            v[0] = x;
                            v[1] = y;
                        }
                    });
                    let cont;
                    do {
                        cont = false;
                        for (let j = 0; j < verts.length; ++j) {
                            let neighborhood = verts.filter(v => Math.sqrt(Math.pow(v[0] - verts[j][0], 2) + Math.pow(v[1] - verts[j][1], 2)) < spacing - spacingDev);
                            if (neighborhood.length > 1) {
                                let x = 0;
                                let y = 0;
                                neighborhood.forEach(v => {
                                    x += v[0];
                                    y += v[1];
                                });
                                x /= neighborhood.length;
                                y /= neighborhood.length;
                                const v1 = neighborhood[0];
                                neighborhood.splice(0, 1);
                                v1[0] = x;
                                v1[1] = y;
                                neighborhood.forEach(v2 => {
                                    v2[2].forEach(v3 => {
                                        if (v1[2].indexOf(v3) < 0) {
                                            v1[2].push(v3);
                                            v3[2][v3[2].indexOf(v2)] = v1;
                                            edges.push([ v1, v3 ]);
                                        }
                                    });
                                    let deadEdges = [];
                                    edges.forEach(e => {
                                        if (e[0] === v2 || e[1] === v2) {
                                            deadEdges.push(e);
                                        }
                                    });
                                    deadEdges.forEach(e => {
                                        edges.splice(edges.indexOf(e), 1);
                                    });
                                    verts.splice(verts.indexOf(v2), 1);
                                    middles.splice(middles.indexOf(v2), 1);
                                });
                            }
                        }
                    } while (cont);
                }
                deadEdges = [];
                edges.forEach(e => {
                    if (verts.indexOf(e[0]) < 0 || verts.indexOf(e[1]) < 0) {
                        deadEdges.push(e);
                    }
                });
                deadEdges.forEach(e => {
                    edges.splice(edges.indexOf(e), 1);
                });
            } catch (ex) {
                console.error(ex);
            }
            edges.forEach((edge, i) => {
                gfx.push(<line x1={edge[0][0]} y1={edge[0][1]} x2={edge[1][0]} y2={edge[1][1]} strokeWidth={edgeSize} stroke={color} key={`edge-${i}`} />);
            });
            verts.forEach((vert, i) => {
                gfx.push(<circle cx={vert[0]} cy={vert[1]} r={vertexSize} fill={color} key={`vert-${i}`} />);
            });
        }
        return (
            <svg viewBox={`0 0 ${w} ${h}`}>
                <rect x="0" y="0" width={w} height={h} fill={this.props.background.current.state.value} />
                {gfx}
            </svg>
        );
    }
}

(() => {
    const widthRef = React.createRef();
    const heightRef = React.createRef();
    const spacingRef = React.createRef();
    const spacingDeviationRef = React.createRef();
    const vertexSizeRef = React.createRef();
    const edgeSizeRef = React.createRef();
    const stepsRef = React.createRef();
    const backgroundRef = React.createRef();
    const foregroundRef = React.createRef();
    const width = <NumericParameter label="Width" defaultValue={8.5} key="width" ref={widthRef} />;
    const height = <NumericParameter label="Height" defaultValue={11} key="height" ref={heightRef} />;
    const spacing = <NumericParameter label="Average Spacing" defaultValue={1} key="spacing" ref={spacingRef} />;
    const spacingDeviation = <NumericParameter label="Spacing Deviation" defaultValue={0.5} key="spacing-dev" ref={spacingDeviationRef} />;
    const vertexSize = <NumericParameter label="Vertex Size" defaultValue={0.125} key="vertex" ref={vertexSizeRef} />;
    const edgeSize = <NumericParameter label="Edge Size" defaultValue={0.02} key="edge" ref={edgeSizeRef} />;
    const steps = <NumericParameter label="Steps" defaultValue={10} key="steps" ref={stepsRef} />;
    const background = <ColorParameter label="Background Color" defaultValue="#FFFFFF" key="background" ref={backgroundRef} />;
    const foreground = <ColorParameter label="Foreground Color" defaultValue="#3F3FFF" key="foreground" ref={foregroundRef} />;
    PatternDatabase.register("Triangle Mesh", [
        width,
        height,
        spacing,
        spacingDeviation,
        vertexSize,
        edgeSize,
        steps,
        background,
        foreground
    ], <TriangleMesh width={widthRef} height={heightRef} spacing={spacingRef} spacingDeviation={spacingDeviationRef} vertexSize={vertexSizeRef} edgeSize={edgeSizeRef} steps={stepsRef} background={backgroundRef} foreground={foregroundRef} />);
})();
