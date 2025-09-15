import { Button } from "@mui/material";

interface LogoutButtonProps {
  onLogout: () => void;
}

function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <>
      <Button
        variant="contained"
        sx={{ width: 100 }}
        onClick={() => {
          onLogout();
        }}
      >
        Logout
      </Button>
    </>
  );
}

export default LogoutButton;
