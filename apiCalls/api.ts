import axios from "axios";

const API_URL = "http://localhost:8000";

export const sendQuestion = async (question) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      `${API_URL}/ask`,
      { question },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data.response;
  } catch (err) {
    console.error("Error sending question:", err);
    return null;
  }
};

export const fetchHistory = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_URL}/history`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching history:", err);
    return [];
  }
};


export const registerUser = async (email, password) => {
    const form = new URLSearchParams();
    form.append("username", email);
    form.append("password", password);
  
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
  
    if (!res.ok) throw new Error("Registration failed");
    return await res.json();
};

  
export const loginUser = async (email, password) => {
    const form = new URLSearchParams();
    form.append("username", email);
    form.append("password", password);
  
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
  
    if (!res.ok) throw new Error("Login failed");
    return await res.json();
};