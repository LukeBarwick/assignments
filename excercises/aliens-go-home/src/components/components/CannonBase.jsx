import React from 'react';
import { pathFromBezierCurve } from '../utils/formulas';

const CannonBase = (props) => {

    const cannonBaseStyle = {
        fill: '#a16012',
        stroke: '#65450e',
        strokeWidth: '2px',

    };

    const baseWith = 90;

    const halfBase = 40;

    const height = 60;
    const negativeHeight = height * -1;


    const cubicBezierCurve = {
        initialAxis: {
            x: -halfBase
            y: height,

        },
        initialControlPoint: {
            x: 20,
            y: negativeHeight,
        },
        endingControlPoint: {
            x: 60,
            y: negativeHeight,

        },
        endingAxis: {
            x: baseWith,
            y: 0,
        },
    };
        return (
            <g>
                <path
                    style={cannonBaseStyle}
                    d={pathFromBezierCurve(cubicBezierCurve)}
                />
            </g>
        );
};

export default CannonBase;
