import { jsonLoader } from './_utils/functions';
import { URL_PREFIX } from './_utils/variables';
import Thumbnail from './_thumbnail'
import ThumbnailTable from './_thumbnailTable'

const projectName = 'test';

export default async function Home() {
  const titles: {data: string[]} = await jsonLoader(`${URL_PREFIX}/${projectName}/general/titles.json`);

  return (
    <ThumbnailTable>
      {
        (titles.data).map((title) => <Thumbnail projectName={projectName} title={title} key={title}/>)
      }
    </ThumbnailTable>
  );
}