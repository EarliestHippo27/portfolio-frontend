import { Button } from "@mui/material";

interface LogoutButtonProps {
  loggedIn: Boolean;
  userID: number;
}

function UserAuthStatus({ loggedIn, userID }: LogoutButtonProps) {
  return (
    <>
      <Button variant="contained" sx={{ width: 100, pointerEvents: "none" }}>
        {loggedIn ? userID : "Guest"}
      </Button>
    </>
  );
}

export default UserAuthStatus;
