export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Returns the proper asset path prefixed with the basePath if running on a subpath (e.g. GitHub Pages).
 * Remote URLs (http://, https://, data:) are returned untouched.
 */
export function getAssetPath(path?: string | null): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('//')
  ) {
    return path;
  }

  // Ensure leading slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // If path is already prefixed with BASE_PATH, avoid duplicate prefix
  if (BASE_PATH && cleanPath.startsWith(BASE_PATH)) {
    return cleanPath;
  }

  return `${BASE_PATH}${cleanPath}`;
}
