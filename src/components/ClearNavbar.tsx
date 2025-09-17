import {
  alpha,
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  Stack,
  SvgIcon,
  Toolbar,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { DarkMode, LightMode, Menu as MenuIcon } from "@mui/icons-material";

import UserAuthStatus from "./UserAuthStatus";
import { useState } from "react";
import React from "react";

interface ClearNavbarProps {
  onUpdatePage: (pageName: string, index: number) => void;
  onLogout: () => void;
  onDarkModeToggle: () => void;
  pages: Record<string, [React.ReactElement, React.ReactElement]>;
  pageNumber: number;
  loggedIn: Boolean;
  userID: number;
  darkMode: Boolean;
}

function ClearNavbar({
  onUpdatePage,
  onDarkModeToggle,
  pages,
  pageNumber,
  loggedIn,
  userID,
  darkMode,
}: ClearNavbarProps) {
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);
  const [navAnchor, setNavAnchor] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const buttonSelectedColor = alpha(theme.palette.primary.dark, 0.5);

  const handleNavMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setNavAnchor(event.currentTarget);
    setNavMenuOpen(true);
  };

  const handleNavMenuClose = () => {
    setNavAnchor(null);
    setNavMenuOpen(false);
  };

  return (
    <>
      <AppBar
        sx={{
          outline: 1,
          padding: 1,
          backgroundColor: "transparent",
          ...(theme.palette.mode === "dark" && {
            outlineColor: "#67676780",
          }),
        }}
      >
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            variant="dense"
            sx={{ justifyContent: "space-between" }}
          >
            {/* Name Plaque and Dark Mode Toggle */}
            <Box>
              <Button variant="outlined" sx={{ pointerEvents: "none" }}>
                Johny Tran
              </Button>
              <IconButton onClick={onDarkModeToggle}>
                {darkMode ? <DarkMode /> : <LightMode />}
              </IconButton>
            </Box>

            {/* Navigation Buttons */}
            {/* Normal View */}
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {Object.keys(pages).map((page, index) => (
                <Button
                  variant="text"
                  endIcon={pages[page][1]}
                  sx={
                    index === pageNumber
                      ? { backgroundColor: buttonSelectedColor }
                      : {}
                  }
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  onClick={() => {
                    onUpdatePage(page, index);
                  }}
                >
                  {page}
                </Button>
              ))}
              <UserAuthStatus loggedIn={loggedIn} userID={userID} />
            </Stack>

            {/* Condensed View */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleNavMenuClick}>
                <SvgIcon component={MenuIcon}></SvgIcon>
              </IconButton>
              <Menu
                anchorEl={navAnchor}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                open={navMenuOpen}
                onClose={handleNavMenuClose}
                slotProps={{
                  paper: {
                    sx: {
                      backgroundColor: "transparent",
                      outline: 1,
                    },
                  },
                }}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Stack
                  direction={"column"}
                  spacing={1}
                  sx={{ padding: 1, alignItems: "center" }}
                >
                  {Object.keys(pages).map((page, index) => (
                    <Button
                      variant="text"
                      endIcon={pages[page][1]}
                      sx={
                        index === pageNumber
                          ? { backgroundColor: buttonSelectedColor }
                          : {}
                      }
                      component={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                      onClick={() => {
                        onUpdatePage(page, index);
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                  <UserAuthStatus loggedIn={loggedIn} userID={userID} />
                </Stack>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default ClearNavbar;
