import { useEffect, useState } from "react";
import { MediumTrendsResponse } from "../interfaces/mediumTrends";
import { fetchMediumTrends } from "../services/mediumTrends";
import {useLoadingStore} from "../store/loading.ts";

export const useMediumTrends = (token: string | null, date: string, isWeekly: boolean) => {
  const { addLoadingOperation, removeLoadingOperation } = useLoadingStore();
  const [positiveMentionsData, setPositiveMentionsData] = useState<MediumTrendsResponse | null>(null);
  const [negativeMentionsData, setNegativeMentionsData] = useState<MediumTrendsResponse | null>(null);
  const [positiveMentionsAreLoading, setPositiveMentionsAreLoading] = useState<boolean>(false);
  const [negativeMentionsAreLoading, setNegativeMentionsAreLoading] = useState<boolean>(false);

  const fetchPositiveMentions = async (token: string, date: string, isWeekly: boolean) => {
    try {
      setPositiveMentionsAreLoading(true);
      addLoadingOperation();
      const positiveMentionsResponse = await fetchMediumTrends(date, "Positiva",token, isWeekly);
      if (positiveMentionsResponse) {
        setPositiveMentionsData(positiveMentionsResponse);
      }
    } catch (error) {
      console.error("Error al obtener las menciones positivas:", error);
    } finally {
      setPositiveMentionsAreLoading(false);
      removeLoadingOperation();
    }
  };
  const fetchNegativeMentions = async (token: string, date: string, isWeekly: boolean) => {
    try {
      setNegativeMentionsAreLoading(true);
      addLoadingOperation();
      const negativeMentionsResponse = await fetchMediumTrends(date, "Negativa", token, isWeekly);
      if (negativeMentionsResponse) {
        setNegativeMentionsData(negativeMentionsResponse);
      }
    } catch (error) {
      console.error("Error al obtener las menciones negativas:", error);
    } finally {
      setNegativeMentionsAreLoading(false);
      removeLoadingOperation();
    }
  };

  useEffect(() => {
    if (token) {
      fetchPositiveMentions(token, date, isWeekly);
      fetchNegativeMentions(token, date, isWeekly);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, date, isWeekly]);

  return {
    positiveMentionsData,
    negativeMentionsData,
    positiveMentionsAreLoading,
    negativeMentionsAreLoading,
  };
};
