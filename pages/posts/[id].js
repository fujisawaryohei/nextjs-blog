import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }){
  return (
    <Layout>
      { postData.title }
      <br />
      { postData.id }
      <br />
      { postData.body }
    </Layout>
  )
}

// handling params argument to Post component
export function getStaticProps({ params }){
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

// handling argument of params object getStaticProps
export async function getStaticPaths() {
  // type paths = {
  //   params: {
  //     id: string | number
  //   }[]
  // }
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}