import { createTheme } from "@mui/material";

let theme = createTheme({

    palette: {
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
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h5: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.3,
            color: '#165788',
        },
        body1: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
            color: '#6b7280',
        },
        subtitle1: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
            color: '#6b7280',
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
                        backgroundColor: '#e0e0e0',
                        color: '#9e9e9e',
                    },
                },

                contained: {
                    backgroundColor: '#3E68A8',
                    color: '#fff',
                    fontSize: 14,
                    '&:hover': {
                        backgroundColor: '#165788',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    },
                    '&:active': {
                        backgroundColor: '#0d3b66',
                    },
                },

                containedPrimary: {
                    backgroundColor: '#165788',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#11456a',
                    },
                },

                containedSecondary: {
                    backgroundColor: '#017a87',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#01616b',
                    },
                },

                outlined: {
                    borderColor: '#3E68A8',
                    color: '#3E68A8',
                    fontSize: 14,
                    '&:hover': {
                        borderColor: '#165788',
                        backgroundColor: 'rgba(22, 87, 136, 0.08)',
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
                    color: '#165788',
                },
            },
        },
    }
});

export default theme;