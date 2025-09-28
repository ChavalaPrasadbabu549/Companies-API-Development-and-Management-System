import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

interface CustomModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
    actions: React.ReactNode;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    fullWidth?: boolean;
}

const CustomModal: React.FC<CustomModalProps> = ({
    open,
    onClose,
    title,
    content,
    actions,
    maxWidth,
    fullWidth = true
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
        >
            <DialogTitle>{title}</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                {content}
            </DialogContent>
            <DialogActions>
                {actions}
            </DialogActions>
        </Dialog>
    );
};

export default CustomModal;
