"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiSave, FiPlus, FiTrash2 } from "react-icons/fi";

// Define an interface for structured news items
interface NewsItem {
  id: string;
  text: string;
}

export default function FlashNewsManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [items, setItems] = useState<NewsItem[]>([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetch("/api/flash-news")
      .then(res => res.json())
      .then(data => {
        // Map simple string strings from API into objects with safe unique keys
        if (Array.isArray(data.items)) {
          const structuredItems = data.items.map((text: string) => ({
            id: crypto.randomUUID(), 
            text
          }));
          setItems(structuredItems);
        }
      })
      .catch(() => toast.error("Failed to load flash news"))
      .finally(() => setLoading(false));
  }, []);

  const addItem = () => {
    const trimmed = newItem.trim();
    if (!trimmed) return;
    setItems(prev => [...prev, { id: crypto.randomUUID(), text: trimmed }]);
    setNewItem("");
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItem = (id: string, value: string) => {
    setItems(prev => prev.map(item => (item.id === id ? { ...item, text: value } : item)));
  };

  const handleSave = async () => {
    setSaving(true);
    // Extract strings back out to match your expected API payload structure
    const payload = items.map(item => item.text);

    try {
      const res = await fetch("/api/flash-news", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: payload }),
      });
      if (res.ok) toast.success("Flash news updated!");
      else toast.error("Failed to save");
    } catch {
      toast.error("Failed to save");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-heading text-2xl font-bold text-primary">Flash News</h2>
        <p className="text-sm text-gray-500">Manage the scrolling news ticker shown at the top of every page.</p>
      </div>

      {/* Add new item */}
      <div className="flex gap-2 mb-6">
        <label htmlFor="new-flash-item" className="sr-only">New flash news item</label>
        <input
          id="new-flash-item"
          title="New flash news item"
          type="text"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          onKeyDown={e => e.key === "Enter" && addItem()}
          placeholder="Add flash news item"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
        />
        <button
          onClick={addItem}
          className="btn-primary flex items-center gap-1 text-sm px-4"
        >
          <FiPlus /> Add
        </button>
      </div>

      {/* Items list */}
      <div className="space-y-3 mb-6">
        {items.length === 0 && (
          <p className="text-gray-400 text-sm text-center py-6 border border-dashed border-gray-200 rounded-xl">
            No flash news items yet. Add one above.
          </p>
        )}
        {items.map((item, i) => (
          <div key={item.id} className="flex gap-2 items-center">
            <span className="text-xs text-gray-400 w-5 shrink-0">{i + 1}.</span>
            <label htmlFor={`flash-item-${item.id}`} className="sr-only">Flash news item {i + 1}</label>
            <input
              id={`flash-item-${item.id}`}
              title={`Flash news item ${i + 1}`}
              type="text"
              value={item.text}
              onChange={e => updateItem(item.id, e.target.value)}
              placeholder={`Flash news item ${i + 1}`}
              className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:outline-none"
            />
            <button
              onClick={() => removeItem(item.id)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              type="button"
              title={`Delete item ${i + 1}`}
              aria-label={`Delete flash news item ${i + 1}`}
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="btn-primary flex items-center gap-2 disabled:opacity-50"
      >
        <FiSave /> {saving ? "Saving..." : "Save Flash News"}
      </button>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> Items scroll one by one separated by " | " on the website.
        </p>
      </div>
    </div>
  );
}