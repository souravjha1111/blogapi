import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            You seems to have missguided please go back to home page.
            <Link to='/'> Go home</Link>
        </div>
    );
}

export default NotFound;