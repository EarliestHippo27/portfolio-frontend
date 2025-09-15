import { alpha, Button, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import LogoutButton from "./LogoutButton";

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
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{
          padding: 1,
          borderRadius: 5,
          boxShadow: 3,
          marginTop: { xs: 5, md: 1 },
          mx: { xs: 10, md: 30, lg: 50, xl: 70 },
          alignItems: "center",
          justifyContent: "center",
          transition: { md: "margin-right 0.3s, margin-left 0.3s" },
        }}
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
    </>
  );
}

export default AuthNavbar;
