import React from "react";

interface ElEconomistaProps {
    width?: string;
    height?: string;
    fill?: string;
}

const ElEconomista: React.FC<ElEconomistaProps> = ({width, height, fill}) => {
    return (
        <svg
            width={width ? width : "140px"}
            height={height ? height : "140px"}
            viewBox="0 0 600 57"
            fill={fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M569.8 14.4999L576.3 34.3999H563.1L569.5 14.4999H569.8ZM558.6 49.1999L562.9 35.6999H576.9L582.3 51.7999L577.4 52.2999V53.0999H599V52.2999L596 51.7999L576.8 3.8999L570.3 8.3999L557 49.1999L549.5 52.2999V52.9999H566V52.1999L558.6 49.1999Z"
                fill="black"/>
            <path
                d="M125.7 51.8V5.5L129.9 5.1V4H110.3V5.1L114.5 5.5V51.3L110.3 51.8V53H147.3L148 40.8H147.3L139.3 51.3L125.7 51.8Z"
                fill="black"/>
            <path
                d="M182.4 5.1L195.2 5.5L202.9 16H203.6L203.3 4H167V5.1L171.2 5.5V51.3L167 51.8V53H204L204.7 40.8H204L195.9 51.3L182.4 51.8V29.1L192.1 29.5L195.9 37.2H196.6V19.4H195.9L192.1 27.5L182.4 27.8V5.1Z"
                fill="black"/>
            <path d="M457.7 51.7V53H477.1V51.7L472.9 51.2V5.6L477.1 5.1V4H457.7V5.1L461.8 5.6V51.2L457.7 51.7Z"
                  fill="black"/>
            <path
                d="M84.1998 5.1L97.0998 5.5L104.7 16H105.4L105.1 4H68.7998V5.1L72.9998 5.5V51.3L68.7998 51.8V53H105.8L106.5 40.8H105.8L97.7998 51.3L84.1998 51.8V29.1L93.8998 29.5L97.7998 37.2H98.3998V19.4H97.7998L93.8998 27.5L84.1998 27.8V5.1Z"
                fill="black"/>
            <path
                d="M261.5 28.4998C261.5 12.7998 265.6 4.9998 274.5 4.9998C283.4 4.9998 287.5 12.7998 287.5 28.4998C287.5 44.1998 283.4 51.9998 274.5 51.9998C265.6 51.9998 261.5 44.1998 261.5 28.4998ZM249.8 28.4998C249.8 42.7998 261.6 53.1998 274.4 53.1998C287.3 53.1998 299 42.7998 299 28.4998C299 14.1998 287.2 3.7998 274.4 3.7998C261.6 3.7998 249.8 14.1998 249.8 28.4998Z"
                fill="black"/>
            <path
                d="M246.2 48.7998L246.9 37.1998H246.2L241.4 45.1998C240 47.6998 236.3 51.8998 231.8 51.8998C222.2 51.8998 218.1 44.0998 218.1 28.3998C218.1 12.6998 222.9 4.8998 231.8 4.8998C236.2 4.8998 239.7 9.0998 241 11.5998L245.8 19.5998H246.5L246.2 7.9998C243.5 6.2998 237.3 3.7998 230.5 3.7998C216.1 3.7998 206.5 14.1998 206.5 28.4998C206.5 42.7998 216.1 53.1998 230.5 53.1998C237.3 52.9998 243.5 50.4998 246.2 48.7998Z"
                fill="black"/>
            <path
                d="M337.2 33.9999L316.6 3.8999H299.2V4.8999L306.6 5.2999V48.7999L299.2 51.8999V52.7999H315.9V51.8999L308.1 48.7999L307.9 11.5999H308.3L337.3 52.9999H339V7.7999L346.3 4.6999V3.9999H329.7V4.6999L337.4 7.7999L337.6 33.9999H337.2Z"
                fill="black"/>
            <path
                d="M358.6 28.4998C358.6 12.7998 362.7 4.9998 371.6 4.9998C380.5 4.9998 384.6 12.7998 384.6 28.4998C384.6 44.1998 380.5 51.9998 371.6 51.9998C362.7 51.9998 358.6 44.1998 358.6 28.4998ZM347 28.4998C347 42.7998 358.8 53.1998 371.6 53.1998C384.5 53.1998 396.2 42.7998 396.2 28.4998C396.2 14.1998 384.4 3.7998 371.6 3.7998C358.8 3.7998 347 14.1998 347 28.4998Z"
                fill="black"/>
            <path
                d="M428.6 34.8L415.4 4H397.1V5.1L404.4 5.6V49L397.1 52V52.8H413.7V52L406 49L405.6 11.8H406.1L423.4 52.8H424.9L438.1 8.9H438.6V51.2L434.5 51.8V53H453.9V51.8L449.7 51.2V5.4L453.9 4.9V4H438.4L429 34.8H428.6Z"
                fill="black"/>
            <path
                d="M483.5 48.8999C487.3 51.2999 491.7 53.0999 496.7 53.0999C505.9 53.0999 514 48.2999 514 37.9999C514 29.0999 506.1 24.6999 499.3 21.9999C494.4 19.9999 489.7 17.5999 489.7 12.3999C489.7 5.8999 495.9 4.8999 498.1 4.8999C502.7 4.8999 505.8 7.5999 508.9 14.0999C509.6 15.5999 510.3 16.9999 511 18.4999H511.7L511.4 4.1999H510.7L510 7.1999C507.2 5.3999 502.3 3.8999 498.1 3.8999C488.7 3.8999 481.2 8.8999 481.2 17.5999C481.2 25.8999 488.2 29.6999 495.1 32.5999C500.2 34.7999 505.5 37.6999 505.5 43.4999C505.5 49.9999 501 51.9999 496.8 51.9999C491.1 51.9999 487.3 48.4999 484.6 42.0999C483.9 40.4999 483.2 38.8999 482.5 37.2999H481.8L482.1 52.5999H482.8L483.5 48.8999Z"
                fill="black"/>
            <path
                d="M516.5 15.9001H517.2L524.8 5.7001L530.4 5.4001V51.4001L526.2 51.9001V52.9001H545.6V51.9001L541.5 51.4001V5.4001L547 5.7001L554.6 15.9001H555.3L555 4.1001H516.9L516.5 15.9001Z"
                fill="black"/>
            <path
                d="M57.3 23.6999C57.3 23.5999 57.2 23.4999 57.1 23.4999C57 23.4999 56.9 23.5999 56.9 23.6999C54.4 33.0999 46.8 40.9999 36.6 43.4999C21.5 47.1999 6.19999 34.6999 3.29999 23.2999C2.79999 20.2999 2.99999 20.1999 3.09999 19.0999C3.09999 19.2999 3.19999 19.5999 3.19999 19.8999C3.69999 22.8999 5.09999 25.7999 7.49999 28.4999C15.1 37.0999 30.4 39.7999 41.4 33.6999C52.3 27.6999 54.8 15.7999 46.9 6.8999C44.9 4.5999 42.4 2.7999 39.7 1.3999H39.6C39.5 1.3999 39.4 1.4999 39.4 1.5999C39.4 1.6999 39.4 1.6999 39.5 1.6999C46.1 9.7999 44.7 21.0999 36.1 27.1999C27.2 33.5999 14 31.7999 6.89999 23.7999C5.39999 22.0999 4.19999 19.9999 3.79999 18.6999C3.69999 18.3999 3.59999 18.0999 3.59999 17.7999C3.59999 17.7999 3.59999 17.7999 3.59999 17.6999C5.29999 18.9999 10.3 22.5999 16.8 22.5999C38 22.6999 35.9 2.6999 21.9 2.5999C18 2.5999 13.5 4.0999 9.09999 7.9999C6.59999 10.5999 4.69999 12.8999 2.99999 16.9999C2.99999 16.9999 1.99999 19.5999 1.59999 21.6999C1.49999 22.1999 1.39999 22.8999 1.29999 23.4999C1.19999 24.3999 1.09999 25.1999 0.999989 26.0999C0.199989 41.2999 12.1 55.0999 27.9 55.8999C38 56.3999 47.1 51.4999 52.5 43.7999L52.4 43.6999C46.3 50.5999 36.6 54.3999 26.4 52.7999C12.3 50.4999 2.39999 38.5999 1.79999 25.6999C1.79999 24.9999 1.79999 24.1999 2.19999 22.2999C2.19999 22.1999 2.19999 22.1999 2.19999 22.0999C2.19999 22.9999 2.29999 23.9999 2.49999 24.9999C4.99999 39.8999 19.2 50.8999 34.5 48.6999C47.3 46.7999 56.5 36.1999 57.3 23.6999Z"
                fill="#00B4FF"/>
        </svg>
    );
};

export default ElEconomista;