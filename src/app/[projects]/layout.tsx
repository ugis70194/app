import Banner from './_banner'
import Menu from './menu/_menu'
import { Box, Heading, Text, css} from '@kuma-ui/core'
import Link from 'next/link'

export default function ProjectsLayout({
    children, 
    params
}:{
  children: React.ReactNode,
  params : {projects: string}
}) {
  return (
    <>
      <Banner>
        <Link href="/" className={css `text-decoration:none; height:100%; font-weight: bold; margin-right: auto;`}>抱華郷</Link>
        <Menu projectName={params.projects}/>
      </Banner>
      <main>
        {children}
      </main>
    </>
  )
}
