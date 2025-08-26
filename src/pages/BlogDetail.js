import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function BlogDetail() {
    let params = useParams();
    let url = `http://localhost:3001/blogs/${params.id}`;
    let { data:blog, loading, error } = useFetch(url);

    return (
        <div>
            {error && <div> {error} </div>}
            {loading && <div> {loading} </div>}
            {blog && (
                <div>
                    <h1> {blog.title} </h1>
                    <p>Written By - {blog.author} </p>
                    <p> {blog.content} </p>
               </div>
            )}
        </div>
    );
}

export default BlogDetail;