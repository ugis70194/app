import React from 'react'
import { Grid } from '@kuma-ui/core'

export default function ThumbnailTable({children}:{children: React.ReactNode}){
  return(
    <Grid gridTemplateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={4} maxWidth={'100vw'}>
      {children}
    </Grid>
  )
}