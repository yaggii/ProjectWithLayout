export function normalizeCountryName(country) {
  if (!country) return '';
  
  return country
    .toLowerCase()
    .replace(/[,.-]/g, '') // Remove punctuation
    .replace(/\s+/g, ' ')  // Normalize spaces
    .trim();
}