export function getUri(path: string) {
  const uri = `http:${path}`;
  if (path) {
    return uri
  }
}