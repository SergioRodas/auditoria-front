import React from "react";

interface ArrowRightProps {
    width?: string;
    height?: string;
    fill?: string;
    onClick?: () => void;
}

const ArrowRight: React.FC<ArrowRightProps> = ({width, height, fill, onClick}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : "22px"}
            height={height ? height : "32px"}
            viewBox="0 0 22 32"
            fill="none"
            onClick={onClick}
        >
            <path
                d="M4.56055 31.4299L20.4902 17.7795C20.7469 17.5595 20.9529 17.2865 21.0941 16.9794C21.2353 16.6723 21.3084 16.3382 21.3084 16.0002C21.3084 15.6622 21.2353 15.3281 21.0941 15.021C20.9529 14.7139 20.7469 14.4409 20.4902 14.2209L4.56055 0.570508C3.04004 -0.732226 0.691406 0.347852 0.691406 2.3498V29.6545C0.691406 31.6564 3.04004 32.7365 4.56055 31.4299Z"
                fill="black" fillOpacity="0.4"
            />
        </svg>
    );
};

export default ArrowRight;