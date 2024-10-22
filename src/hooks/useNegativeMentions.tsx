import { useState, useEffect } from 'react';
import { fetchNegativeMentions } from "../services/negativeMentions.ts";
import { NegativeMentionsResult } from "../interfaces/NegativeMentionsResult.ts";
import {useLoadingStore} from "../store/loading.ts";

export function useNegativeMentions(token: string | null, date: string, isWeekly: boolean) {
    const { addLoadingOperation, removeLoadingOperation } = useLoadingStore();
    const [negativeMentionsInColumnsResult, setNegativeMentionsInColumnsResult] = useState<NegativeMentionsResult | null>(null);
    const [negativeMentionsInColumnsAreLoading, setNegativeMentionsInColumnsAreLoading] = useState<boolean>(false);

    const fetchData = async (date:string, token:string, isWeekly: boolean) => {
        try {
            setNegativeMentionsInColumnsAreLoading(true);
            addLoadingOperation();
            const result = await fetchNegativeMentions(date, token, isWeekly);
            setNegativeMentionsInColumnsResult(result);
        } catch (error) {
            console.error("Error al obtener las menciones negativas en columnas:", error);
        } finally {
            setNegativeMentionsInColumnsAreLoading(false);
            removeLoadingOperation();
        }
    };

    useEffect(() => {
        if (token) fetchData(date, token, isWeekly);
    }, [date, token, isWeekly]);

    return {
        negativeMentionsInColumnsResult,
        negativeMentionsInColumnsAreLoading,
    };
}