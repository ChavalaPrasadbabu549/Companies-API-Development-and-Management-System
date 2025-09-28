import React from 'react'
import { InputAdornment, TextField, type SxProps, type Theme, type InputLabelProps as MUIInputLabelProps } from '@mui/material'



interface CustomTextfieldProps {
    label: string;
    type?: string;
    name?: string;
    fullWidth?: boolean;
    sx?: SxProps<Theme>;
    margin?: "normal" | "none" | "dense" | undefined;
    size?: "small" | "medium";
    required?: boolean;
    variant?: "outlined" | "filled" | "standard" | undefined;
    value?: string | number | boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: React.ReactNode;
    disabled?: boolean;
    InputLabelProps?: Partial<MUIInputLabelProps>;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
}

const CustomTextfield: React.FC<CustomTextfieldProps> = ({
    label,
    type,
    size,
    fullWidth,
    margin,
    sx,
    name,
    required,
    variant,
    value,
    onChange,
    error,
    helperText,
    disabled,
    InputLabelProps,
    startAdornment,
    endAdornment,
    ...rest
}) => {

    return (
        <div>
            <TextField
                fullWidth={fullWidth}
                {...rest}
                label={label}
                margin={margin}
                type={type}
                size={size}
                sx={sx}
                name={name}
                required={required}
                variant={variant}
                value={value}
                onChange={onChange}
                onWheel={(e) => (e.target as HTMLInputElement).blur()}
                error={error}
                helperText={helperText}
                disabled={disabled}
                InputLabelProps={InputLabelProps}
                InputProps={{
                    startAdornment: startAdornment ? (
                        <InputAdornment position="start">{startAdornment}</InputAdornment>
                    ) : undefined,
                    endAdornment: endAdornment ? (
                        <InputAdornment position="end">{endAdornment}</InputAdornment>
                    ) : undefined,
                }}
            />
        </div>
    )
}

export default React.memo(CustomTextfield);