import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import CustomTextfield from '../CustomTextfield';



interface Props {
    formData: any;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeArray: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OperationalInfo: React.FC<Props> = ({ formData, handleChange, handleChangeArray }) => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Operational Information
                    </Typography>
                    <Divider />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Founded Year"
                        name="foundedYear"
                        value={formData.foundedYear}
                        onChange={handleChange}
                        size='small'
                        type='number'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Founders"
                        name="founders"
                        value={formData.founders.join(", ")}
                        onChange={handleChangeArray}
                        size='small'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="CEO"
                        name="ceo"
                        value={formData.ceo}
                        onChange={handleChange}
                        size='small'
                        required
                        type='text'
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Board Members"
                        name="boardMembers"
                        value={formData.boardMembers.join(", ")}
                        onChange={handleChangeArray}
                        size='small'
                        required
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <CustomTextfield
                        fullWidth
                        label="Employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        size='small'
                        type='number'
                    />
                </Grid>
                {/* <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                <CustomTextfield
                                    fullWidth
                                    label="Branches"
                                    name="branches"
                                    value={formData.branches.join(", ")}
                                    onChange={handleChangeArray}
                                    size='small'
                                />
                            </Grid> */}
            </Grid>
        </>
    )
}

export default React.memo(OperationalInfo);
