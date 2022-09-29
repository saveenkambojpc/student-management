
import React, {useState} from "react";

export function useModalState(defaultValue = false) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return { open, handleOpen, handleClose }
}