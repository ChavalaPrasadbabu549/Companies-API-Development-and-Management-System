import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import CustomTextfield from '../CustomTextfield';



interface Props {
    formData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeArray: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BrandingInfo: React.FC<Props> = ({ formData, handleChange, handleChangeArray }) => {
    console.log("child rendering !")
    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Branding & Media
                    </Typography>
                    <Divider />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Logo URL"
                        name="logoUrl"
                        value={formData.logoUrl}
                        onChange={handleChange}
                        size='small'
                        type='text'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Social Links"
                        name="socialLinks"
                        value={formData.socialLinks.join(", ")}
                        onChange={handleChangeArray}
                        size='small'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="About"
                        name="bout"
                        value={formData.about}
                        onChange={handleChange}
                        size='small'
                        type='text'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default BrandingInfo