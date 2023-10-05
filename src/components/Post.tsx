import { PostDTO } from '../types/dto'
import classes from './Post.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [showButton, setShowButton] = useState<boolean>(false)

  const handleClick = () => {
    setShowButton(!showButton)
  }

  return (
    <div className={classes.post}>
      <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
      </Link>
      {showButton && <p>more post information...</p>}
      <button onClick={handleClick}>{showButton ? 'Show less' : 'Show more'}</button>
    </div>
  )
}
export default Post
