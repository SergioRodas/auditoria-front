import React from "react";

interface LogOutProps {
    width?: string;
    height?: string;
    fill?: string;
    onClick?: () => void;
}

const LogOut: React.FC<LogOutProps> = ({width, height, fill, onClick}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={width ? width : "25px"}
             height={height ? height : "25px"}
             viewBox="0 0 25 21"
             fill="none"
             onClick={onClick}
        >

            <path
                d="M15 15V17.2917C15 17.8995 14.7586 18.4823 14.3288 18.9121C13.899 19.3419 13.3161 19.5833 12.7083 19.5833H3.54167C2.93388 19.5833 2.35098 19.3419 1.92121 18.9121C1.49144 18.4823 1.25 17.8995 1.25 17.2917V3.54167C1.25 2.93388 1.49144 2.35098 1.92121 1.92121C2.35098 1.49144 2.93388 1.25 3.54167 1.25H12.25C13.5156 1.25 15 2.27609 15 3.54167V5.83333M18.6667 15L23.25 10.4167L18.6667 5.83333M7.66667 10.4167H22.3333"
                stroke="#595959"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default LogOut;