import { alpha, Button, Paper, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import LogoutButton from "./LogoutButton";

import backgroundTexture from "../assets/diagmonds.webp";

interface AuthNavbarProps {
  onUpdatePage: (projectPage: string, index: number) => void;
  onLogout: () => void;
  pageNumber: number;
  pages: Record<string, React.ReactElement>;
}

function AuthNavbar({
  onUpdatePage,
  onLogout,
  pageNumber,
  pages,
}: AuthNavbarProps) {
  const theme = useTheme();
  const buttonSelectedColor = alpha(theme.palette.primary.dark, 0.5);
  return (
    <>
      <Paper
        elevation={12}
        sx={{
          outline: 1,
          padding: 1,
          borderRadius: 5,
          marginTop: { xs: 5, md: 1 },
          mx: { xs: 10, md: 30, lg: 50, xl: 70 },
          alignItems: "center",
          justifyContent: "center",
          transition: {
            md: "margin-right 0.3s, margin-left 0.3s, background-color 0.7s",
          },
          ...(theme.palette.mode === "dark" && {
            boxShadow:
              "0px 6px 28px -16px rgba(255, 255, 255, 0.28), 0px 15px 22px -10px rgba(255, 255, 255, 0.3);",
            outlineColor: "#67676780",
            backgroundImage: `url(${backgroundTexture})`,
          }),
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ alignItems: "center", justifyContent: "space-evenly" }}
        >
          {/* Filler */}
          <Stack sx={{ width: 200, justifyContent: "flex-start" }} />

          {Object.keys(pages).map((page, index) => (
            <Button
              variant="text"
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

          {/* Auth Buttons */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ width: { xs: 100, md: 200 }, justifyContent: "flex-end" }}
          >
            <LogoutButton onLogout={onLogout} />
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}

export default AuthNavbar;
