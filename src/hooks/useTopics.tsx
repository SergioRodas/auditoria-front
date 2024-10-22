import { useState, useEffect } from 'react';
import { fetchTopTopics } from "../services/topTopics.ts";
import { TopTopicsResult } from "../interfaces/TopTopicsResult.ts";
import {useLoadingStore} from "../store/loading.ts";

export function useTopTopics(token: string | null, date: string, isWeekly: boolean) {
    const { addLoadingOperation, removeLoadingOperation } = useLoadingStore();
    const [topicsResult, setTopicsResult] = useState<TopTopicsResult | null>(null);
    const [topTopicsAreLoading, setTopTopicsAreLoading] = useState<boolean>(false);

    const fetchData = async (date: string, token: string, isWeekly: boolean) => {
        try {
            setTopTopicsAreLoading(true);
            addLoadingOperation();
            const topicsResult = await fetchTopTopics(date, token, isWeekly);
            setTopicsResult(topicsResult);
        } catch (error) {
            console.error("Error al obtener los medios de mayor relevancia:", error);
        } finally {
            setTopTopicsAreLoading(false);
            removeLoadingOperation();
        }
    };

    useEffect(() => {
        if (token) fetchData(date, token, isWeekly);
    }, [date, token, isWeekly]);

    return {
        topicsResult,
        topTopicsAreLoading,
    };
}