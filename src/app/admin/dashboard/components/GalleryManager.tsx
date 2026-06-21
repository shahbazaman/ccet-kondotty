"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiPlus, FiTrash2, FiImage } from "react-icons/fi";
import CloudinaryUpload from "../../../../components/ui/CloudinaryUpload";

type GalleryItem = {
  _id: string;
  url: string;
  title: string;
  category: string;
  order: number;
};

const emptyForm = { url: "", title: "", category: "Campus", order: 0 };

export default function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  // Extracted fetch function to prevent dependency array issues
  const fetchGallery = async () => {
    try {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      // Safely ensure data is an array before setting state
      if (Array.isArray(data)) {
        setItems(data);
      } else {
        setItems([]);
      }
    } catch { 
      toast.error("Failed to fetch gallery"); 
    } finally { 
      setLoading(false); 
    }
  };

  useEffect(() => { 
    fetchGallery(); 
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.url) { 
      toast.error("Please upload an image first"); 
      return; 
    }
    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Image added!");
        setFormData(emptyForm);
        setShowForm(false);
        fetchGallery();
      } else {
        toast.error("Failed to add image");
      }
    } catch { 
      toast.error("Failed to add image"); 
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this image?")) return;
    try {
      const res = await fetch(`/api/gallery?id=${id}`, { method: "DELETE" });
      if (res.ok) { 
        toast.success("Deleted"); 
        fetchGallery(); 
      } else {
        toast.error("Failed to delete");
      }
    } catch { 
      toast.error("Failed to delete"); 
    }
  };

  if (loading) return <div className="text-center py-12 text-gray-400">Loading gallery...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">Gallery Management</h2>
          <p className="text-sm text-gray-500">Upload photos to Cloudinary and manage the gallery</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
          <FiPlus /> Add Image
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-primary mb-4">Add Gallery Image</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="gallery-title" className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input id="gallery-title" required value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="AI Lab – Students in action"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none" />
            </div>
            <div>
              <label htmlFor="gallery-category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select id="gallery-category" value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none">
                <option>Campus</option>
                <option>AI Lab</option>
                <option>Nutrition Lab</option>
                <option>Kitchen Lab</option>
                <option>Events</option>
                <option>Sports</option>
                <option>Cultural</option>
                <option>Graduation</option>
              </select>
            </div>
            <div>
              <label htmlFor="gallery-order" className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
              <input 
                id="gallery-order"
                type="number" 
                placeholder="0"
                // Display empty string in UI instead of a frozen zero when empty
                value={Number.isNaN(formData.order) ? "" : formData.order}
                onChange={(e) => {
                  const val = e.target.value;
                  const parsed = parseInt(val, 10);
                  setFormData({ ...formData, order: Number.isNaN(parsed) ? 0 : parsed });
                }}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none" 
              />
            </div>
          </div>
          <div className="mb-4">
            <CloudinaryUpload
              label="Gallery Photo"
              value={formData.url}
              onChange={(url: string) => setFormData({ ...formData, url })}
              accept="image/*"
            />
          </div>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary">Add to Gallery</button>
            <button type="button" onClick={() => { setShowForm(false); setFormData(emptyForm); }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Cancel</button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item._id} className="relative group rounded-xl overflow-hidden border border-gray-200 aspect-square bg-gray-100">
            <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-2">
              <p className="text-white text-xs font-medium text-center line-clamp-2">{item.title}</p>
              <span className="text-xs text-gray-300 bg-black/40 px-2 py-0.5 rounded-full">{item.category}</span>
              <button onClick={() => handleDelete(item._id)}
                className="mt-1 bg-red-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-red-600">
                <FiTrash2 className="inline mr-1" size={11} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-16 text-gray-300">
          <FiImage size={48} className="mx-auto mb-3" />
          <p className="text-sm">No gallery images yet. Add your first photo!</p>
        </div>
      )}
    </div>
  );
}