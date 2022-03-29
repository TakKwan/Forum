const Post = ({ content, date }) => {
  return (
    <div className="post">
      <p>{content}</p>
      <p>{date}</p>
    </div>
  )
}

export default Post
