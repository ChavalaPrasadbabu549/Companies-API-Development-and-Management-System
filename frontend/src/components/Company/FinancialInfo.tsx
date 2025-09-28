import React, { useMemo } from 'react';
import { Divider, Grid, Typography } from '@mui/material'
import CustomTextfield from '../CustomTextfield';
import { AttachMoney } from '@mui/icons-material';
import MemoizedCustomSelect from '../CustomSelect';


interface Props {
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    booleanOptions: { value: boolean; label: string }[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FinancialInfo: React.FC<Props> = ({ formData, setFormData, booleanOptions, handleChange }) => {
    const moneyIcon = useMemo(() => <AttachMoney />, []);
    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Financial Information
                    </Typography>
                    <Divider />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Annual Revenue"
                        name="annualRevenue"
                        value={formData.annualRevenue}
                        onChange={handleChange}
                        size='small'
                        type='number'
                        startAdornment={moneyIcon}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Valuation"
                        name="valuation"
                        value={formData.valuation}
                        onChange={handleChange}
                        size='small'
                        type='number'
                        startAdornment={moneyIcon}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Stock Symbol"
                        name="stockSymbol"
                        value={formData.stockSymbol}
                        onChange={handleChange}
                        startAdornment={moneyIcon}
                        size='small'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <MemoizedCustomSelect<boolean>
                        fullWidth
                        label="Is Listed"
                        value={formData.isListed}
                        onChange={(val) => setFormData({ ...formData, isListed: val })}
                        options={booleanOptions}
                        size="small"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default React.memo(FinancialInfo);