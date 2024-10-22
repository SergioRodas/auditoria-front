import React from "react";
import {
    DashboardContainer,
    AnalysisContainer, BalanceContainer, Button
} from "./styles/dashboard.styled";
import RelevanceTable from "../../components/relevance/RelevanceTable.tsx";
import HeaderCandidates from "../../components/headerCandidates/HeaderCandidates.tsx";
import GeneralTopics from "../../components/generalTopics/Table.tsx";
import NegativesMentions from "../../components/negativesMentions/NegativesMentions.tsx";
import PositivesMentions from "../../components/positivesMentions/PositivesMentions.tsx";
import {
    tvColumn,
    radioColumn,
    newspaperColumn,
} from "../../data/tableData.tsx";
import NegativesMentionsInColumns from "../../components/negativeMentionsColumns/NegativesMentionsInColumns.tsx";
import NegativeComments from "../../components/negativeComments/NegativeComments.tsx";
import InterviewsCandidates from "../../components/interviewsCandidates/InterviewsCandidates.tsx";
import BalanceCandidates from "../../components/mentionsBalance/balanceCandidates/BalanceCandidates";
import BalanceGraph from "../../components/mentionsBalance/balanceGraph/BalanceGraph";
import BalanceTable from "../../components/mentionsBalance/balanceTable/BalanceTable";
import { useAuthStore } from "../../store/auth.ts";
import { useTopTopics } from "../../hooks/useTopics.tsx";
import { useMentionsBalance } from "../../hooks/useMentionsBalance.tsx";
import { useInterviews } from "../../hooks/useInterviews.tsx";
import Loader from "../../components/loader/Loader.tsx";
import NoDataMessage from "../../components/noDataMessage/NoDataMessage.tsx";
import { useMediumTrends } from "../../hooks/useMediumTrends.tsx";
import { useRelevance } from "../../hooks/useRelevance.tsx";
import { useNegativeComments } from "../../hooks/useNegativeComments.tsx";
import { useNegativeMentions } from "../../hooks/useNegativeMentions.tsx";
import BalanceResume from "../../components/mentionsBalance/balanceResume/BalanceResume.tsx";
import { useBalanceResume } from "../../hooks/useBalanceResume.tsx";
import { useScrollToTop } from "../../hooks/useScrollToTop.tsx";
import ArrowTop from "../../assets/icons/ArrowTop.tsx";

