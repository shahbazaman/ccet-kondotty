"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiPlus, FiEdit2, FiTrash2, FiUsers } from "react-icons/fi";
import CloudinaryUpload from "../../../../components/ui/CloudinaryUpload";

type Faculty = {
  _id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  expertise: string;
  email: string;
  phone: string;
  photo: string;
  order: number;
};

const emptyForm = {
  name: "", designation: "", department: "", qualification: "",
  experience: "", expertise: "", email: "", phone: "", photo: "", order: 0,
};

export default function FacultyManager() {
  const [items, setItems] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => { fetchFaculty(); }, []);

  const fetchFaculty = async () => {
    try {
      const res = await fetch("/api/faculty");
      const data = await res.json();
      if (Array.isArray(data)) setItems(data);
    } catch { toast.error("Failed to fetch faculty"); }
    finally { setLoading(false); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? "PUT" : "POST";
      const body = editingId ? { _id: editingId, ...formData } : formData;
      const res = await fetch("/api/faculty", {
        method, headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        toast.success(editingId ? "Faculty updated!" : "Faculty added!");
        resetForm(); fetchFaculty();
      }
    } catch { toast.error("Failed to save faculty"); }
  };

  const handleEdit = (item: Faculty) => {
    setFormData({
      name: item.name, designation: item.designation, department: item.department,
      qualification: item.qualification, experience: item.experience || "",
      expertise: item.expertise || "", email: item.email, phone: item.phone,
      photo: item.photo, order: item.order,
    });
    setEditingId(item._id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this faculty member?")) return;
    try {
      const res = await fetch(`/api/faculty?id=${id}`, { method: "DELETE" });
      if (res.ok) { toast.success("Deleted"); fetchFaculty(); }
    } catch { toast.error("Failed to delete"); }
  };

  const resetForm = () => { setFormData(emptyForm); setEditingId(null); setShowForm(false); };

  const field = (label: string, key: keyof typeof emptyForm, placeholder = "", required = false, type = "text") => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}{required && " *"}</label>
      <input
        type={type} required={required} value={formData[key] as string}
        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
      />
    </div>
  );

  if (loading) return <div className="text-center py-12 text-gray-400">Loading faculty...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">Faculty Management</h2>
          <p className="text-sm text-gray-500">Manage faculty profiles — photos upload to Cloudinary</p>
        </div>
        <button onClick={() => { resetForm(); setShowForm(!showForm); }} className="btn-primary flex items-center gap-2">
          <FiPlus /> Add Faculty
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-primary mb-4">{editingId ? "Edit Faculty" : "Add New Faculty"}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {field("Full Name", "name", "Dr. John Doe", true)}
            {field("Designation", "designation", "Assistant Professor & Head", true)}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
              <select
                id="department"
                aria-label="Department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              >
                <option value="">Select Department</option>
                <option>Department of English</option>
                <option>Department of Artificial Intelligence</option>
                <option>Department of Nutrition & Dietetics</option>
                <option>Department of Hotel Management & Catering Science</option>
                <option>Library</option>
                <option>Administration</option>
              </select>
            </div>
            {field("Qualification", "qualification", "Ph.D, M.Sc, NET", true)}
            {field("Experience", "experience", "10+ Years of teaching experience")}
            {field("Expertise / Areas of Interest", "expertise", "AI, Machine Learning, Research")}
            {field("Email", "email", "faculty@ccet.edu.in", false, "email")}
            {field("Phone", "phone", "+91 XXXXX XXXXX")}
            {field("Display Order", "order", "1", false, "number")}
          </div>

          {/* Photo upload */}
          <div className="mb-4">
            <CloudinaryUpload
              label="Faculty Photo"
              value={formData.photo}
              onChange={(url: string) => setFormData({ ...formData, photo: url })}
              accept="image/*"
            />
          </div>

          <div className="flex gap-3">
            <button type="submit" className="btn-primary">{editingId ? "Update" : "Add"} Faculty</button>
            <button type="button" onClick={resetForm} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">Cancel</button>
          </div>
        </form>
      )}

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <div key={item._id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden border border-gray-200">
                {item.photo ? (
                  <img src={item.photo} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <FiUsers size={24} className="text-gray-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-primary text-sm truncate">{item.name}</h4>
                <p className="text-xs text-gray-600">{item.designation}</p>
                <p className="text-xs text-accent font-medium mt-0.5">{item.department}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-1 line-clamp-2">{item.qualification}</p>
            {item.experience && <p className="text-xs text-gray-400 line-clamp-1">{item.experience}</p>}
            <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleEdit(item)} className="flex-1 py-1.5 text-xs text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50">
                <FiEdit2 className="inline mr-1" size={11} /> Edit
              </button>
              <button onClick={() => handleDelete(item._id)} className="flex-1 py-1.5 text-xs text-red-600 border border-red-300 rounded-lg hover:bg-red-50">
                <FiTrash2 className="inline mr-1" size={11} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center py-16 text-gray-300">
          <FiUsers size={48} className="mx-auto mb-3" />
          <p className="text-sm">No faculty yet. Add your first faculty member!</p>
        </div>
      )}
    </div>
  );
}
