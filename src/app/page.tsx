import { jsonLoader } from './_utils/functions';
import { URL_PREFIX } from './_utils/variables';
import { generalData } from './_interfaces/interfaces';
import Thumbnail from './_thumbnail'
import ThumbnailTable from './_thumbnailTable'

const projectName = 'test';

export default async function Home() {
  const generalData: generalData = await jsonLoader(`${URL_PREFIX}/${projectName}/generalData.json`);

  return (
    <ThumbnailTable>
      {
        (generalData.titles).map((title) => <Thumbnail projectName={projectName} title={title} key={title}/>)
      }
    </ThumbnailTable>
  );
}