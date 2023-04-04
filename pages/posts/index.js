import React from 'react'
import Link from 'next/link'

function postList({posts}) {
  return (
    <>
        <h2>List of Posts</h2>
        {posts.map(post =>{
            return(
                <div key={post.id}>
                    <Link href={`/posts/post.id`} passHref>
                    <h2>{post.id} {post.title}</h2>
                    <hr />
                    </Link>
                </div>
            )
        })}
    </>
  )
}

export default postList

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return{
        props:{
            posts: data
        }
    }
}