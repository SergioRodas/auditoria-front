import { useState, useEffect } from "react";
import { fetchInterviews } from "../services/interviews.ts";
import { InterviewsResult } from "../interfaces/InterviewsResult.ts";
import {useLoadingStore} from "../store/loading.ts";

export function useInterviews(token: string | null, date: string, isWeekly: boolean) {
  const { addLoadingOperation, removeLoadingOperation } = useLoadingStore();
  const [interviewsResultsAreLoading, setInterviewsResultAreLoading] =
    useState<boolean>(false);
  const [claudiaInterviews, setClaudiaInterviews] = useState<InterviewsResult[]>([]);
  const [xochitlInterviews, setXochitlInterviews] = useState<InterviewsResult[]>([]);
  const [jorgeInterviews, setJorgeInterviews] = useState<InterviewsResult[]>([]);

  const fetchData = async (date: string, token: string, isWeekly: boolean) => {
    try {
      setInterviewsResultAreLoading(true);
      addLoadingOperation();
      const results = await fetchInterviews(date, token, isWeekly);
      const claudiaResults = checkIfCandidateHasInterviews("CLAUDIA SHEINBAUM", results);
      setClaudiaInterviews(claudiaResults);
      const xochitResults = checkIfCandidateHasInterviews("XÓCHITL GÁLVEZ", results);
      setXochitlInterviews(xochitResults);
      const jorgeResults = checkIfCandidateHasInterviews("JORGE ÁLVAREZ MÁYNEZ", results);
      setJorgeInterviews(jorgeResults);
    } catch (error) {
      console.error(
        "Error al obtener las entrevistas:",
        error
      );
    } finally {
      setInterviewsResultAreLoading(false);
      removeLoadingOperation();
    }
  };

  const checkIfCandidateHasInterviews = (candidate: string, results: InterviewsResult) => {
    let candidateInterviews: any[] = [];
    if (Array.isArray(results)) {
      candidateInterviews = results.filter(
        (candRes) =>
          candRes.candidate === candidate &&
          Array.isArray(candRes.interviews)
      );
    }
    return candidateInterviews;
  };

  useEffect(() => {
    if (token) fetchData(date, token, isWeekly);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, token, isWeekly]);

  return {
    interviewsResultsAreLoading,
    claudiaInterviews,
    xochitlInterviews,
    jorgeInterviews,
  };
}
