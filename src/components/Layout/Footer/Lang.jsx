import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch } from "react-redux";
import { handle_language } from "@/Store/reducers/Language";

export default function LanguageDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguage = (e) => {
    e.target.id === "ar" ? localStorage.setItem("lang","ar") : localStorage.setItem("lang","en")
    dispatch(handle_language({lang: e.target.id,dir: e.target.id === "en" ? "ltr" : "rtl"}))
    handleClose()
  }

  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          padding: 0,
          color: "inherit",
          "&:hover": {
            backgroundColor: "transparent", // Removes hover background
          },
        }}
      >
        <small className="text-sm	">Lang</small>
        <ArrowDropDownIcon fontSize="small" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
        PaperProps={{
          sx: {
            minWidth: "100px",
            boxShadow: "none", // Removes shadow
            border: "1px solid transparent", // No visible border
            padding: "4px 0",
          },
        }}
      >
        <MenuItem onClick={handleLanguage} id="en" sx={{ fontSize: "0.8rem", padding: "4px 8px" }}>
        🇺🇸 الإنجليزية (English)
        </MenuItem>
        <MenuItem onClick={handleLanguage} id="ar" sx={{ fontSize: "0.8rem", padding: "4px 8px" }}>
        🇸🇦 العربية (Arabic)
        </MenuItem>
      </Menu>
    </div>
  );
}
