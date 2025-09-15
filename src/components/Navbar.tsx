import { alpha, Button, IconButton, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { DarkMode, LightMode } from "@mui/icons-material";
import UserAuthStatus from "./UserAuthStatus";

interface NavbarProps {
  onUpdatePage: (pageName: string, index: number) => void;
  onLogout: () => void;
  onDarkModeToggle: () => void;
  pages: Record<string, [React.ReactElement, React.ReactElement]>;
  pageNumber: number;
  loggedIn: Boolean;
  userID: number;
  darkMode: Boolean;
}

function Navbar({
  onUpdatePage,
  onDarkModeToggle,
  pages,
  pageNumber,
  loggedIn,
  userID,
  darkMode,
}: NavbarProps) {
  const theme = useTheme();
  const buttonSelectedColor = alpha(theme.palette.primary.dark, 0.5);

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{
          padding: 1,
          borderRadius: 5,
          boxShadow: 3,
          marginTop: 5,
          mx: { xs: 5, md: 8, lg: 25, xl: 40 },
          alignItems: "center",
          justifyContent: "space-evenly",
          transition: { md: "margin-right 0.3s, margin-left 0.3s" },
        }}
      >
        {/* Name Plaque and Dark Mode Toggle */}
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{ width: 200, justifyContent: "flex-start" }}
        >
          <Button variant="outlined" sx={{ pointerEvents: "none" }}>
            Johny Tran
          </Button>
          <IconButton onClick={onDarkModeToggle}>
            {darkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Stack>

        {/* Navigation Buttons */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
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
        </Stack>

        {/* Auth Buttons */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ width: { xs: 100, md: 200 }, justifyContent: "flex-end" }}
        >
          <UserAuthStatus loggedIn={loggedIn} userID={userID} />
        </Stack>
      </Stack>
    </>
  );
}

export default Navbar;
