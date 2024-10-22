import { useEffect, useState } from "react";
import { BalanceGraphData, Mention, TotalMentionsResponse } from "../interfaces/MentionsBalance";
import { fetchTotalMentionsCount } from "../services/mentionsBalance";
import {useLoadingStore} from "../store/loading.ts";

export const useMentionsBalance = (token: string | null, date: string, isWeekly: boolean) => {
  const { addLoadingOperation, removeLoadingOperation } = useLoadingStore();
  const [mentionsBalanceData, setMentionsBalanceData] =
    useState<TotalMentionsResponse | null>(null);
  const [balanceGraphData, setBalanceGraphData] = useState<BalanceGraphData[]>([]);
  const [mentionsBalanceIsLoading, setMentionsBalanceIsLoading] = useState<boolean>(false);

  const fetchData = async (token: string, date: string, isWeekly: boolean) => {
    try {
      setMentionsBalanceIsLoading(true)
      addLoadingOperation();
      const balanceResponse = await fetchTotalMentionsCount(date, token, isWeekly);
      if (balanceResponse) {
        setMentionsBalanceData(balanceResponse);
        const newBalanceGraphData = transformToBalanceGraphData(balanceResponse);
        setBalanceGraphData(newBalanceGraphData);
      }
    } catch (error) {
      console.error("Error al obtener los temas principales:", error);
    } finally {
      setMentionsBalanceIsLoading(false);
      removeLoadingOperation();
    }
  };

  const transformToBalanceGraphData = (balanceResponse: TotalMentionsResponse): Array<{ name: string; Negativas: number; Neutras: number; Positivas: number }> => {
    const mentions = balanceResponse.TotalMentionsCountResolver.menciones;
    const newData = mentions.map((mention: Mention) => ({
      name: mention.Actor,
      Negativas: mention.Negativas,
      Neutras: mention.Neutras,
      Positivas: mention.Positivas,
    }));
    return newData;
  };

  useEffect(() => {
    if (token) fetchData(token, date, isWeekly);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, date, isWeekly]);

  return {
    mentionsBalanceIsLoading,
    mentionsBalanceData,
    balanceGraphData,
  };
};
