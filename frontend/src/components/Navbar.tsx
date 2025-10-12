import {
    Box,
    Container,
    FormControlLabel,
    Switch,
} from "@mui/material";
import CustomButton from "./CustomButton";
import MemoizedCustomSelect from "./CustomSelect";
import { useGlobalContext } from "../hooks/GlobalContext";
import { useTheme } from "@mui/material/styles";
import { LanguageOptions } from "../utils/languages.js";
import TranslatedText from "./TranslatedText.js";

const Navbar = () => {
    const theme = useTheme();
    const { language, setLanguage, themeMode, setThemeMode } = useGlobalContext();

    const handleThemeToggle = () => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
    };

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 2,
                backgroundColor: theme.palette.primary.contrastText,
            }}
        >
            <TranslatedText text="Company Management" variant="h6" />
            <Box sx={{ display: "flex", gap: 2 }}>
                {/* Language Select */}
                <MemoizedCustomSelect<string>
                    fullWidth
                    label="Language"
                    value={language}
                    onChange={(value) => setLanguage(value)}
                    options={LanguageOptions}
                    size="small"
                />

                {/* Theme Toggle */}
                <FormControlLabel
                    control={<Switch checked={themeMode === "dark"} onChange={handleThemeToggle} />}
                    label={themeMode === "dark" ? "Dark Mode" : "Light Mode"}
                />

                <CustomButton label="Logout" type="button" variant="outlined" />
            </Box>
        </Container>
    );
};

export default Navbar;
