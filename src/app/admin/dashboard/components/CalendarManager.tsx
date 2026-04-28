"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiPlus, FiEdit2, FiTrash2, FiCalendar } from "react-icons/fi";

type CalendarEvent = {
  _id: string;
  month: string;
  event: string;
};

export default function CalendarManager() {
  const [items, setItems] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    month: "",
    event: "",
  });

  useEffect(() => {
    fetchCalendar();
  }, []);

  const fetchCalendar = async () => {
    try {
      const res = await fetch("/api/calendar");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      toast.error("Failed to fetch calendar");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? "PUT" : "POST";
      const body = editingId ? { _id: editingId, ...formData } : formData;

      const res = await fetch("/api/calendar", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(editingId ? "Event updated!" : "Event added!");
        resetForm();
        fetchCalendar();
      }
    } catch (error) {
      toast.error("Failed to save event");
    }
  };

  const handleEdit = (item: CalendarEvent) => {
    setFormData({ month: item.month, event: item.event });
    setEditingId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this event?")) return;

    try {
      const res = await fetch(`/api/calendar?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Event deleted");
        fetchCalendar();
      }
    } catch (error) {
      toast.error("Failed to delete event");
    }
  };

  const resetForm = () => {
    setFormData({ month: "", event: "" });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) return <div className="text-center py-12">Loading calendar...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">Academic Calendar</h2>
          <p className="text-sm text-gray-500">Manage academic events and important dates</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
          <FiPlus /> Add Event
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-primary mb-4">{editingId ? "Edit Event" : "Add Event"}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Month/Date *</label>
              <input
                type="text"
                required
                value={formData.month}
                onChange={(e) => setFormData({ ...formData, month: e.target.value })}
                placeholder="e.g., June 2026, Sep 15"
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
                placeholder="e.g., Academic Year Begins, Mid-Semester Exams"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button type="submit" className="btn-primary">{editingId ? "Update" : "Add"} Event</button>
            <button type="button" onClick={resetForm} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Calendar Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item._id} className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm hover:shadow-md transition-shadow relative group">
            <p className="text-accent font-bold text-xs mb-1">{item.month}</p>
            <p className="text-gray-700 text-xs leading-snug">{item.event}</p>
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
          <FiCalendar size={48} className="mx-auto mb-3 opacity-30" />
          <p>No events yet. Add your first calendar event!</p>
        </div>
      )}
    </div>
  );
}