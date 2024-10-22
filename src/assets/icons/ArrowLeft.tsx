import React from "react";

interface ArrowLeftProps {
    width?: string;
    height?: string;
    fill?: string;
    onClick?: () => void;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({width, height, fill, onClick}) => {
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
                d="M17.4393 0.570153L1.50962 14.2205C1.25299 14.4406 1.04699 14.7135 0.905761 15.0206C0.76453 15.3278 0.691406 15.6618 0.691406 15.9998C0.691406 16.3379 0.76453 16.6719 0.905761 16.979C1.04699 17.2862 1.25299 17.5591 1.50962 17.7791L17.4393 31.4295C18.9598 32.7323 21.3084 31.6522 21.3084 29.6502V2.34554C21.3084 0.34359 18.9598 -0.736488 17.4393 0.570153Z"
                fill="black" fillOpacity="0.4"
            />
        </svg>
    );
};

export default ArrowLeft;