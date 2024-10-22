import React from "react";

interface TelevisaProps {
    width?: string;
    height?: string;
    fill?: string;
}

const TelevisaTv: React.FC<TelevisaProps> = ({width, height, fill}) => {
    return (
        <svg
            width={width ? width : "80px"}
            height={height ? height : "80px"}
            viewBox="0 0 2954 654"
            fill={fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 326.735V653.47H500H1000V326.735V0H500H0V326.735ZM531.789 7.00977C542.781 7.33582 549.022 7.84814 564.485 9.68793C593.572 13.1346 615.533 16.8607 634.257 21.5184C639.124 22.7061 646.577 24.4993 650.792 25.4774C655.03 26.4788 658.64 27.4337 658.826 27.6199C659.409 28.2021 658.826 28.7378 657.406 28.9241C651.537 29.6693 569.562 30.1118 468.095 29.972C376.619 29.8323 355.729 29.5994 346.949 28.6447C344.783 28.3884 344.201 28.2487 344.201 27.9227C344.201 27.5268 345.179 27.2241 348.44 26.572C352.585 25.7336 353.051 25.6171 358.64 24.0801C361.132 23.4048 364.183 22.6362 365.394 22.3568C369.19 21.4951 390.685 17.0703 395.203 16.2087C412.785 12.8318 442.664 8.84955 457.382 7.91803C476.572 6.70703 508.826 6.31116 531.789 7.00977ZM376.06 73.4979C377.48 73.5677 378.668 73.7075 378.668 73.824C378.668 74.1034 376.921 75.3144 373.312 77.55C366.162 81.9515 356.195 88.5189 342.035 98.137L339.963 99.5109L268.794 99.2082C229.623 99.0452 194.504 98.8589 190.731 98.7657L183.861 98.626L189.683 94.993C199.953 88.5887 210.13 82.7433 220.75 77.1076L227.83 73.3582L244.737 73.2883C269.539 73.1719 372.986 73.3349 376.06 73.4979ZM779.879 75.6171C788.309 80.1584 798.463 85.864 806.777 90.6847C811.947 93.6889 816.954 97.089 816.954 97.5547C816.954 97.9506 816.325 98.2534 814.974 98.4863C810.992 99.2082 804.332 99.2781 734.28 99.3712L663.6 99.4644L661.714 97.9972C651.747 90.2422 650.443 89.2874 648.021 88.0531C647.066 87.5408 644.271 85.8174 641.826 84.1873C634.35 79.2501 631.789 77.6665 628.575 76.0363C625.734 74.5925 624.988 74.0336 625.384 73.6609C625.71 73.3349 648.277 73.1952 710.014 73.1719L775.291 73.1253L779.879 75.6171ZM291.197 137.378C295.668 137.494 299.395 137.68 299.511 137.797C299.79 138.076 296.833 142.408 292.99 147.415C288.123 153.749 284.467 158.943 279.739 166.279C274.686 174.103 271.425 178.668 270.657 178.971C269.12 179.553 258.524 179.669 207.033 179.669C132.091 179.646 84.3037 178.878 84.3037 177.69C84.3037 176.805 92.5245 168.211 100.373 160.899C110.736 151.234 117.885 145.086 125.501 139.311L128.668 136.912L205.869 137.028C248.323 137.098 286.726 137.238 291.197 137.378ZM882.091 142.338C889.474 148.486 895.179 153.4 900.489 158.197C904.984 162.226 915.091 172.264 917.14 174.709C918.91 176.828 919.865 178.505 919.539 178.831C918.77 179.599 875.361 180.019 796.553 180.019H733.675L731.253 176.106C727.084 169.399 722.846 163.228 715.533 153.237C709.455 144.923 705.636 139.218 705.636 138.472C705.636 138.053 707.01 137.913 714.648 137.611C726.409 137.168 748.533 137.005 812.459 136.982L875.617 136.935L882.091 142.338ZM238.472 210.969C243.27 211.109 248.393 211.318 249.86 211.435C252.259 211.621 252.562 211.714 253.121 212.25C253.633 212.762 253.726 213.065 253.703 214.089C253.656 216.022 252.189 220.564 249.93 225.897C248.882 228.342 247.252 233.558 243.968 244.993C241.663 253.004 240.871 256.288 240.102 261.155C239.497 264.998 239.241 265.976 238.472 267.699C237.727 269.353 236.865 270.261 235.887 270.47C235.515 270.54 232.51 270.727 229.204 270.89C221.006 271.309 73.5445 271.286 53.3302 270.89C34.979 270.517 29.4131 270.144 28.2487 269.166C27.3172 268.398 28.6679 263.298 31.742 255.939C36.027 245.645 43.456 230.834 48.7424 222.054C51.5137 217.466 54.6577 213.088 55.7056 212.413C56.707 211.784 67.6525 211.365 93.7354 210.992C119.446 210.619 121.518 210.596 177.573 210.666C207.545 210.713 233.442 210.829 238.472 210.969ZM948.579 212.809C952.352 216.744 955.659 221.798 961.667 232.767C965.533 239.8 969.539 248.603 975.012 261.97C976.549 265.72 977.061 267.909 976.712 269.19C976.572 269.679 976.316 270.214 976.13 270.377C975.617 270.796 968.235 271.029 945.622 271.286C910.969 271.705 854.262 271.821 818.002 271.565C778.901 271.286 770.727 271.053 768.095 270.121C766.628 269.609 765.44 266.279 763.274 256.637C760.829 245.738 759.595 241.476 755.473 229.157C752.678 220.843 751.281 215.673 751.281 213.694C751.281 212.809 752.189 212.017 753.517 211.737C758.291 210.713 767.979 210.619 863.787 210.573L946.39 210.526L948.579 212.809ZM161.97 303.936C201.164 304.099 233.256 304.215 233.279 304.238C233.302 304.262 233.442 310.643 233.558 318.421C233.698 326.199 233.861 333.419 233.931 334.467C234.001 335.538 234.164 338.286 234.28 340.592C234.606 346.157 234.909 349.604 235.468 354.099C235.724 356.148 236.004 359.665 236.074 361.924C236.19 365.696 236.19 366.022 235.794 366.185C235.049 366.465 228.971 366.768 217.862 367.07C202.934 367.49 83.8146 367.49 61.4811 367.07C35.701 366.605 26.1993 366.209 25.4541 365.58C24.4993 364.788 23.0089 359.921 22.1472 354.681C21.1924 348.836 20.4471 340.335 20.0279 330.112C19.7485 323.079 19.7252 306.684 20.0047 305.939C20.5403 304.565 23.8705 304.169 37.3777 303.912C51.3973 303.656 87.2846 303.656 161.97 303.936ZM952.492 304.122L983.582 304.262L984.141 308.919C984.606 312.972 984.7 314.695 984.7 322.077C984.723 330.694 984.537 334.606 983.698 342.455C982.231 355.939 980.182 364.951 978.272 366.209C977.83 366.488 976.013 366.605 968.561 366.791C933.721 367.699 814.252 367.699 778.761 366.791C767.839 366.511 768.537 366.674 768.351 364.159C768.211 362.622 768.537 358.826 769.096 354.914C770.168 347.718 770.773 337.704 771.076 322.823C771.309 311.644 771.612 305.566 772.007 304.821C772.194 304.518 772.799 304.401 775.547 304.262C784.932 303.749 859.455 303.703 952.492 304.122ZM216.581 391.453C234.141 391.779 239.986 392.059 241.011 392.618C242.012 393.13 243.363 395.016 243.363 395.925C243.363 396.903 244.853 402.515 246.181 406.614C250.512 419.795 255.612 432.837 260.713 443.875C264.439 451.886 265.766 455.31 265.813 456.963C265.836 457.988 265.603 458.221 264.229 458.407C261.667 458.803 229.436 459.013 156.823 459.176L77.1775 459.315L74.2664 456.102C66.6977 447.694 60.1304 439.031 52.1192 426.875C45.8547 417.396 41.3833 409.804 38.0531 403.051C34.1407 395.086 33.7913 392.781 36.4462 392.175C37.8435 391.849 51.3973 391.453 68.5841 391.244C88.9846 390.987 200.186 391.15 216.581 391.453ZM911.854 391.5C943.107 391.639 968.724 391.779 968.77 391.849C968.84 391.896 968.77 393.13 968.631 394.574C968.421 396.856 968.235 397.601 967.28 400C963.6 409.245 953.004 426.828 943.107 440.149C939.264 445.319 936.586 448.579 931.719 454.052L927.084 459.245H878.132C851.211 459.245 814.136 459.129 795.762 459.013C754.588 458.733 739.148 458.384 738.426 457.662C737.89 457.126 739.544 452.632 742.455 446.53C750.163 430.415 757.15 412.343 759.572 402.306C760.62 397.951 761.598 395.575 763.577 392.571L764.648 390.964L809.851 391.104C834.7 391.197 880.601 391.36 911.854 391.5ZM268.864 480.415C275.524 480.694 279.599 481.02 280.578 481.393C280.927 481.509 281.416 481.858 281.672 482.161C284.42 485.352 287.611 489.357 291.22 494.178C304.471 511.83 319.446 527.34 337.448 542.059C347.345 550.163 356.008 556.404 361.109 559.082C364.136 560.689 364.346 561.132 362.483 561.761C358.803 562.972 349.767 563.135 278.179 563.274L213.67 563.391L208.896 560.387C206.265 558.71 202.864 556.66 201.327 555.799C188.705 548.696 185.817 546.949 175.128 539.823C171.728 537.564 168.281 535.305 167.443 534.816C162.995 532.161 159.735 529.972 149.278 522.497C127.969 507.266 106.265 489.381 101.886 483.442C100.792 481.952 100.605 481.276 101.188 481.043C101.863 480.787 114.369 480.415 127.969 480.205C147.601 479.949 261.411 480.089 268.864 480.415ZM888.333 480.415C900.396 480.741 903.54 480.927 903.843 481.393C904.588 482.557 903.493 483.791 895.552 490.708C892.361 493.503 888.845 496.577 887.75 497.555C874.057 509.828 833.954 537.448 803.33 555.706C796.041 560.037 793.2 561.574 791.803 561.9C787.68 562.878 779.343 563.088 740.685 563.251C696.81 563.437 648.836 562.972 641.546 562.273C640.475 562.18 639.963 562.04 639.963 561.83C639.963 561.411 641.733 559.898 643.246 559.013C651.49 554.215 654.285 552.329 661.504 546.6C672.613 537.774 686.586 524.592 697.951 512.226C705.496 504.006 708.803 500.023 720.075 485.491L724.383 479.925L801.351 480.042C849.721 480.112 882.045 480.252 888.333 480.415ZM382.394 576.129C391.593 576.642 392.944 576.921 400.14 580.019C407.406 583.139 410.992 584.513 417.443 586.656C439.683 594.038 460.992 598.16 486.609 600.07C494.341 600.629 513.787 600.629 521.542 600.07C539.218 598.742 550.978 596.693 570.098 591.523C588.961 586.446 594.224 584.583 608.64 577.899L613.531 575.64L677.69 575.757C739.66 575.873 749.511 575.966 756.684 576.619C762.436 577.154 762.995 578.062 758.5 579.53C756.87 580.065 751.537 582.371 746.623 584.653C728.528 593.083 701.188 603.54 679.32 610.387C677.201 611.039 674.057 612.04 672.333 612.599C661.341 616.116 659.222 616.721 651.63 618.421C649.022 619.003 644.83 620.005 642.315 620.633C622.007 625.71 589.823 631.323 565.44 634.024C551.071 635.608 535.328 636.237 509.851 636.237C478.645 636.237 449.93 635.072 429.436 632.953C421.751 632.161 417.28 631.463 393.945 627.364C381.695 625.198 375.617 623.987 369.003 622.31C366.442 621.681 362.506 620.703 360.27 620.168C355.449 619.027 338.263 614.392 331.975 612.552C322.986 609.944 294.551 600.233 289.707 598.16C288.612 597.694 283.069 595.389 277.364 593.037C260.736 586.19 258.407 585.165 252.399 582.208C250.303 581.183 247.625 580.042 246.414 579.646C245.226 579.273 243.945 578.761 243.572 578.551C242.85 578.109 242.478 577.41 242.827 577.061C243.293 576.595 259.921 575.99 277.597 575.827C295.715 575.664 378.225 575.897 382.394 576.129Z"
                fill="#003380"/>
            <path
                d="M1148.94 503V205.637H1042.74V145.09H1327.17V205.637H1221.21V503H1148.94ZM1486.59 420.48L1554.95 431.955C1546.16 457.02 1532.24 476.145 1513.2 489.328C1494.32 502.349 1470.64 508.859 1442.16 508.859C1397.07 508.859 1363.71 494.13 1342.06 464.67C1324.97 441.07 1316.42 411.285 1316.42 375.314C1316.42 332.346 1327.65 298.736 1350.11 274.484C1372.58 250.07 1400.98 237.863 1435.32 237.863C1473.9 237.863 1504.33 250.64 1526.63 276.193C1548.93 301.584 1559.59 340.565 1558.61 393.137H1386.74C1387.23 413.482 1392.76 429.351 1403.34 440.744C1413.92 451.975 1427.1 457.59 1442.89 457.59C1453.63 457.59 1462.66 454.66 1469.99 448.801C1477.31 442.941 1482.85 433.501 1486.59 420.48ZM1490.5 351.145C1490.01 331.288 1484.88 316.232 1475.11 305.979C1465.35 295.562 1453.47 290.354 1439.47 290.354C1424.5 290.354 1412.13 295.806 1402.36 306.711C1392.6 317.616 1387.79 332.427 1387.96 351.145H1490.5ZM1614.76 503V145.09H1683.37V503H1614.76ZM1904.07 420.48L1972.43 431.955C1963.64 457.02 1949.72 476.145 1930.68 489.328C1911.8 502.349 1888.12 508.859 1859.64 508.859C1814.55 508.859 1781.19 494.13 1759.54 464.67C1742.45 441.07 1733.9 411.285 1733.9 375.314C1733.9 332.346 1745.14 298.736 1767.6 274.484C1790.06 250.07 1818.46 237.863 1852.8 237.863C1891.38 237.863 1921.81 250.64 1944.11 276.193C1966.41 301.584 1977.07 340.565 1976.09 393.137H1804.22C1804.7 413.482 1810.24 429.351 1820.82 440.744C1831.4 451.975 1844.58 457.59 1860.37 457.59C1871.11 457.59 1880.15 454.66 1887.47 448.801C1894.79 442.941 1900.33 433.501 1904.07 420.48ZM1907.98 351.145C1907.49 331.288 1902.36 316.232 1892.6 305.979C1882.83 295.562 1870.95 290.354 1856.95 290.354C1841.98 290.354 1829.61 295.806 1819.84 306.711C1810.08 317.616 1805.27 332.427 1805.44 351.145H1907.98ZM2103.53 503L1999.04 243.723H2071.06L2119.89 376.047L2134.05 420.236C2137.79 409.006 2140.15 401.6 2141.13 398.02C2143.41 390.695 2145.85 383.371 2148.46 376.047L2197.77 243.723H2268.33L2165.3 503H2103.53ZM2310.56 208.566V145.09H2379.17V208.566H2310.56ZM2310.56 503V243.723H2379.17V503H2310.56ZM2425.55 429.025L2494.4 418.527C2497.33 431.874 2503.27 442.046 2512.22 449.045C2521.18 455.881 2533.71 459.299 2549.82 459.299C2567.56 459.299 2580.91 456.044 2589.86 449.533C2595.88 444.976 2598.89 438.872 2598.89 431.223C2598.89 426.014 2597.27 421.701 2594.01 418.283C2590.59 415.028 2582.94 412.017 2571.06 409.25C2515.72 397.043 2480.65 385.894 2465.84 375.803C2445.33 361.805 2435.08 342.355 2435.08 317.453C2435.08 294.992 2443.95 276.112 2461.69 260.812C2479.43 245.513 2506.93 237.863 2544.21 237.863C2579.69 237.863 2606.06 243.641 2623.31 255.197C2640.56 266.753 2652.44 283.843 2658.95 306.467L2594.26 318.43C2591.49 308.339 2586.2 300.607 2578.39 295.236C2570.74 289.865 2559.75 287.18 2545.43 287.18C2527.36 287.18 2514.42 289.702 2506.61 294.748C2501.4 298.329 2498.8 302.967 2498.8 308.664C2498.8 313.547 2501.08 317.697 2505.63 321.115C2511.82 325.673 2533.14 332.102 2569.6 340.402C2606.22 348.703 2631.77 358.876 2646.26 370.92C2660.58 383.127 2667.74 400.135 2667.74 421.945C2667.74 445.708 2657.81 466.135 2637.96 483.225C2618.1 500.314 2588.72 508.859 2549.82 508.859C2514.5 508.859 2486.51 501.698 2465.84 487.375C2445.33 473.052 2431.9 453.602 2425.55 429.025ZM2779.31 322.824L2717.06 311.594C2724.06 286.529 2736.1 267.974 2753.19 255.93C2770.28 243.885 2795.67 237.863 2829.36 237.863C2859.96 237.863 2882.75 241.525 2897.72 248.85C2912.7 256.011 2923.19 265.207 2929.22 276.438C2935.4 287.505 2938.49 307.932 2938.49 337.717L2937.76 417.795C2937.76 440.581 2938.82 457.427 2940.94 468.332C2943.21 479.074 2947.36 490.63 2953.39 503H2885.52C2883.73 498.443 2881.53 491.688 2878.92 482.736C2877.78 478.667 2876.97 475.982 2876.48 474.68C2864.76 486.073 2852.23 494.618 2838.88 500.314C2825.54 506.011 2811.3 508.859 2796.16 508.859C2769.47 508.859 2748.39 501.617 2732.93 487.131C2717.63 472.645 2709.98 454.335 2709.98 432.199C2709.98 417.551 2713.48 404.53 2720.48 393.137C2727.48 381.581 2737.24 372.792 2749.77 366.77C2762.47 360.585 2780.7 355.214 2804.46 350.656C2836.52 344.634 2858.74 339.019 2871.11 333.811V326.975C2871.11 313.791 2867.86 304.432 2861.35 298.898C2854.84 293.202 2842.55 290.354 2824.48 290.354C2812.27 290.354 2802.75 292.795 2795.92 297.678C2789.08 302.398 2783.55 310.78 2779.31 322.824ZM2871.11 378.488C2862.32 381.418 2848.41 384.917 2829.36 388.986C2810.32 393.055 2797.87 397.043 2792.01 400.949C2783.06 407.297 2778.58 415.354 2778.58 425.119C2778.58 434.722 2782.16 443.023 2789.32 450.021C2796.49 457.02 2805.6 460.52 2816.67 460.52C2829.04 460.52 2840.84 456.451 2852.07 448.312C2860.37 442.128 2865.82 434.559 2868.43 425.607C2870.22 419.748 2871.11 408.599 2871.11 392.16V378.488Z"
                fill="#003380"/>
        </svg>
    );
};

export default TelevisaTv;