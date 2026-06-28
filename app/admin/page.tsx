"use client";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const handleUpload = async () => {
  if (!title || !category || !image) {
    alert("Please fill all fields");
    return;
  }

  const fileName = `${Date.now()}-${image.name}`;

  // Upload image
  const { error: uploadError } = await supabase.storage
    .from("projects")
    .upload(fileName, image);

  if (uploadError) {
    alert(uploadError.message);
    return;
  }

  // Get public URL
  const { data } = supabase.storage
    .from("projects")
    .getPublicUrl(fileName);

  const imageUrl = data.publicUrl;

  // Save in database
  // Save in database
const { data: insertedData, error } = await supabase
  .from("projects")
  .insert([
    {
      title,
      category,
      image: imageUrl,
    },
  ])
  .select();

console.log("Inserted Data:", insertedData);
console.log("Insert Error:", error);

if (error) {
  alert(error.message);
  return;
}

  alert("Project Uploaded Successfully ✅");

  setTitle("");
  setCategory("");
  setImage(null);
};

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      <div className="w-full max-w-lg bg-zinc-900 p-8 rounded-xl border border-zinc-700">

        <h1 className="text-3xl font-bold mb-8">
          Upload Project
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 rounded bg-zinc-800 border border-zinc-700"
          />

         <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white"
>
  <option value="">Select Category</option>
  <option value="Residential">Residential</option>
  <option value="Commercial">Commercial</option>
  <option value="Hospitality">Hospitality</option>
  <option value="Luxury Villas">Luxury Villas</option>
</select>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files?.[0] || null)
            }
            className="w-full"
          />

         <button
  onClick={handleUpload}
  className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-300 transition"
>
  Save Project
</button>
        </div>

      </div>
    </div>
  );
}