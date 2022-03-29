import { useEffect, useState } from 'react'
import Post from './Post'
import SearchBar from './SearchBar'
import axios from 'axios'

const Forum = () => {
  const [posts, setPosts] = useState([])

  useEffect(async () => {
    const result = await getPosts()
    setPosts(result.data)
  }, [])

  const getPosts = () => {
    return axios.get('http://localhost:3001/posts')
  }

  const onSearch = async (searchTerms) => {
    const result = await axios.get('http://localhost:3001/getposts', {
      params: { searchTerms }
    })
    setPosts(result.data)
  }

  return (
    <div className="forum">
      <SearchBar onSubmit={onSearch} />
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </div>
  )
}

export default Forum
