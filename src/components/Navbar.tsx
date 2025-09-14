import { alpha, Button, IconButton, Stack, useTheme } from "@mui/material";
import LogoutButton from "./LogoutButton";
import { DarkMode, LightMode } from "@mui/icons-material";

interface NavbarProps {
  onUpdatePage: (pageName: string, index: number) => void;
  onLogout: () => void;
  onDarkModeToggle: () => void;
  pages: Record<string, React.ReactElement>;
  pageNumber: number;
  loggedIn: Boolean;
  userID: number;
  darkMode: Boolean;
}

function Navbar({
  onUpdatePage,
  onLogout,
  onDarkModeToggle,
  pages,
  pageNumber,
  //loggedIn,
  //userID,
  darkMode,
}: NavbarProps) {
  const theme = useTheme();
  const buttonSelectedColor = alpha(theme.palette.primary.dark, 0.5);

  function handleLogout() {
    onUpdatePage("Home", 0);
    onLogout();
  }

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
          mx: { xs: 10, md: 60 },
          alignItems: "center",
          justifyContent: "space-evenly",
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
              sx={
                index === pageNumber
                  ? { backgroundColor: buttonSelectedColor }
                  : {}
              }
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
          <LogoutButton onLogout={handleLogout} />
        </Stack>
      </Stack>
    </>
  );
}

export default Navbar;
