export function capitalizeFirst(text) {
  if (!text || typeof text !== "string") return "";
  const trimmed = text.trim();
  if (trimmed.length === 0) return "";
  return trimmed[0].toUpperCase() + trimmed.slice(1);
}
