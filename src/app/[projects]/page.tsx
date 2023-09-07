import { Button } from '@kuma-ui/core'
import Link from 'next/link'

export default async function Home({params}: {params : {projects: string}}) {
  const projectName = params.projects;

  return (
    <Link href={`/${projectName}/products/`}>
      <Button>作品を見る</Button>
    </Link>
  );
}