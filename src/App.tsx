import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'
import Post from './components/Post'
import { CreatePostDTO, PostDTO } from './components/types/dto'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPending, setIsPending] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')

        setPosts(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setIsPending(true)

    if (!posts) return

    const newPost: CreatePostDTO = { title: newTitle, body: newBody, userId: Math.floor(Math.random() * 1000) }

    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
    setIsPending(false)

    /*     const currentPosts = [...posts]

    currentPosts.push({
      id: Math.floor(Math.random() * 1000),
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    })

    setPosts(currentPosts) */

    setNewTitle('')
    setNewBody('')
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <Navbar />
      <Greeting name="Job" isLoggedIn={false} />
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Pending...' : 'Submit'}
        </button>
      </form>
      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default App
