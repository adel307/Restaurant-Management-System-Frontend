import { SessionOrder } from "@/lib/types";
import { OrderItemCard } from "./OrderItemCard";

export function OrderHistoryList({ orders }: { orders: SessionOrder[] }) {
  const closedOrders = orders.filter((order) => order.status === "closed");

  return (
    <section aria-label="Order history">
      <h2 className="font-display text-2xl text-ink mb-4">Past orders</h2>
      {closedOrders.length === 0 ? (
        <p className="font-body text-sm text-mute">
          No completed sessions yet.
        </p>
      ) : (
        <div className="space-y-4">
          {closedOrders.map((order) => (
            <OrderItemCard
              key={order.id}
              orderId={order.id}
              items={order.items}
              openedAt={order.openedAt}
              closedAt={order.closedAt}
            />
          ))}
        </div>
      )}
    </section>
  );
}
