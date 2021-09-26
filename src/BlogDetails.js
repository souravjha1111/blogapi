import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom'

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('https://jsonapiblog.herokuapp.com/' + id);
    const history = useHistory();


    const handleDelete = (e) => {
        fetch('https://jsonapiblog.herokuapp.com/delete/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <button onClick={handleDelete}> Delete</button>

        </div>
    );
}

export default BlogDetails;