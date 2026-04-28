"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiPlus, FiEdit2, FiTrash2, FiClock } from "react-icons/fi";

type Milestone = {
  _id: string;
  year: string;
  event: string;
};

export default function MilestonesManager() {
  const [items, setItems] = useState<Milestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    year: "",
    event: "",
  });

  useEffect(() => {
    fetchMilestones();
  }, []);

  const fetchMilestones = async () => {
    try {
      const res = await fetch("/api/milestones");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      toast.error("Failed to fetch milestones");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? "PUT" : "POST";
      const body = editingId ? { _id: editingId, ...formData } : formData;

      const res = await fetch("/api/milestones", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(editingId ? "Milestone updated!" : "Milestone added!");
        resetForm();
        fetchMilestones();
      }
    } catch (error) {
      toast.error("Failed to save milestone");
    }
  };

  const handleEdit = (item: Milestone) => {
    setFormData({ year: item.year, event: item.event });
    setEditingId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this milestone?")) return;

    try {
      const res = await fetch(`/api/milestones?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Milestone deleted");
        fetchMilestones();
      }
    } catch (error) {
      toast.error("Failed to delete milestone");
    }
  };

  const resetForm = () => {
    setFormData({ year: "", event: "" });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) return <div className="text-center py-12">Loading milestones...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">Milestones & History</h2>
          <p className="text-sm text-gray-500">Manage college history timeline</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
          <FiPlus /> Add Milestone
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-primary mb-4">{editingId ? "Edit Milestone" : "Add Milestone"}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Year *</label>
              <input
                type="text"
                required
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                placeholder="e.g., 1995, 2026"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Event *</label>
              <input
                type="text"
                required
                value={formData.event}
                onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                placeholder="Description of the milestone..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button type="submit" className="btn-primary">{editingId ? "Update" : "Add"} Milestone</button>
            <button type="button" onClick={resetForm} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Timeline */}
      <div className="relative border-l-4 border-primary/20 ml-6 space-y-6">
        {items.map((item, i) => (
          <div key={item._id} className="relative pl-8 group">
            <div className="absolute -left-5 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-md">
              {i + 1}
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-accent font-bold text-sm block mb-1">{item.year}</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <button
                    onClick={() => handleEdit(item)}
                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"
                    title="Edit"
                  >
                    <FiEdit2 size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg"
                    title="Delete"
                  >
                    <FiTrash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <FiClock size={48} className="mx-auto mb-3 opacity-30" />
          <p>No milestones yet. Add your first milestone!</p>
        </div>
      )}
    </div>
  );
}