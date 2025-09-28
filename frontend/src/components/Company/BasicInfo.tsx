import React from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import CustomTextfield from '../CustomTextfield';
import MemoizedCustomSelect from '../CustomSelect';

interface Props {
    formData: any;
    setFormData: any;
    companyOptions: { value: string; label: string }[];
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicInfo: React.FC<Props> = ({ formData, setFormData, companyOptions, handleChange }) => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Basic Company Information
                    </Typography>
                    <Divider />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        size='small'
                        type='text'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Legal Name"
                        name="legalName"
                        value={formData.legalName}
                        onChange={handleChange}
                        size='small'
                        type='text'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Registration Number"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        required
                        size='small'
                        type='text'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        size='small'
                        required
                        type='text'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Sub Industry"
                        name="subIndustry"
                        value={formData.subIndustry}
                        onChange={handleChange}
                        size='small'
                        type='text'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <MemoizedCustomSelect<string>
                        fullWidth
                        label="Company Type"
                        value={formData.companyType}
                        onChange={(val) => setFormData({ ...formData, companyType: val })}
                        options={companyOptions}
                        size="small"
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Ownership"
                        name="ownership"
                        value={formData.ownership}
                        onChange={handleChange}
                        size='small'
                        type='text'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default React.memo(BasicInfo);