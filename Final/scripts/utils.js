export async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Failed to fetch JSON");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
