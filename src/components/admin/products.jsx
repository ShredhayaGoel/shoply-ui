import { useState } from "react";
import { Plus, Trash2, Edit } from "lucide-react";
import "animate.css";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Premium Hoodie",
      price: 49,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAdd = () => {
    if (!form.name || !form.price) {
      alert("All fields required");
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...form,
    };

    console.log(newProduct); // ✅ required

    setProducts([...products, newProduct]);
    setForm({ name: "", price: "", image: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center animate__animated animate__fadeInDown">
        <h2 className="text-2xl font-bold">Products</h2>
      </div>

      {/* ================= ADD PRODUCT ================= */}
      <div className="bg-white p-6 rounded-xl shadow animate__animated animate__fadeInUp">
        <h3 className="mb-4 font-semibold">Add Product</h3>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded-lg"
          />

          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="border p-2 rounded-lg"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="border p-2 rounded-lg"
          />
        </div>

        <button
          onClick={handleAdd}
          className="mt-4 flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-lg"
        >
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* ================= LIST ================= */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition animate__animated animate__zoomIn"
          >
            <img
              src={p.image || "https://via.placeholder.com/150"}
              alt={p.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-violet-600 font-bold">${p.price}</p>

            <div className="flex gap-3 mt-3">
              <button className="p-2 bg-gray-100 rounded-lg">
                <Edit className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleDelete(p.id)}
                className="p-2 bg-red-100 text-red-600 rounded-lg"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
