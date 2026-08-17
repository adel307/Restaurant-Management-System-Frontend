import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";

const ACTIONS = [
  { label: "Add restaurant", description: "Register a new restaurant on the platform" },
  { label: "Edit restaurant", description: "Update details for an existing restaurant" },
  { label: "Freeze account", description: "Suspend a restaurant's access temporarily" },
  { label: "Manage permissions", description: "Adjust what a restaurant admin can do" },
];

export function SystemControlPanel() {
  return (
    <Card component="section" aria-label="System controls">
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          System controls
        </Typography>
        <Grid container spacing={1.5}>
          {ACTIONS.map((action) => (
            <Grid item xs={12} sm={6} key={action.label}>
              <ButtonBase
                sx={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  p: 2,
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 1,
                  transition: "border-color 0.15s",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 0.5 }}>
                    {action.label}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
                    {action.description}
                  </Typography>
                </Box>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
