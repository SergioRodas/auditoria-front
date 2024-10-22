import React from "react";
import {ResumeContainer} from "./styles.tsx";
import {BalanceResumeResults} from "../../../interfaces/BalanceResume.ts";


interface BalanceResumeResponse {
    data: BalanceResumeResults | null;
}

const BalanceResume = ({ data }: BalanceResumeResponse) => {

    return (
        <ResumeContainer>
            <div className="balance-title">
                Balance del día
            </div>
            <div>
                {data && (
                    <div className="balance-content">
                        <div dangerouslySetInnerHTML={{ __html: data.balance }} />
                    </div>
                )}
            </div>
        </ResumeContainer>
    );
};

export default BalanceResume;