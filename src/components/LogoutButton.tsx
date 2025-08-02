interface LogoutButtonProps {
  onLogout: () => void;
}

function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <>
      <button
        className="btn btn-danger"
        onClick={() => {
          onLogout();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default LogoutButton;
