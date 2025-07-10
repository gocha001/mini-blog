const API = "https://jsonplaceholder.typicode.com";

export async function getPosts() {
  const res = await fetch(`${API}/posts`, { cache: "force-cache" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${API}/posts/${id}`, { cache: "force-cache" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}
