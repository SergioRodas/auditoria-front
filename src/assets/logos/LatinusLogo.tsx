import React from "react";

interface LatinusProps {
    width?: string;
    height?: string;
    fill?: string;
}

const Latinus: React.FC<LatinusProps> = ({width, height, fill}) => {
    return (
        <svg
            width={width ? width : "80px"}
            height={height ? height : "80px"}
            viewBox="0 0 450 325"
            fill={fill ? fill : "none"}
            xmlns="http://www.w3.org/1999/xlink">
            <g clipPath="url(#clip0_628_398)">
                <path d="M450 0H0V325H450V0Z" fill="url(#pattern0)"/>
            </g>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_628_398" transform="scale(0.00222222 0.00307692)"/>
                </pattern>
                <clipPath id="clip0_628_398">
                    <rect width="450" height="325" fill="white"/>
                </clipPath>
                <image id="image0_628_398" width="450" height="325"
                       xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>

    );
};

export default Latinus;