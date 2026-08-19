import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Chip from "@mui/material/Chip";
import { mockStaff } from "@/lib/mock-data";

export function StaffManagementSection() {
  return (
    <Card component="section" aria-label="Staff">
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 2 }}>
          <Typography variant="h6">Staff on record</Typography>
          <Typography sx={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "text.secondary" }}>
            {mockStaff.length} people
          </Typography>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Shift</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockStaff.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell sx={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
                    {member.shift}
                  </TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={member.active ? "On duty" : "Off duty"}
                      color={member.active ? "success" : "default"}
                      variant={member.active ? "filled" : "outlined"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
