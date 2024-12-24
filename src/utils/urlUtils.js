// Utility functions for handling URLs and encoding

/**
 * Safely encode URL parameters to handle special characters and spaces
 * @param {string} param - The parameter to encode
 * @returns {string} The encoded parameter
 */
export function encodeUrlParam(param) {
  if (!param) return '';
  
  // First trim any whitespace
  const trimmed = param.trim();
  
  // Encode the parameter, ensuring special characters are properly handled
  return encodeURIComponent(trimmed);
}

/**
 * Construct a URL for the storage bucket
 * @param {string} path - The file path within the bucket
 * @returns {string} The complete storage URL
 */
export function getStorageUrl(path) {
  if (!path) return '';
  
  const baseUrl = import.meta.env.VITE_SUPABASE_URL;
  const encodedPath = encodeUrlParam(path);
  
  return `${baseUrl}/storage/v1/object/public/solution-files/${encodedPath}`;
}