import { useState } from "react";
import { Trash2 } from "lucide-react";
import "animate.css";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "#ORD001",
      customer: "John Doe",
      total: 120,
      status: "Pending",
    },
    {
      id: "#ORD002",
      customer: "Alice Smith",
      total: 80,
      status: "Shipped",
    },
    {
      id: "#ORD003",
      customer: "Robert",
      total: 200,
      status: "Delivered",
    },
  ]);

  const updateStatus = (id) => {
    const updated = orders.map((order) => {
      if (order.id === id) {
        let nextStatus =
          order.status === "Pending"
            ? "Shipped"
            : order.status === "Shipped"
              ? "Delivered"
              : "Delivered";

        const updatedOrder = { ...order, status: nextStatus };

        console.log(updatedOrder); // ✅ required

        return updatedOrder;
      }
      return order;
    });

    setOrders(updated);
  };

  const deleteOrder = (id) => {
    console.log("Deleted:", id); // ✅ required
    setOrders(orders.filter((o) => o.id !== id));
  };

  const getStatusColor = (status) => {
    if (status === "Pending") return "text-yellow-500";
    if (status === "Shipped") return "text-blue-500";
    return "text-green-600";
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ================= HEADER ================= */}
      <h2 className="text-2xl font-bold animate__animated animate__fadeInDown">
        Orders
      </h2>

      {/* ================= TABLE ================= */}
      <div className="bg-white p-6 rounded-xl shadow animate__animated animate__fadeInUp overflow-x-auto">
        {/* Table Header */}
        <div className="grid grid-cols-5 text-sm font-semibold border-b pb-3 mb-3">
          <span>Order ID</span>
          <span>Customer</span>
          <span>Total</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {/* Orders */}
        {orders.map((order, index) => (
          <div
            key={order.id}
            className="grid grid-cols-5 items-center text-sm py-3 border-b animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span>{order.id}</span>
            <span>{order.customer}</span>
            <span className="font-medium">${order.total}</span>

            {/* Status */}
            <span
              onClick={() => updateStatus(order.id)}
              className={`cursor-pointer font-medium ${getStatusColor(
                order.status,
              )}`}
            >
              {order.status}
            </span>

            {/* Actions */}
            <button
              onClick={() => deleteOrder(order.id)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}

        {orders.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No orders found 😢</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
