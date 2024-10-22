import React from "react";

interface ArrowDropdownProps {
    width?: string;
    height?: string;
    fill?: string;
}

const ArrowDropdown: React.FC<ArrowDropdownProps> = ({width, height}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : "13px"}
            height={height ? height : "8px"}
            viewBox="0 0 13 8"
            fill="none"
        >
            <path
                d="M12.4667 7.0378C12.2909 7.21355 12.0525 7.31229 11.8039 7.31229C11.5553 7.31229 11.3169 7.21355 11.1411 7.0378L6.50047 2.39717L1.85985 7.0378C1.68303 7.20857 1.44622 7.30307 1.20041 7.30093C0.954599 7.2988 0.719462 7.2002 0.545642 7.02638C0.371822 6.85256 0.273227 6.61742 0.271091 6.37161C0.268955 6.1258 0.36345 5.88899 0.534223 5.71217L5.83766 0.408736C6.01347 0.232982 6.25188 0.134249 6.50047 0.134249C6.74906 0.134249 6.98748 0.232982 7.16329 0.408736L12.4667 5.71217C12.6425 5.88798 12.7412 6.1264 12.7412 6.37499C12.7412 6.62358 12.6425 6.86199 12.4667 7.0378Z"
                fill="#595959"/>
        </svg>
    );
};

export default ArrowDropdown;