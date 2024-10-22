import { useState, useEffect } from 'react';
import {BalanceResumeResults} from "../interfaces/BalanceResume.ts";
import {fetchBalanceResume} from "../services/balanceResume.ts";
import {useLoadingStore} from "../store/loading.ts";

export function useBalanceResume(token: string | null, date: string) {
    const { addLoadingOperation, removeLoadingOperation } = useLoadingStore();
    const [balanceResumeResult, setBalanceResumeResult] = useState<BalanceResumeResults | null>(null);
    const [balanceResumeIsLoading, setBalanceResumeIsLoading] = useState<boolean>(false);

    const fetchData = async (date: string, token: string) => {
        try {
            setBalanceResumeIsLoading(true);
            addLoadingOperation();
            const result = await fetchBalanceResume(date, token);
            setBalanceResumeResult(result);
        } catch (error) {
            console.error("Error al obtener el balance del día:", error);
        } finally {
            setBalanceResumeIsLoading(false);
            removeLoadingOperation();
        }
    };

    useEffect(() => {
        if (token) fetchData(date, token);
    }, [date, token]);

    return {
        balanceResumeResult,
        balanceResumeIsLoading,
    };
}