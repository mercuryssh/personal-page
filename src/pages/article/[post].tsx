export async function getStaticPaths() {
  const post = await fetch('http://127.0.0.1:8000/post/api/post/')
  const path = await post.json()

  return {
    paths: path.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}


export default function Article() {
  return 
    <div>
      work
    </div>
  )
}