import React, { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Index = ({ posts }) => {

    return (
        <>
            <h1>Index page!</h1>
            {posts.map(post => 
                <li key={post.id}>
                    <Link href={`/post?id=${post.id}`} as={`post/${post.id}`}>
                        <a>{post.title}</a>
                    </Link>
                    
                </li>
            )}
        </>
    )
}

Index.getInitialProps = async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/posts')
    const posts = res.data
    return { posts }
}

export default Index