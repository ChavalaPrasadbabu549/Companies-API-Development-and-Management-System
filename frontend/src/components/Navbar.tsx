
import { useMemo } from 'react';
import { Box, Container, FormControlLabel, Switch, Typography, } from '@mui/material';
import CustomButton from './CustomButton';
import MemoizedCustomSelect from './CustomSelect';
import { useGlobalContext } from '../hooks/GlobalContext';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const theme = useTheme();
    const { t, i18n } = useTranslation();
    const { language, setLanguage, themeMode, setThemeMode } = useGlobalContext();

    const LanguageOptions = useMemo(() => [
        { value: 'en', label: 'English' },
        { value: 'hi', label: 'Hindi' },
        { value: 'es', label: 'Spanish' },
    ], []);

    const handleThemeToggle = () => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
    };

    const handleLanguageChange = (val: string) => {
        setLanguage(val);
        i18n.changeLanguage(val); // <-- error here
    };

    console.log(language)
    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 2,
                backgroundColor: theme.palette.primary.contrastText,
            }}
        >
            <Typography variant='h6'>  {t("companyManagement")}</Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
                {/* Language Select */}
                <MemoizedCustomSelect<string>
                    fullWidth
                    label="Language"
                    value={language}
                    onChange={(val) => handleLanguageChange(val)}
                    options={LanguageOptions}
                    size="small"
                />

                {/* Theme Toggle */}
                <FormControlLabel
                    control={<Switch checked={themeMode === 'dark'} onChange={handleThemeToggle} />}
                    label={themeMode === "dark" ? "Dark Mode" : "Light Mode"}
                    sx={{ ml: 2 }}
                />
                <CustomButton
                    label="Logout"
                    type="button"
                    variant="outlined"
                />
            </Box>
        </Container>
    )
}

export default Navbar;