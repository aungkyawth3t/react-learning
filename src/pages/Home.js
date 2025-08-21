import useFetch from "../hooks/useFetch";

function Home() {

  let url = 'http://localhost:3001/blogs';
  let {data : blogs, loading, error} = useFetch(url);
  return (
    <div>
      {error && <div> {error} </div>}
      {loading && <div> loading... </div>}
      {blogs && blogs.map(blog => (
        <div key={blog.id}>
          <h3> {blog.title} </h3>
          <p> Written by : {blog.author} </p>
          <p> {blog.content} </p>
        </div>
      ))}
    </div>
  );
}

export default Home;
