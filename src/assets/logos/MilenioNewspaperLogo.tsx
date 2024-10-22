import React from "react";

interface MilenioProps {
    width?: string;
    height?: string;
    fill?: string;
}

const MilenioNewspaper: React.FC<MilenioProps> = ({width, height, fill}) => {
    return (
        <svg
            width={width ? width : "80px"}
            height={height ? height : "80px"}
            viewBox="0 0 600 109"
            fill={fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_633_729)">
                <path
                    d="M11.9557 93.2383C11.2771 97.9237 10.1785 103.288 6.31711 104.112C4.26524 104.515 3.2959 104.515 2.19727 104.515C0.823974 104.515 0 104.79 0 105.485C0 106.729 1.09857 107.004 2.47189 107.004C6.86643 107.004 13.4744 106.583 16.0917 106.583C18.5636 106.583 24.7515 107.004 30.5193 107.004C32.5874 107.004 33.8314 106.729 33.8314 105.485C33.8314 104.79 32.862 104.515 31.7634 104.515C30.3901 104.515 28.4675 104.386 25.9794 103.837C23.6529 103.288 21.8595 102.044 21.8595 99.4262C21.8595 97.2289 22.005 95.4518 22.2796 92.9637L29.4208 38.2421H29.97C34.7846 48.5498 43.0405 65.8694 44.2845 68.7614C45.9325 72.6228 56.7896 93.6584 60.0855 99.9755C62.2989 104.112 63.6722 106.858 64.9001 106.858C66.1441 106.858 66.8389 105.614 69.9894 99.1516L99.9756 36.7234H100.525L108.781 97.229C109.33 101.09 108.91 102.868 108.086 103.142C107.133 103.562 106.567 103.966 106.567 104.661C106.567 105.485 107.407 105.889 110.558 106.163C116.067 106.584 135.035 107.004 138.476 107.004C140.399 107.004 142.063 106.583 142.063 105.485C142.063 104.661 141.093 104.515 139.849 104.515C138.072 104.515 135.309 104.386 131.335 103.142C127.199 101.914 125.826 97.9237 124.598 89.2477L112.077 4.26523C111.657 1.37321 110.833 0 109.605 0C108.361 0 107.682 1.09859 106.567 3.2959L69.1654 81.8319L31.618 4.26523C29.8407 0.694675 29.0168 0 27.9182 0C26.8196 0 25.9794 1.24397 25.5755 3.58668L11.9557 93.2383Z"
                    fill="#D93538"/>
                <path
                    d="M156.359 67.1133C156.359 80.4585 156.359 91.3156 155.664 97.0995C155.26 101.09 154.436 103.417 151.69 103.966C150.446 104.241 148.798 104.515 146.73 104.515C145.082 104.515 144.532 104.935 144.532 105.614C144.532 106.583 145.502 107.003 147.279 107.003C152.788 107.003 161.448 106.583 164.615 106.583C168.331 106.583 176.99 107.003 186.07 107.003C187.573 107.003 188.672 106.583 188.672 105.614C188.672 104.935 187.993 104.515 186.474 104.515C184.406 104.515 181.385 104.24 179.462 103.966C175.343 103.417 174.373 100.945 173.969 97.2288C173.404 91.3156 173.404 80.4585 173.404 67.1133V42.9111C173.404 22.0048 173.404 18.1595 173.679 13.7488C173.969 8.93425 175.068 6.60778 178.768 5.91302C180.432 5.63825 181.531 5.5091 182.904 5.5091C184.277 5.5091 185.101 5.23435 185.101 4.13583C185.101 3.29572 184.002 3.021 182.209 3.021C176.991 3.021 168.88 3.44113 165.439 3.44113C161.448 3.44113 152.788 3.021 147.554 3.021C145.356 3.021 144.258 3.2958 144.258 4.13583C144.258 5.23443 145.082 5.5091 146.455 5.5091C148.103 5.5091 149.896 5.63839 151.415 6.05841C154.436 6.73699 155.81 9.07965 156.084 13.7488C156.359 18.1595 156.359 22.0048 156.359 42.9111L156.359 67.1133Z"
                    fill="#D93538"/>
                <path
                    d="M220.582 42.9111C220.582 22.0048 220.582 18.1595 220.857 13.7488C221.132 8.93425 222.23 6.60778 225.946 5.91302C227.594 5.63825 229.791 5.5091 231.31 5.5091C232.958 5.5091 233.782 5.23433 233.782 4.26508C233.782 3.2957 232.829 3.021 230.89 3.021C225.526 3.021 215.493 3.44113 212.197 3.44113C208.481 3.44113 199.821 3.021 193.359 3.021C191.291 3.021 190.321 3.29578 190.321 4.26508C190.321 5.23441 191.145 5.5091 192.664 5.5091C194.457 5.5091 196.105 5.6384 197.204 5.91302C201.744 6.8824 202.842 9.07965 203.117 13.7488C203.392 18.1595 203.392 22.0048 203.392 42.9111V67.1133C203.392 79.7637 203.392 90.637 202.697 96.4048C202.148 100.395 201.469 103.417 198.723 103.966C197.479 104.241 195.831 104.515 193.763 104.515C192.115 104.515 191.565 104.935 191.565 105.614C191.565 106.583 192.535 107.003 194.312 107.003C199.821 107.003 208.481 106.583 211.648 106.583C222.78 106.583 231.859 107.407 251.667 107.407C258.808 107.407 259.503 106.729 260.327 103.691C261.425 99.7007 262.395 89.393 262.395 87.8743C262.395 86.2263 262.249 85.5477 261.296 85.5477C260.181 85.5477 259.907 86.3717 259.778 87.5996C259.503 90.2169 257.855 94.0621 256.207 95.8555C252.766 99.5714 247.402 99.7007 240.115 99.7007C229.387 99.7007 225.801 98.7475 223.474 96.6795C220.582 94.2075 220.582 84.7237 220.582 67.1133L220.582 42.9111Z"
                    fill="#D93538"/>
                <path
                    d="M273.528 67.1137C273.528 79.7641 273.528 90.6373 272.834 96.4052C272.284 100.396 271.606 103.417 268.859 103.966C267.615 104.241 265.967 104.516 263.899 104.516C262.251 104.516 261.702 104.936 261.702 105.614C261.702 106.584 262.671 107.004 264.448 107.004C269.958 107.004 278.617 106.584 281.784 106.584C289.895 106.584 299.104 107.408 319.881 107.408C325.099 107.408 326.343 107.408 327.297 103.837C327.991 101.091 329.09 91.736 329.09 88.5693C329.09 87.1961 329.09 86.0974 327.991 86.0974C327.022 86.0974 326.747 86.6467 326.473 88.1493C325.519 93.7878 323.855 96.6798 320.285 98.3278C316.714 99.9757 310.93 99.9757 307.36 99.9757C293.336 99.9757 291.139 97.9239 290.848 88.424C290.719 84.4495 290.848 71.7829 290.848 67.1137V56.2566C290.848 55.4326 290.993 54.8671 291.688 54.8671C294.984 54.8671 308.604 55.0127 311.205 55.2872C316.294 55.8365 318.217 57.9045 318.911 60.6511C319.315 62.4445 319.315 64.2217 319.461 65.595C319.461 66.2897 319.736 66.839 320.705 66.839C321.933 66.839 321.933 65.3203 321.933 64.2217C321.933 63.2685 322.353 57.7592 322.482 55.0126C323.031 48.0007 323.581 45.8034 323.581 44.9795C323.581 44.1555 323.177 43.8808 322.627 43.8808C321.933 43.8808 321.383 44.5594 320.43 45.6581C319.186 47.0314 317.118 47.4514 313.822 47.726C310.656 48.0008 294.839 48.0008 291.817 48.0008C290.993 48.0008 290.848 47.4515 290.848 46.4821V11.6975C290.848 10.7281 291.139 10.3241 291.817 10.3241C294.564 10.3241 309.008 10.5989 311.35 10.8735C318.217 11.6975 319.59 13.3454 320.559 15.8173C321.254 17.4652 321.383 19.808 321.383 20.7774C321.383 22.0052 321.658 22.6999 322.627 22.6999C323.581 22.6999 323.855 21.8759 324.001 21.1812C324.276 19.5333 324.55 13.4747 324.679 12.1014C325.099 5.78424 325.794 4.1363 325.794 3.16693C325.794 2.47222 325.649 1.92285 324.954 1.92285C324.275 1.92285 323.451 2.34291 322.757 2.47217C321.658 2.74694 319.461 3.02151 316.843 3.29617C314.242 3.44168 286.873 3.44168 282.463 3.44168C278.618 3.44168 269.958 3.0216 262.671 3.0216C260.603 3.0216 259.634 3.29636 259.634 4.26562C259.634 5.23499 260.458 5.5097 261.976 5.5097C263.899 5.5097 266.242 5.63897 267.34 5.91363C271.88 6.883 272.979 9.08026 273.254 13.7494C273.528 18.1602 273.528 22.0054 273.528 42.9117L273.528 67.1137Z"
                    fill="#D93538"/>
                <path
                    d="M351.503 30.5356H351.923C354.395 33.1529 369.663 50.3433 384.64 65.191C398.954 79.3601 416.549 97.3745 425.209 105.614C426.727 107.133 428.375 108.652 429.894 108.652C431.122 108.652 431.671 107.408 431.671 104.386L433.19 17.6105C433.335 9.90391 434.434 7.01193 438.279 5.9133C439.927 5.50942 441.026 5.50937 442.399 5.50937C444.063 5.50937 444.887 5.08933 444.887 4.26535C444.887 3.16672 443.514 3.02127 441.72 3.02127C434.983 3.02127 429.749 3.44141 428.246 3.44141C425.354 3.44141 418.746 3.02127 411.605 3.02127C409.537 3.02127 408.018 3.16679 408.018 4.26535C408.018 5.08933 408.568 5.50937 410.232 5.50937C412.154 5.50937 415.45 5.5094 417.518 6.33338C420.814 7.70663 422.058 10.324 422.187 18.7091L423.561 80.4587H422.882C420.539 78.2615 401.976 58.4538 392.621 49.0993C372.539 29.1623 351.649 6.73723 349.985 4.96006C347.658 2.47199 346.414 0.694824 344.895 0.694824C343.522 0.694824 343.118 2.6174 343.118 5.36399L341.874 86.7759C341.745 98.7478 341.196 102.738 337.609 103.837C335.686 104.386 333.214 104.516 331.421 104.516C330.048 104.516 329.224 104.79 329.224 105.614C329.224 106.858 330.468 107.004 332.245 107.004C339.402 107.004 345.865 106.584 347.109 106.584C349.71 106.584 355.219 107.004 364.154 107.004C366.076 107.004 367.32 106.729 367.32 105.614C367.32 104.79 366.496 104.516 364.978 104.516C362.78 104.516 360.163 104.386 357.837 103.562C355.074 102.593 353.297 99.0224 353.022 88.2946L351.503 30.5356Z"
                    fill="#D93538"/>
                <path
                    d="M459.735 67.1133C459.735 80.4585 459.735 91.3156 459.04 97.0995C458.636 101.09 457.812 103.417 455.066 103.966C453.822 104.241 452.174 104.515 450.106 104.515C448.458 104.515 447.908 104.935 447.908 105.614C447.908 106.583 448.878 107.003 450.655 107.003C456.164 107.003 464.824 106.583 467.991 106.583C471.707 106.583 480.367 107.003 489.446 107.003C490.949 107.003 492.048 106.583 492.048 105.614C492.048 104.935 491.369 104.515 489.85 104.515C487.782 104.515 484.761 104.24 482.839 103.966C478.719 103.417 477.749 100.945 477.345 97.2288C476.78 91.3156 476.78 80.4585 476.78 67.1133V42.9111C476.78 22.0048 476.78 18.1595 477.055 13.7488C477.345 8.93425 478.444 6.60778 482.144 5.91302C483.808 5.63825 484.907 5.5091 486.28 5.5091C487.653 5.5091 488.477 5.23435 488.477 4.13583C488.477 3.29572 487.378 3.021 485.585 3.021C480.367 3.021 472.256 3.44113 468.815 3.44113C464.824 3.44113 456.164 3.021 450.93 3.021C448.732 3.021 447.634 3.2958 447.634 4.13583C447.634 5.23443 448.458 5.5091 449.831 5.5091C451.479 5.5091 453.272 5.63839 454.791 6.05841C457.812 6.73699 459.186 9.07965 459.46 13.7488C459.735 18.1595 459.735 22.0048 459.735 42.9111V67.1133Z"
                    fill="#D93538"/>
                <path
                    d="M543.065 108.926C578.011 108.926 600 84.0292 600 52.5405C600 21.0517 578.69 1.09863 544.454 1.09863C503.191 1.09863 487.648 31.4888 487.648 55.0124C487.648 79.3601 503.611 108.926 543.065 108.926ZM548.849 102.044C522.449 102.044 506.632 79.3601 506.632 50.7472C506.632 16.5118 524.646 7.70658 540.464 7.70658C563.018 7.70658 580.758 26.8196 580.758 57.6298C580.758 97.3744 558.478 102.044 548.849 102.044Z"
                    fill="#D93538"/>
            </g>
            <defs>
                <clipPath id="clip0_633_729">
                    <rect width="600" height="108.926" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default MilenioNewspaper;