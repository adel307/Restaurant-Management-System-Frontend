import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Chip from "@mui/material/Chip";
import { mockRestaurants } from "@/lib/mock-data";
import { Restaurant } from "@/lib/types";

const STATUS_COLOR: Record<Restaurant["subscriptionStatus"], "success" | "warning" | "error"> = {
  active: "success",
  trial: "warning",
  suspended: "error",
};

export function RestaurantsDirectoryTable() {
  return (
    <Card component="section" aria-label="Restaurants directory">
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Restaurants directory
        </Typography>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Restaurant</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Staff</TableCell>
                <TableCell>Orders</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockRestaurants.map((restaurant) => (
                <TableRow key={restaurant.id}>
                  <TableCell>{restaurant.name}</TableCell>
                  <TableCell sx={{ color: "text.secondary" }}>{restaurant.address}</TableCell>
                  <TableCell sx={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
                    {restaurant.contact}
                  </TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={restaurant.subscriptionStatus}
                      color={STATUS_COLOR[restaurant.subscriptionStatus]}
                      sx={{ textTransform: "capitalize" }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
                    {restaurant.staffCount}
                  </TableCell>
                  <TableCell sx={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
                    {restaurant.ordersCount}
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
