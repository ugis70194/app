import { jsonLoader } from '../../_utils/functions'
import { URL_PREFIX } from '../../_utils/variables'
import ThumbnailTable from './_thumbnail/_thumbnailTable'
import Thumbnail from './_thumbnail/_thumbnail'

export default async function Home({params}: {params : {projects: string}}){
  const productTitles: {data: string[]} = await jsonLoader(`${URL_PREFIX}/api/${params.projects}/general/titles.json`);

  return (
    <ThumbnailTable>
      {
        (productTitles.data).map(
          (title) => <Thumbnail projectName={params.projects} title={title} key={title}/>
        )
      }
    </ThumbnailTable>
  )
}