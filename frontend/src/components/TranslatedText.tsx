import { Skeleton, Typography } from "@mui/material";
import { useTranslate } from "../hooks/useTranslate.js";
import type { TranslatedTextProps } from "../types/Type.js";


const TranslatedText: React.FC<TranslatedTextProps> = ({ text, variant = "body1", className, style }) => {
    const { translated, loading } = useTranslate(text);

    if (loading) {
        return <Skeleton variant="text" width="200px" />;
    }

    return (
        <Typography variant={variant} className={className} style={style}>
            {translated}
        </Typography>
    );
};

export default TranslatedText;
