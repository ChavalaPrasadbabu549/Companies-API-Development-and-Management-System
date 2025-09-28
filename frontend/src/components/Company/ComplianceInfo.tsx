import React from 'react';
import { Divider, Grid, Typography } from '@mui/material'
import CustomTextfield from '../CustomTextfield';
import MemoizedCustomSelect from '../CustomSelect';

interface Props {
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    statusOptions: { value: boolean; label: string }[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeArray: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ComplianceInfo: React.FC<Props> = ({ formData, setFormData, statusOptions, handleChange, handleChangeArray }) => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Compliance & Status
                    </Typography>
                    <Divider />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <MemoizedCustomSelect<boolean>
                        fullWidth
                        label="Status"
                        value={formData.status}
                        onChange={(val) => setFormData({ ...formData, status: val })}
                        options={statusOptions}
                        size="small"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Licenses"
                        name="licenses"
                        value={formData.licenses.join(", ")}
                        onChange={handleChangeArray}
                        size='small'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Tax ID"
                        name="taxId"
                        value={formData.taxId}
                        onChange={handleChange}
                        size='small'
                        type='text'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Regulatory Body"
                        name="regulatoryBody"
                        value={formData.regulatoryBody}
                        onChange={handleChange}
                        size='small'
                        type='text'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default React.memo(ComplianceInfo);