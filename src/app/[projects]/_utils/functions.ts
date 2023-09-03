export async function jsonLoader(fetchPath: string){
  const res = await fetch(fetchPath);
  return res.json();
}

/*
export async function jsonLoaderDynamic(filePath: string){
  const res = await import(filePath, {assert: {type: "json"}})
                    .then((res) => res.default)
  return res
}
*/