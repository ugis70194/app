export async function jsonLoader(fetchPath: string){
  const res = await fetch(fetchPath);
  return res.json();
}

export function typeBackgroundColor(type: string){
  switch(type){
    case 'イラスト': return 'red'
    case '小説': return 'green'
  }
}

/*
export async function jsonLoaderDynamic(filePath: string){
  const res = await import(filePath, {assert: {type: "json"}})
                    .then((res) => res.default)
  return res
}
*/