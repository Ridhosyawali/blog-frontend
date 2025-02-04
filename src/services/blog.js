import axios from "axios";
const API = process.env.NEXT_PUBLIC_API;

export async function getBlogs() {
  try {
    const res = await axios(`${API}/posts`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch post :", error);
  }
}

export async function getImages() {
  try {
    const res = await axios(`${API}/photos`);
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch photos :", error);
  }
}
