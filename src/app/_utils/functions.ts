export async function jsonLoader(fetchPath: string){
  const res = await fetch(fetchPath);
  return res.json();
}