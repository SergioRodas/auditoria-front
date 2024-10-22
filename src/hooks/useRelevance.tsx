import { useState, useEffect } from 'react';
import {fetchRelevance} from "../services/relevance.ts";
import {RelevanceResult} from "../interfaces/RelevanceResults.ts";
import {useLoadingStore} from "../store/loading.ts";

export function useRelevance(token: string | null, date: string, medium: string, isWeekly: boolean) {
    const { addLoadingOperation, removeLoadingOperation } = useLoadingStore();
    const [relevanceResult, setRelevanceResult] = useState<RelevanceResult | null>(null);
    const [relevanceIsLoading, setRelevanceIsLoading] = useState<boolean>(false);

    const fetchData = async (date: string, medium: string, token: string, isWeekly: boolean) => {
        try {
            setRelevanceIsLoading(true);
            addLoadingOperation();
            const result = await fetchRelevance(date, medium, token, isWeekly);
            setRelevanceResult(result);
        } catch (error) {
            console.error("Error al obtener los medios de mayor relevancia:", error);
        } finally {
            setRelevanceIsLoading(false);
            removeLoadingOperation();
        }
    };

    useEffect(() => {
        if (token) fetchData(date, medium, token, isWeekly);
    }, [date, medium, token, isWeekly]);

    return {
        relevanceResult,
        relevanceIsLoading,
    };
}