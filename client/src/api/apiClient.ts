// import { join } from "path";
// import { json } from "stream/consumers";

const BASE_URL = "http://localhost:5000/api";

export async function apiGet(path: string) {
  const res = await fetch(`${BASE_URL}${path}`);
  return res.json();
}

export async function apiGetOne(path: string) {
  const res = await fetch(`${BASE_URL}${path}`);
    return res.json();
  
}

export async function apiPost(path: string, body: any) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

export async function apiUpdate(path: string, body: any) {
    const res = await fetch(`${BASE_URL}/${path}`,{
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
    });
    return res.json();  
}

export async function apiDelete(path: string) {
  const res = await fetch(`${BASE_URL}/${path}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
  
}