const Dashboard = ({ currentDate, targetRef, isDownloading, isWeekly }) => {
    const token = useAuthStore((state) => state.token);
    const {
        mentionsBalanceIsLoading,
        mentionsBalanceData,
        balanceGraphData,
    } =
        useMentionsBalance(token, currentDate, isWeekly);

    const {
        balanceResumeIsLoading,
        balanceResumeResult,
    } =
        useBalanceResume(token, currentDate);

    const {
        relevanceResult: relevanceTvResult,
        relevanceIsLoading: relevanceTvIsLoading,
    } = useRelevance(token, currentDate, "Televisión", isWeekly);

    const {
        relevanceResult: relevanceNewspaperResult,
        relevanceIsLoading: relevanceNewspaperIsLoading,
    } = useRelevance(token, currentDate, "Periódicos", isWeekly);

    const {
        relevanceResult: relevanceRadioResult,
        relevanceIsLoading: relevanceRadioIsLoading,
    } = useRelevance(token, currentDate, "Radio", isWeekly);

    const {
        topicsResult,
        topTopicsAreLoading,
    } = useTopTopics(token, currentDate, isWeekly);

    const {
        negativeMentionsAreLoading,
        positiveMentionsAreLoading,
        negativeMentionsData,
        positiveMentionsData,
    } = useMediumTrends(token, currentDate, isWeekly);

    const {
        negativeCommentsResult: negativeCommentsTvResult,
        negativeCommentsAreLoading: negativeCommentsTvAreLoading,
    } = useNegativeComments(token, currentDate, "TELEVISIÓN", isWeekly);

    const {
        negativeCommentsResult: negativeCommentsRadioResult,
        negativeCommentsAreLoading: negativeCommentsRadioAreLoading,
    } = useNegativeComments(token, currentDate, "RADIO", isWeekly);

    const {
        negativeMentionsInColumnsAreLoading,
        negativeMentionsInColumnsResult,
    } = useNegativeMentions(token, currentDate, isWeekly);

    const {
        interviewsResultsAreLoading,
        claudiaInterviews,
        xochitlInterviews,
        jorgeInterviews,
    } = useInterviews(token, currentDate, isWeekly);

    const { showScrollButton, scrollToTop } = useScrollToTop();

    return (
        <DashboardContainer ref={targetRef}>
            <AnalysisContainer>
                {mentionsBalanceIsLoading ? (
                    <Loader width="80px" height="80px" className={"loading"} />
                ) : (
                    <>
                        <div className="dashboard-title">
                            BALANCE TOTAL DE MENCIONES DEL ANÁLISIS
                        </div>
                        {mentionsBalanceData ? (
                            <>
                                <BalanceCandidates data={mentionsBalanceData} />
                                <BalanceTable data={mentionsBalanceData} />
                            </>
                        ) : (
                            <NoDataMessage />
                        )}
                    </>
                )}
            </AnalysisContainer>

            <BalanceContainer>
                {mentionsBalanceIsLoading ? (
                    <div className={`balanceLoader ${isWeekly ? 'full-width' : ''}`}>
                        <Loader width="80px" height="80px" className={"loading"} />
                    </div>
                ) : (
                    <>
                        {balanceGraphData && balanceGraphData.length ? (
                            <BalanceGraph data={balanceGraphData} />
                        ) : (
                            <div className={`balancePlaceholder ${isWeekly ? 'full-width' : ''}`}>
                                <div className="dashboard-title">
                                    Total de menciones por tendencia
                                </div>
                                <NoDataMessage/>
                            </div>
                        )}
                    </>
                )}
                {!isWeekly && (
                    balanceResumeIsLoading ? (
                        <div className="balanceLoader">
                            <Loader width="80px" height="80px" className={"loading"} />
                        </div>
                    ) : (
                        balanceResumeResult && balanceResumeResult.balance ? (
                            <BalanceResume data={balanceResumeResult} />
                        ) : (
                            <div className="balancePlaceholder">
                                <div className="dashboard-title">
                                    Balance del día
                                </div>
                                <NoDataMessage />
                            </div>
                        )
                    )
                )}
            </BalanceContainer>


            <AnalysisContainer>
                {relevanceTvIsLoading ? (
                    <Loader width="80px" height="80px" className={"loading"} />
                ) : (
                    <>
                        {relevanceTvResult && tvColumn ? (
                            <>
                                <HeaderCandidates />
                                <RelevanceTable
                                    title="CADENAS DE TV DE MAYOR RELEVANCIA"
                                    column={tvColumn}
                                    data={relevanceTvResult}
                                />
                            </>
                        ) : (
                            <NoDataMessage />
                        )}
                    </>
                )}
            </AnalysisContainer>

            <AnalysisContainer>
                {relevanceNewspaperIsLoading ? (
                    <Loader width="80px" height="80px" className={"loading"} />
                ) : (
                    <>
                        {relevanceNewspaperResult && newspaperColumn ? (
                            <>
                                <HeaderCandidates />
                                <RelevanceTable
                                    title="PERIÓDICOS DE MAYOR RELEVANCIA"
                                    column={newspaperColumn}
                                    data={relevanceNewspaperResult}
                                />
                            </>
                        ) : (
                            <NoDataMessage />
                        )}
                    </>
                )}
            </AnalysisContainer>

            <AnalysisContainer>
                {relevanceRadioIsLoading ? (
                    <Loader width="80px" height="80px" className={"loading"} />
                ) : (
                    <>
                        {relevanceRadioResult && radioColumn ? (
                            <>
                                <HeaderCandidates />
                                <RelevanceTable
                                    title="GRUPOS DE RADIO DE MAYOR RELEVANCIA"
                                    column={radioColumn}
                                    data={relevanceRadioResult}
                                />
                            </>
                        ) : (
                            <NoDataMessage />
                        )}
                    </>
                )}
            </AnalysisContainer>

            <AnalysisContainer>
                {topTopicsAreLoading ? (
                    <Loader width="80px" height="80px" className={"loading"} />
                ) : (
                    <>
                        <div className="dashboard-title">
                            TEMAS GENERALES MÁS MENCIONADOS
                        </div>
                        {topicsResult ? (
                            <>
                                <HeaderCandidates />
                                <GeneralTopics topicsResult={topicsResult} />
                            </>
                        ) : (
                            <NoDataMessage />
                        )}
                    </>
                )}
            </AnalysisContainer>

            <AnalysisContainer>
                {negativeMentionsAreLoading ? (
                    <Loader width="80px" height="80px" className={"loading"} />
                ) : (
                    <>
                        {negativeMentionsData ? (
                            <NegativesMentions data={negativeMentionsData} />
                        ) : (
                            <NoDataMessage />
                        )}
                    </>
                )}
            </AnalysisContainer>

            <AnalysisContainer>
                {positiveMentionsAreLoading ? (
                    <Loader width="80px" height="80px" className={"loading"} />
                ) : (
                    <>
                        {positiveMentionsData ? (
                            <PositivesMentions data={positiveMentionsData} />
                        ) : (
                            <NoDataMessage />
                        )}
                    </>
                )}
            </AnalysisContainer>

            {negativeCommentsTvAreLoading ? (
                <AnalysisContainer>
                    <Loader width="80px" height="80px" className={"loading"} />
                </AnalysisContainer>
            ) : (
                negativeCommentsTvResult && (
                    <NegativeComments
                        data={negativeCommentsTvResult}
                        title={"COMENTARIOS NEGATIVOS EN TELEVISIÓN"}
                    />
                )
            )}

            {negativeCommentsRadioAreLoading ? (
                <AnalysisContainer>
                    <Loader width="80px" height="80px" className={"loading"} />
                </AnalysisContainer>
            ) : (
                negativeCommentsRadioResult && (
                    <NegativeComments
                        data={negativeCommentsRadioResult}
                        title={"COMENTARIOS NEGATIVOS EN RADIO"}
                    />
                )
            )}

            {!negativeCommentsTvAreLoading &&
                !negativeCommentsRadioAreLoading &&
                !negativeCommentsTvResult &&
                !negativeCommentsRadioResult && (
                    <>
                        <div className="dashboard-title">COMENTARIOS NEGATIVOS</div>
                        <NoDataMessage />
                    </>
                )}

            {negativeMentionsInColumnsAreLoading ? (
                <AnalysisContainer>
                    <Loader width="80px" height="80px" className={"loading"} />
                </AnalysisContainer>
            ) : (
                <>
                    {negativeMentionsInColumnsResult ? (
                        <NegativesMentionsInColumns
                            data={negativeMentionsInColumnsResult}
                            isDownloading={isDownloading}
                        />
                    ) : (
                        <NoDataMessage />
                    )}
                </>
            )}

            {interviewsResultsAreLoading ? (
                <AnalysisContainer>
                    <Loader width="80px" height="80px" className={"loading"} />
                </AnalysisContainer>
            ) : (
                <>
                    <div className="dashboard-title">ENTREVISTAS A LOS CANDIDATOS</div>
                    {(!claudiaInterviews?.length &&
                        !xochitlInterviews?.length &&
                        !jorgeInterviews?.length) ? (
                        <NoDataMessage />
                    ) : (
                        <>
                            {claudiaInterviews.length > 0 && (
                                <InterviewsCandidates
                                    data={claudiaInterviews}
                                    src="/images/claudia_sheinbaum_pardo.png"
                                    showAsList={isDownloading} />
                            )}
                            {xochitlInterviews.length > 0 && (
                                <InterviewsCandidates
                                    data={xochitlInterviews}
                                    src="/images/xochitl_galvez.png"
                                    showAsList={isDownloading} />
                            )}
                            {jorgeInterviews.length > 0 && (
                                <InterviewsCandidates
                                    data={jorgeInterviews}
                                    src="/images/jorge_alvarez_maynez.png"
                                    showAsList={isDownloading} />
                            )}
                        </>
                    )}
                </>
            )}
            {showScrollButton && (
                <Button className="scroll-to-top" id="scroll-to-top" onClick={scrollToTop}>
                    <ArrowTop width="25" height="25" />
                </Button>
            )}
        </DashboardContainer>
    );
};

export default Dashboard;
