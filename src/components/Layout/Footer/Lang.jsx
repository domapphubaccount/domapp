import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function LanguageDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguage = (e) => {
    
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
