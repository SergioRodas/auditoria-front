import {useState, useEffect} from 'react';
import {NegativeCommentsResults} from "../interfaces/NegativeCommentsResult.ts";
import {fetchNegativeComments} from "../services/negativeComments.ts";
import {useLoadingStore} from "../store/loading.ts";

export function useNegativeComments(token: string | null, date: string, medium: string, isWeekly: boolean) {
    const { addLoadingOperation, removeLoadingOperation } = useLoadingStore();
    const [negativeCommentsResult, setNegativeCommentsResult] = useState<NegativeCommentsResults | null>(null);
    const [negativeCommentsAreLoading, setNegativeCommentsAreLoading] = useState<boolean>(false);
    
    const fetchData = async (date:string, medium:string, token:string, isWeekly: boolean) => {
        try {
            setNegativeCommentsAreLoading(true);
            addLoadingOperation();
            const result = await fetchNegativeComments(date, medium, token, isWeekly);
            setNegativeCommentsResult(result);
        } catch (error) {
            console.error("Error al obtener los comentarios negativos:", error);
        } finally {
            setNegativeCommentsAreLoading(false);
            removeLoadingOperation();
        }
    };
    
    useEffect(() => {
        if (token) fetchData(date, medium, token, isWeekly);
    }, [date, medium, token, isWeekly]);

    return {
        negativeCommentsResult,
        negativeCommentsAreLoading,
    };
}