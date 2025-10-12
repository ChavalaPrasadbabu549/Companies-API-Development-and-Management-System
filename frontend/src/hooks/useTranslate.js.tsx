import { useEffect, useState } from "react";
import { useGlobalContext } from "./GlobalContext";
import { translateText } from "../utils/translator";

export const useTranslate = (text: string) => {
    const { language } = useGlobalContext();
    const [translated, setTranslated] = useState<string>(text);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let isMounted = true;

        const translateNow = async () => {
            if (language === "en" || !text.trim()) {
                setTranslated(text);
                setLoading(false);
                return;
            }

            setLoading(true);
            const result = await translateText(text, language);
            if (isMounted) {
                setTranslated(result);
                setLoading(false);
            }
        };

        translateNow();

        return () => {
            isMounted = false;
        };
    }, [text, language]);

    return { translated, loading };
};
