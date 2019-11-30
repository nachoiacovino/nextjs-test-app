import axios from 'axios'

const Post = ({ id, comments }) => (
    <div>
        <h1>This is post {id}</h1>
        {comments.map(({ id, email, body }) => 
            <li key={id}>
                Email: {email}<br/>
                Body: {body}
            </li>    
        )}
    </div>
)

Post.getInitialProps = async ({ query }) => {
    const res = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`)
    const comments = res.data
    return { ...query, comments }
}

export default Post