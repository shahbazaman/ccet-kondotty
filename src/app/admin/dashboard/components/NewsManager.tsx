"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiPlus, FiEdit2, FiTrash2, FiFileText } from "react-icons/fi";
import CloudinaryUpload from "../../../../components/ui/CloudinaryUpload";

type NewsItem = {
  _id: string;
  title: string;
  desc: string;
  date: string;
  image?: string;
  pdfUrl?: string;
};

const emptyForm = { title: "", desc: "", date: "", image: "", pdfUrl: "" };

export default function NewsManager() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => { fetchNews(); }, []);

  const fetchNews = async () => {
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      if (Array.isArray(data)) setItems(data);
    } catch { toast.error("Failed to fetch news"); }
    finally { setLoading(false); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? "PUT" : "POST";
      const body = editingId ? { _id: editingId, ...formData } : formData;
      const res = await fetch("/api/news", {
        method, headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        toast.success(editingId ? "News updated!" : "News added!");
        resetForm(); fetchNews();
      }
    } catch { toast.error("Failed to save news"); }
  };

  const handleEdit = (item: NewsItem) => {
    setFormData({ title: item.title, desc: item.desc, date: item.date, image: item.image || "", pdfUrl: item.pdfUrl || "" });
    setEditingId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this news item?")) return;
    try {
      const res = await fetch(`/api/news?id=${id}`, { method: "DELETE" });
      if (res.ok) { toast.success("Deleted"); fetchNews(); }
    } catch { toast.error("Failed to delete"); }
  };

  const resetForm = () => { setFormData(emptyForm); setEditingId(null); setShowForm(false); };

  if (loading) return <div className="text-center py-12 text-gray-400">Loading news...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">News & Events</h2>
          <p className="text-sm text-gray-500">Manage news, events, and announcements. Attach images or PDFs.</p>
        </div>
        <button onClick={() => { resetForm(); setShowForm(!showForm); }} className="btn-primary flex items-center gap-2">
          <FiPlus /> Add News
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-primary mb-4">{editingId ? "Edit News" : "Add News / Event"}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input required value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Admissions Open for 2026–2027"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea required rows={3} value={formData.desc}
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                placeholder="Brief description of the news or event..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none resize-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
              <input required value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                placeholder="June 2026"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <CloudinaryUpload
              label="News Image (optional)"
              value={formData.image}
              onChange={(url) => setFormData({ ...formData, image: url })}
              accept="image/*"
            />
            <CloudinaryUpload
              label="Attach PDF (optional)"
              value={formData.pdfUrl}
              onChange={(url) => setFormData({ ...formData, pdfUrl: url })}
              accept="application/pdf"
              resourceType="raw"
            />
          </div>

          <div className="flex gap-3">
            <button type="submit" className="btn-primary">{editingId ? "Update" : "Add"} News</button>
            <button type="button" onClick={resetForm} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Cancel</button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item._id} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-sm transition-shadow group">
            {item.image && <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover shrink-0 border border-gray-200" />}
            <div className="flex-1 min-w-0">
              <p className="text-xs text-accent font-bold uppercase tracking-wide">{item.date}</p>
              <h4 className="font-semibold text-primary text-sm mt-0.5">{item.title}</h4>
              <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{item.desc}</p>
              {item.pdfUrl && (
                <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline mt-1 inline-flex items-center gap-1">
                  📄 View PDF
                </a>
              )}
            </div>
            <div className="flex gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <button type="button" onClick={() => handleEdit(item)} aria-label={`Edit ${item.title}`} className="p-1.5 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50">
                <FiEdit2 size={13} />
              </button>
              <button type="button" onClick={() => handleDelete(item._id)} aria-label={`Delete ${item.title}`} className="p-1.5 text-red-600 border border-red-200 rounded-lg hover:bg-red-50">
                <FiTrash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-16 text-gray-300">
          <FiFileText size={48} className="mx-auto mb-3" />
          <p className="text-sm">No news yet. Add your first news item!</p>
        </div>
      )}
    </div>
  );
}
