import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function Posts() {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState(""); // 🔹 message state

  // GET posts
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
      return res.data;
    },
  });

  // POST new post
  const addPostMutation = useMutation({
    mutationFn: async (newPost: { title: string }) => {
      const res = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setMessage("✅ Post added successfully!");
    },
    onError: () => {
      setMessage("❌ Failed to add post.");
    },
  });

  // DELETE post
  const deletePostMutation = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      setMessage("🗑️ Post deleted successfully!");
    },
    onError: () => {
      setMessage("❌ Failed to delete post.");
    },
  });

  // handle form submit
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addPostMutation.mutate({ title });
      setTitle("");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error loading posts</p>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">📌 Posts (TanStack Query)</h1>

      {/* ✅ Success/Error Message */}
      {message && (
        <div className="p-2 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      {/* List */}
      <div className="space-y-2">
        {data.map((post: any) => (
          <div
            key={post.id}
            className="border p-2 rounded flex justify-between items-center"
          >
            <span>{post.title}</span>
            <button
              onClick={() => deletePostMutation.mutate(post.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
