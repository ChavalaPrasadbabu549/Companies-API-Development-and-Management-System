import React, { useMemo } from 'react'
import { Divider, Grid, Typography } from '@mui/material';
import CustomTextfield from '../CustomTextfield';
import { Email, Phone } from '@mui/icons-material';

interface Props {
    formData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactInfo: React.FC<Props> = ({ formData, handleChange }) => {
    const emailIcon = useMemo(() => <Email />, []);
    const phoneIcon = useMemo(() => <Phone />, []);

    console.log("child rendering !")

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Contact Information
                    </Typography>
                    <Divider />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        size='small'
                        required
                        type='email'
                        startAdornment={emailIcon}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        size='small'
                        required
                        type='number'
                        startAdornment={phoneIcon}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Fax"
                        name="fax"
                        value={formData.fax}
                        onChange={handleChange}
                        size='small'
                        type='text'
                    />
                </Grid>
                {/* <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <CustomTextfield
                                    fullWidth
                                    label="Website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    size='small'
                                    type='file'
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid> */}
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        size='small'
                        type='text'
                        required
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default React.memo(ContactInfo);