import { alpha, Button, Container, Stack, useTheme } from "@mui/material";

interface ProjectsNavbarProps {
  onUpdatePage: (projectPage: string, index: number) => void;
  pageNumber: number;
  projects: Record<string, React.ReactElement>;
}

function ProjectsNavbar({
  onUpdatePage,
  pageNumber,
  projects,
}: ProjectsNavbarProps) {
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
          mx: { xs: 10, md: 70 },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Object.keys(projects).map((page, index) => (
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
    </>
  );
}

export default ProjectsNavbar;
