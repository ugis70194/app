import Thumbnail from './_thumbnail'
import { Titles } from './_utils/variables';
import { Grid } from '@kuma-ui/core'

export default function ThumbnailTable() {
  return(
    <Grid gridTemplateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={4}>
      {
        Titles.map((title) => <Thumbnail title={title} key={title}/>)
      }
    </Grid>
  )
}
