import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import IndexHeader from '@/components/IndexHeader'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  // const { theme, setTheme, resolvedTheme } = useTheme()
  //
  // useEffect(() => {
  //   // Set the theme to 'dark' as soon as the component mounts
  //   setTheme('dark')
  // }, []) // Empty dependency array ensures this effect runs only once when the component mounts
  return (
    <>
      <IndexHeader />
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          {/*<h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">*/}
          {/*  Hey there. I'm Tyler and I like solving problems with programming.*/}
          {/*</h1>*/}
          {/*<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">*/}
          {/*  {siteMetadata.description}*/}
          {/*</p>*/}
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
