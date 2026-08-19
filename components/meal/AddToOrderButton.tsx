import Button from "@mui/material/Button";

interface AddToOrderButtonProps {
  onAdd: () => void;
  added: boolean;
}

export function AddToOrderButton({ onAdd, added }: AddToOrderButtonProps) {
  return (
    <Button type="button" variant="contained" size="large" fullWidth onClick={onAdd}>
      {added ? "Added to order ✓" : "Add to order"}
    </Button>
  );
}
