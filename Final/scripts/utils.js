export function select(selector) {
  return document.querySelector(selector);
}

export function selectAll(selector) {
  return document.querySelectorAll(selector);
}

export async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("JSON failed");
    return await res.json();
  } catch (err) {
    console.error("JSON error: ", err);
    return null;
  }
}
