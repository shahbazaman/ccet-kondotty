"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiPlus, FiEdit2, FiTrash2, FiBriefcase, FiToggleLeft, FiToggleRight } from "react-icons/fi";

type Job = {
  _id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  qualifications: string;
  experience: string;
  salary: string;
  deadline: string;
  isActive: boolean;
  postedDate: string;
};

export default function JobsManager() {
  const [items, setItems] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    type: "Full-time",
    location: "Kondotty, Kerala",
    description: "",
    requirements: "",
    responsibilities: "",
    qualifications: "",
    experience: "",
    salary: "",
    deadline: "",
    isActive: true,
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      toast.error("Failed to fetch jobs");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = editingId ? "PUT" : "POST";
      
      const body = {
        ...formData,
        requirements: formData.requirements.split("\n").filter(r => r.trim()),
        responsibilities: formData.responsibilities.split("\n").filter(r => r.trim()),
        ...(editingId && { _id: editingId }),
      };

      const res = await fetch("/api/jobs", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        toast.success(editingId ? "Job updated!" : "Job posted!");
        resetForm();
        fetchJobs();
      }
    } catch (error) {
      toast.error("Failed to save job");
    }
  };

  const handleEdit = (item: Job) => {
    setFormData({
      title: item.title,
      department: item.department,
      type: item.type,
      location: item.location,
      description: item.description,
      requirements: item.requirements.join("\n"),
      responsibilities: item.responsibilities.join("\n"),
      qualifications: item.qualifications,
      experience: item.experience,
      salary: item.salary,
      deadline: item.deadline,
      isActive: item.isActive,
    });
    setEditingId(item._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this job posting?")) return;

    try {
      const res = await fetch(`/api/jobs?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Job deleted");
        fetchJobs();
      }
    } catch (error) {
      toast.error("Failed to delete job");
    }
  };

  const toggleActive = async (job: Job) => {
    try {
      const res = await fetch("/api/jobs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...job, isActive: !job.isActive }),
      });

      if (res.ok) {
        toast.success(`Job ${!job.isActive ? "activated" : "deactivated"}`);
        fetchJobs();
      }
    } catch (error) {
      toast.error("Failed to update job status");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      department: "",
      type: "Full-time",
      location: "Kondotty, Kerala",
      description: "",
      requirements: "",
      responsibilities: "",
      qualifications: "",
      experience: "",
      salary: "",
      deadline: "",
      isActive: true,
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) return <div className="text-center py-12">Loading jobs...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">Career Job Postings</h2>
          <p className="text-sm text-gray-500">Manage job vacancies shown on careers page</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
          <FiPlus /> Post New Job
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-primary mb-4">{editingId ? "Edit Job" : "Post New Job"}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Assistant Professor in AI"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department *</label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              >
                <option>Artificial Intelligence</option>
                <option>Nutrition & Dietetics</option>
                <option>Hotel Management</option>
                <option>Administration</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Type *</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Visiting Faculty</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Qualifications *</label>
              <input
                type="text"
                required
                value={formData.qualifications}
                onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                placeholder="e.g., PhD in Computer Science"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience Required</label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="e.g., 3-5 years"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                placeholder="e.g., ₹40,000 - ₹60,000/month"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Description *</label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief overview of the position..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Key Responsibilities * (one per line)</label>
              <textarea
                required
                rows={4}
                value={formData.responsibilities}
                onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                placeholder="Teach undergraduate courses in AI&#10;Develop curriculum and course materials&#10;Supervise student projects"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none resize-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Requirements * (one per line)</label>
              <textarea
                required
                rows={4}
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                placeholder="PhD in relevant field&#10;Strong publication record&#10;Excellent communication skills"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none resize-none"
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                Active (show on careers page)
              </label>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button type="submit" className="btn-primary">{editingId ? "Update" : "Post"} Job</button>
            <button type="button" onClick={resetForm} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Jobs List */}
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item._id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-heading font-bold text-primary text-lg">{item.title}</h4>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${item.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
                    {item.isActive ? "ACTIVE" : "INACTIVE"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <span>{item.department}</span>
                  <span>•</span>
                  <span>{item.type}</span>
                  <span>•</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => toggleActive(item)}
                  className={`p-2 rounded-lg transition-colors ${item.isActive ? "text-gray-600 hover:bg-gray-100" : "text-green-600 hover:bg-green-50"}`}
                  title={item.isActive ? "Deactivate" : "Activate"}
                >
                  {item.isActive ? <FiToggleRight size={20} /> : <FiToggleLeft size={20} />}
                </button>
                <button
                  onClick={() => handleEdit(item)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Edit"
                >
                  <FiEdit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">{item.qualifications}</span>
              <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full">{item.experience}</span>
              {item.salary && <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full">{item.salary}</span>}
              {item.deadline && (
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full">
                  Deadline: {new Date(item.deadline).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <FiBriefcase size={48} className="mx-auto mb-3 opacity-30" />
          <p>No job postings yet. Post your first job!</p>
        </div>
      )}
    </div>
  );
}