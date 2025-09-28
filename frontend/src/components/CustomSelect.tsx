import { InputLabel, MenuItem, Select, FormControl, type SelectChangeEvent, type SxProps, type Theme, } from "@mui/material";
import React from "react";


interface CustomSelectProps<T extends string | number | boolean> {
    label: string;
    value: T;
    onChange: (value: T) => void;
    options: { value: T; label: string }[];
    fullWidth?: boolean;
    sx?: SxProps<Theme>;
    size?: "small" | "medium";
}

function CustomSelect<T extends string | number | boolean>({
    label,
    size,
    value,
    onChange,
    options,
    fullWidth,
    sx,
}: CustomSelectProps<T>) {
    const handleChange = (event: SelectChangeEvent<string>) => {
        const selected = options.find(
            (opt) => String(opt.value) === event.target.value
        )?.value;
        if (selected !== undefined) {
            onChange(selected);
        }
    };

    return (
        <FormControl fullWidth={fullWidth} sx={sx} size={size}>
            <InputLabel id={`${label}-label`}>{label}</InputLabel>
            <Select

                labelId={`${label}-label`}
                label={label}
                value={String(value)}
                onChange={handleChange}
            >
                {options.map((opt) => (
                    <MenuItem key={String(opt.value)} value={String(opt.value)}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

const MemoizedCustomSelect = React.memo(CustomSelect) as typeof CustomSelect;
export default MemoizedCustomSelect;
