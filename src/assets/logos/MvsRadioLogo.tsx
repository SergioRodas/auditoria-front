import React from "react";

interface MvsRadioProps {
    width?: string;
    height?: string;
    fill?: string;
}

const MvsRadio: React.FC<MvsRadioProps> = ({width, height, fill}) => {
    return (
        <svg
            width={width ? width : "80px"}
            height={height ? height : "80px"}
            viewBox="0 0 884 463"
            fill={fill ? fill : "none"}
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_700_221)">
                <path
                    d="M256.383 28.0994C240.59 62.4281 226.693 92.7466 225.517 95.2123C224.342 97.6781 217.379 113.175 210.034 129.269C202.688 145.363 171.53 213.775 140.664 280.888C109.798 348.001 75.1131 423.811 63.4933 449.522L42.3684 495.961L46.1615 497.84C48.2574 498.994 49.7067 501.369 49.1945 503.643C48.6091 506.241 48.9632 506.321 50.6839 503.637C52.4045 500.952 61.1212 501.892 82.7182 506.757L112.34 513.429L140.99 452.302C165.629 400.17 183.008 362.103 204.015 315.637C206.704 309.758 231.737 255.325 259.459 195.013C302.136 101.89 323.615 55.5309 353.277 -8.43997L357.979 -18.303L321.512 -26.5173L285.163 -34.705L256.383 28.0994Z"
                    fill="url(#paint0_linear_700_221)"/>
                <path
                    d="M849.6 124.933L849.733 134L850.533 126L851.333 118L853.733 125.866C855.067 130.133 856.4 133.333 856.8 133.066C857.067 132.666 858.533 129.2 859.867 125.2L862.533 118V125.6C862.667 129.866 863.333 133.333 864 133.333C864.8 133.333 865.333 129.6 865.333 124.666C865.333 117.066 865.067 116 862.8 116C860.933 116 860 117.333 859.467 120.666C858.267 126.533 856.8 126.666 855.2 121.066C854.4 118.666 852.933 116.533 851.6 116.266C849.6 115.866 849.333 116.933 849.6 124.933Z"
                    fill="url(#paint1_linear_700_221)"/>
                <path
                    d="M869.601 124.266C870.001 132.533 872.268 135.333 873.068 128.666C873.735 124 877.201 124.4 878.801 129.333C879.601 131.466 880.801 133.333 881.468 133.333C883.068 133.333 882.935 130.533 881.468 128.133C880.668 126.8 880.801 125.2 882.001 123.6C885.201 119.066 882.268 116 875.201 116H869.201L869.601 124.266ZM879.335 120.666C879.335 122.4 878.268 123.466 876.401 123.733C873.868 124.133 873.335 123.6 873.335 120.666C873.335 117.733 873.868 117.2 876.401 117.6C878.268 117.866 879.335 118.933 879.335 120.666Z"
                    fill="url(#paint2_linear_700_221)"/>
                <path
                    d="M752.667 128.799C732.134 133.2 714.8 145.333 707.467 160.266C702.934 169.733 700.8 184.266 702.534 193.866C706.4 214.533 720.267 225.733 755.334 236C795.2 247.6 801.334 250.666 801.334 258.933C801.334 269.866 792.934 275.333 776.667 275.2C760.667 275.2 751.734 268.933 749.867 256.666L749.067 250.666H721.734H694.4L695.334 258.266C698.534 284.133 712.8 300.4 740.667 310.266C750.8 313.733 752.534 314 774.667 314C795.467 314 799.067 313.6 808 310.933C836.134 302 850.4 287.866 854.8 264.533C858.667 243.6 851.467 224.666 835.6 214.266C825.334 207.6 816.8 204.4 791.867 198C767.2 191.6 757.6 187.6 754.8 182.533C752.134 177.866 753.867 172.4 759.067 169.2C762.667 166.933 765.2 166.666 774.667 166.933C788.4 167.466 793.467 170.266 796.4 179.066L798.267 184.666L823.067 185.066L848 185.333V181.6C848 176.266 844.534 163.466 841.2 157.2C829.334 133.866 789.334 121.066 752.667 128.799Z"
                    fill="url(#paint3_linear_700_221)"/>
                <path
                    d="M317.334 220.666V310.666H342.667H368.001V258.266C368.001 229.6 368.534 205.2 369.201 204.266C370.001 202.8 370.534 202.8 371.601 204.266C372.267 205.2 378.801 228.133 386.001 255.333C393.201 282.4 399.601 306 400.134 307.733C401.201 310.533 401.734 310.666 421.067 310.666H440.934L442.401 305.6C443.201 302.933 449.334 280 456.001 254.666C467.601 211.333 470.801 202 472.667 206.8C473.067 207.866 473.467 231.466 473.601 259.333L474.001 310L499.067 310.4L524.001 310.666V220.666V130.666L485.734 130.933L447.467 131.333L441.334 156C437.867 169.6 434.001 184.533 432.801 189.333C431.467 194.133 429.867 200.666 429.201 204C427.734 212.266 423.201 230.133 422.134 231.866C419.601 235.733 419.334 234.8 411.867 200.666C410.401 194 408.134 185.066 406.801 180.666C405.467 176.266 402.134 163.2 399.334 151.6L394.401 130.666H355.867H317.334V220.666Z"
                    fill="url(#paint4_linear_700_221)"/>
                <path
                    d="M533.866 133.6C534.266 135.333 542 161.866 551.066 192.666C560.266 223.466 571.733 262.666 576.8 279.733L585.866 310.666L616.533 310.4L647.2 310L668.266 242C679.866 204.533 692 165.333 695.2 154.666C698.533 144 701.6 134.266 702 132.933C702.933 130.8 701.066 130.666 675.466 130.666C650.666 130.666 648 130.933 646.8 133.066C646.133 134.4 641.866 149.466 637.333 166.666C632.8 183.866 628 201.866 626.666 206.666C625.333 211.466 623.066 219.466 621.866 224.666C619.6 233.733 617.733 236.933 615.733 234.933C615.333 234.4 608.8 211.2 601.333 183.333C593.866 155.466 587.466 132.266 587.2 131.733C586.8 131.066 574.533 130.666 559.733 130.666H533.066L533.866 133.6Z"
                    fill="url(#paint5_linear_700_221)"/>
                <path
                    d="M552.001 356.266C552.001 376.4 551.334 377.733 544.267 372.933C533.467 365.333 518.001 366.933 508.534 376.533C500.934 384.133 497.334 394.4 497.334 408.533C497.334 425.866 501.867 435.733 513.067 442.8C518.001 445.866 520.667 446.666 526.801 446.666C536.267 446.666 540.801 445.066 546.267 439.733C550.801 435.333 553.334 435.733 553.334 440.8C553.334 443.6 554.001 444 558.001 444H562.667V392V340H557.334H552.001V356.266ZM538.401 379.2C548.667 384.666 552.534 393.6 551.734 410.533C551.067 423.866 548.667 429.466 541.201 434.4C537.467 437.066 535.334 437.466 528.934 437.066C522.801 436.533 520.534 435.733 517.334 432.666C508.267 424 505.601 402.533 512.134 389.733C517.601 379.2 529.334 374.533 538.401 379.2Z"
                    fill="#FF4512"/>
                <path
                    d="M315.867 344.266C315.6 346 315.467 369.333 315.733 396.266L316.133 445.333H322H328L328.267 422.933L328.667 400.666L349.867 400.266C379.333 399.733 380 400.266 381.333 426.4C382 438.4 382.8 443.2 384.133 444.133C385.2 444.8 389.067 445.2 392.8 445.066L399.733 444.8L396.933 441.066C394.8 438.133 394.133 434.533 393.333 421.733C392.4 404.533 391.467 401.866 385.2 396.933L380.933 393.6L386 389.2C392.533 383.466 394.667 378.133 394.667 368C394.667 354.933 389.2 346.8 377.467 342.933C374.667 341.866 362.533 341.333 344.667 341.333H316.267L315.867 344.266ZM376.8 356.4C380.8 360.133 381.733 362 382.267 367.466C383.2 376.133 380.267 383.066 374.4 386.266C370.8 388.133 366.133 388.666 349.067 389.066L328 389.6V370.8V352H350H372L376.8 356.4Z"
                    fill="#FF4512"/>
                <path d="M585.334 347.333V353.333H590.667H596.001V347.333V341.333H590.667H585.334V347.333Z"
                      fill="#FF4512"/>
                <path
                    d="M640.402 368.266C630.802 370 621.335 378.533 617.202 389.066C613.068 399.866 613.068 418 617.202 427.333C621.202 436.4 627.068 442.133 635.602 445.333C647.068 449.6 653.735 448.933 666.668 442C671.735 439.333 678.402 430 680.668 422.4C683.202 413.6 683.202 398.4 680.668 389.733C676.002 374 658.935 364.933 640.402 368.266ZM654.935 377.333C658.802 377.333 666.402 385.066 668.802 391.333C670.402 395.866 670.802 400 670.402 408.933C669.335 428.8 662.668 437.333 648.002 437.333C638.802 437.333 633.202 434.133 629.068 426.4C624.668 418.133 624.668 399.6 629.202 389.733C633.335 380.533 642.002 375.2 650.002 376.8C651.468 377.066 653.735 377.333 654.935 377.333Z"
                    fill="#FF4512"/>
                <path
                    d="M432.667 371.066C428.934 372.8 424.8 376 423.467 378C420.4 382.533 419.067 391.333 421.2 392.533C423.6 394 430.667 390.266 430.667 387.6C430.667 384 436.4 379.066 442.267 377.466C449.2 375.6 459.201 377.466 463.467 381.466C467.334 385.066 468 394.533 464.534 397.333C463.467 398.4 455.334 400.133 446.534 401.466C428.8 403.866 421.867 407.2 417.867 414.933C414.934 420.533 415.867 432.8 419.334 437.6C422.934 442.533 433.334 448 439.067 448C444.534 448 454.8 443.866 460.934 439.2L465.201 436L468.667 440.533C472.534 445.6 476.401 447.066 482.667 445.866C486.134 445.066 486.8 444.4 486.4 441.466C486.134 439.2 485.067 437.866 483.334 437.6C477.867 436.666 477.334 434 477.334 407.466C477.334 384.933 477.067 381.466 474.8 377.866C471.067 371.6 463.867 368.8 450.667 368.266C440.934 368 438.4 368.4 432.667 371.066ZM465.067 408.266C467.467 410.666 466.934 421.466 464.134 426.666C459.334 435.6 442.934 440.266 433.334 435.333C427.867 432.533 425.867 425.6 428.667 419.466C431.2 414.133 435.867 412 452 408.933C457.467 407.866 462.267 406.933 462.8 406.8C463.201 406.8 464.134 407.333 465.067 408.266Z"
                    fill="#FF4512"/>
                <path d="M585.334 406.666V444H590.667H596.001V406.666V369.333H590.667H585.334V406.666Z" fill="#FF4512"/>
            </g>
            <defs>
                <linearGradient id="paint0_linear_700_221" x1="88.5" y1="449" x2="301.5" y2="-7.5"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#BFD330"/>
                    <stop offset="0.13" stopColor="#FAC90B"/>
                    <stop offset="0.25" stopColor="#F7B333"/>
                    <stop offset="0.375" stopColor="#F06C5C"/>
                    <stop offset="0.505" stopColor="#ED2862"/>
                    <stop offset="0.625" stopColor="#A4477F"/>
                    <stop offset="0.725" stopColor="#864E8A"/>
                    <stop offset="0.86" stopColor="#5A5499"/>
                    <stop offset="1" stopColor="#1359A7"/>
                </linearGradient>
                <linearGradient id="paint1_linear_700_221" x1="857.424" y1="134" x2="857.424" y2="116"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2E3543"/>
                    <stop offset="1" stopColor="#424B5B"/>
                </linearGradient>
                <linearGradient id="paint2_linear_700_221" x1="876.246" y1="133.333" x2="876.246" y2="116"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2E3543"/>
                    <stop offset="1" stopColor="#424B5B"/>
                </linearGradient>
                <linearGradient id="paint3_linear_700_221" x1="775.114" y1="314" x2="775.114" y2="126.543"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2E3543"/>
                    <stop offset="1" stopColor="#434C5C"/>
                </linearGradient>
                <linearGradient id="paint4_linear_700_221" x1="420.667" y1="310.666" x2="420.667" y2="130.666"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2E3543"/>
                    <stop offset="1" stopColor="#434C5C"/>
                </linearGradient>
                <linearGradient id="paint5_linear_700_221" x1="617.623" y1="310.666" x2="617.623" y2="130.666"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2E3543"/>
                    <stop offset="1" stopColor="#434C5C"/>
                </linearGradient>
                <clipPath id="clip0_700_221">
                    <rect width="884" height="462.667" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export default MvsRadio;