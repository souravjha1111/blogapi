import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://jsonapiblog.herokuapp.com/');
    return (
        <div className="home">
            {error && <div>{error} </div>}
            {isPending && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;