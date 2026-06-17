import { DollarSign, ShoppingCart, Users, Package } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,430",
      icon: DollarSign,
    },
    {
      title: "Orders",
      value: "320",
      icon: ShoppingCart,
    },
    {
      title: "Users",
      value: "1,120",
      icon: Users,
    },
    {
      title: "Products",
      value: "85",
      icon: Package,
    },
  ];

  const orders = [
    { id: "#ORD001", user: "John Doe", total: "$120", status: "Paid" },
    { id: "#ORD002", user: "Alice Smith", total: "$80", status: "Pending" },
    { id: "#ORD003", user: "Robert", total: "$200", status: "Delivered" },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Hoodie",
      price: "$49",
      img: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199",
      img: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow flex items-center justify-between"
            >
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h2 className="text-xl font-bold">{stat.value}</h2>
              </div>
              <div className="bg-violet-100 p-3 rounded-lg">
                <Icon className="text-violet-600 w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= TABLE + PRODUCTS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Orders */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

          <div className="flex flex-col gap-3">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex justify-between text-sm border-b pb-2"
              >
                <span>{order.id}</span>
                <span>{order.user}</span>
                <span>{order.total}</span>
                <span className="text-violet-600">{order.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Top Products</h2>

          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <div key={product.id} className="flex items-center gap-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.price}</p>
                </div>

                <span className="text-xs text-green-600">Popular</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
