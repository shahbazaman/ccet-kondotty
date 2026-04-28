"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiPlus, FiEdit2, FiTrash2, FiUsers } from "react-icons/fi";

type Club = {
  _id: string;
  icon: string;
  name: string;
};

export default function ClubsManager() {
  const [items, setItems] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    icon: "🎯",
    name: "",
  });

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const res = await fetch("/api/clubs");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      toast.error("Failed to fetch clubs");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? "PUT" : "POST";
      const body = editingId ? { _id: editingId, ...formData } : formData;

      const res = await fetch("/api/clubs", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(editingId ? "Club updated!" : "Club added!");
        resetForm();
        fetchClubs();
      }
    } catch (error) {
      toast.error("Failed to save club");
    }
  };

  const handleEdit = (item: Club) => {
    setFormData({ icon: item.icon, name: item.name });
    setEditingId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this club?")) return;

    try {
      const res = await fetch(`/api/clubs?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Club deleted");
        fetchClubs();
      }
    } catch (error) {
      toast.error("Failed to delete club");
    }
  };

  const resetForm = () => {
    setFormData({ icon: "🎯", name: "" });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) return <div className="text-center py-12">Loading clubs...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">Clubs & Forums</h2>
          <p className="text-sm text-gray-500">Manage student clubs and activity forums</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
          <FiPlus /> Add Club
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-primary mb-4">{editingId ? "Edit Club" : "Add Club"}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Icon (Emoji) *</label>
              <input
                type="text"
                required
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                placeholder="e.g., 🤖, 🎭, 📚"
                maxLength={2}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Club Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., AI & Coding Club"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button type="submit" className="btn-primary">{editingId ? "Update" : "Add"} Club</button>
            <button type="button" onClick={resetForm} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Clubs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <div key={item._id} className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition-shadow relative group">
            <span className="text-3xl block mb-2">{item.icon}</span>
            <p className="text-xs font-medium text-gray-700 leading-snug">{item.name}</p>
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                title="Edit"
              >
                <FiEdit2 size={14} />
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                title="Delete"
              >
                <FiTrash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <FiUsers size={48} className="mx-auto mb-3 opacity-30" />
          <p>No clubs yet. Add your first club!</p>
        </div>
      )}
    </div>
  );
}