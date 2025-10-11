import { createTheme, type Theme } from "@mui/material";

const getTheme = (mode: "light" | "dark") =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: '#165788',
                contrastText: '#fff',
            },
            secondary: {
                light: '#0000',
                main: '#017a87',
                dark: '#008000',
                contrastText: '#000',
            },
            success: {
                main: '#ff0000',
                contrastText: "#d0e4f7",
                dark: '#3E68A8',
                light: '#1976d2'
            },
            ...(mode === "dark" && {
                background: {
                    default: "#121212",
                    paper: "#1e1e1e",
                },
                text: {
                    primary: "#ffffff",
                    secondary: "#cccccc",
                },
                divider: "#333",
            }),
        },
        typography: {
            fontFamily: 'Poppins, sans-serif',
            h5: {
                fontWeight: 600,
                fontSize: '1.5rem',
                lineHeight: 1.3,
                color: mode === "dark" ? '#fff' : '#3E68A8',
            },
            body1: {
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: mode === "dark" ? "#ccc" : "#6b7280",
            },
            subtitle1: {
                fontSize: '0.875rem',
                lineHeight: 1.6,
                color: mode === "dark" ? "#ccc" : "#6b7280",
                margin: "0.35em 0"
            },
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        textTransform: 'capitalize',
                        borderRadius: 5,
                        fontWeight: 500,
                        fontFamily: 'Poppins, sans-serif',
                        transition: 'all 0.3s ease',
                        padding: '8px 20px',
                        '&:disabled': {
                            backgroundColor: (theme: Theme) =>
                                theme.palette.mode === "dark" ? '#333' : '#e0e0e0',
                            color: (theme: Theme) =>
                                theme.palette.mode === "dark" ? '#999' : '#9e9e9e',
                        },
                    },

                    contained: {
                        backgroundColor: mode === "dark" ? '#11456a' : '#3E68A8',
                        color: '#fff',
                        fontSize: 14,
                        '&:hover': {
                            backgroundColor: mode === "dark" ? '#0d3b66' : '#165788',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        },
                        '&:active': {
                            backgroundColor: mode === "dark" ? '#092d4a' : '#0d3b66',
                        },
                    },

                    outlined: {
                        borderColor: mode === "dark" ? '#3e7ca8' : '#3E68A8',
                        color: mode === "dark" ? '#3e7ca8' : '#3E68A8',
                        '&:hover': {
                            borderColor: mode === "dark" ? '#165788' : '#165788',
                            backgroundColor: mode === "dark" ? 'rgba(22,87,136,0.2)' : 'rgba(22,87,136,0.08)',
                        },
                    },

                    containedPrimary: {
                        backgroundColor: mode === "dark" ? '#165788' : '#165788',
                        '&:hover': {
                            backgroundColor: mode === "dark" ? '#11456a' : '#11456a',
                        },
                    },
                    containedSecondary: {
                        backgroundColor: mode === "dark" ? '#01616b' : '#017a87',
                        '&:hover': {
                            backgroundColor: mode === "dark" ? '#014f53' : '#01616b',
                        },
                    },

                },
            },
            MuiTableContainer: {
                styleOverrides: {
                    root: {
                        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                        borderRadius: 5,
                    },
                },
            },
            MuiTable: {
                styleOverrides: {
                    root: {
                        minWidth: 650,
                        borderCollapse: 'separate',
                        borderSpacing: 0,
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        '& .MuiTableCell-head': {
                            backgroundColor: '#f9fafb',
                            color: "#000",
                            fontWeight: 600,
                            textTransform: 'capitalize',
                            fontSize: 12,
                        },
                    },
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        borderBottom: '1px solid #e0e0e0',
                        padding: '10px 10px',
                        fontSize: 12,
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        // '&:nth-of-type(odd)': {
                        //     backgroundColor: '#f9fafb', // alternate row color
                        // },
                        '&:hover': {
                            backgroundColor: '#e3f2fd', // hover color
                        },
                    },
                },
            },
            MuiDialog: {
                styleOverrides: {
                    paper: {
                        borderRadius: 10,
                    },
                },
            },
            MuiDialogTitle: {
                styleOverrides: {
                    root: {
                        fontWeight: 600,
                        fontSize: 16,
                        color: mode === "dark" ? "#fff" : "#165788",
                    },
                },
            },
        }
    });

export default getTheme;