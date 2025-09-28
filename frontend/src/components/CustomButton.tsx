import React from 'react'
import { Button, type SxProps, type Theme } from '@mui/material';

interface CustomButtonProps {
    label: React.ReactNode;
    fullWidth?: boolean;
    type?: "button" | "submit" | "reset";
    variant?: "text" | "outlined" | "contained";
    sx?: SxProps<Theme>;
    disabled?: boolean;
    onClick?: () => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    fullWidth,
    label,
    type,
    variant,
    disabled,
    sx,
    onClick,
    startIcon,
    endIcon,
    ...rest
}) => {
    return (
        <>
            <Button
                sx={sx}
                type={type}
                variant={variant}
                disabled={disabled}
                onClick={onClick}
                fullWidth={fullWidth}
                {...rest}
                startIcon={startIcon}
                endIcon={endIcon}
            >
                {label}
            </Button>
        </>
    )
}

export default React.memo(CustomButton);
