import React from "react";

interface ArrowDownProps {
    width?: string;
    height?: string;
    fill?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = ({width, height}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : "13px"}
            height={height ? height : "8px"}
            viewBox="0 0 13 8"
            fill="none"
        >
            <path
                d="M0.533276 0.962201C0.709084 0.786447 0.947497 0.687714 1.19609 0.687714C1.44468 0.687714 1.68309 0.786447 1.8589 0.962201L6.49953 5.60283L11.1402 0.962201C11.317 0.791428 11.5538 0.696933 11.7996 0.699069C12.0454 0.701205 12.2805 0.799801 12.4544 0.973621C12.6282 1.14744 12.7268 1.38258 12.7289 1.62839C12.731 1.8742 12.6366 2.11101 12.4658 2.28783L7.16234 7.59126C6.98653 7.76702 6.74812 7.86575 6.49953 7.86575C6.25094 7.86575 6.01252 7.76702 5.83671 7.59126L0.533276 2.28783C0.357522 2.11202 0.258789 1.8736 0.258789 1.62501C0.258789 1.37642 0.357522 1.13801 0.533276 0.962201Z"
                fill="#595959"/>
        </svg>
    );
};

export default ArrowDown;