import { Link, Route } from "react-router-dom";
import { Button } from 'react-bootstrap';
import BlogViewer from "./BlogViewer";
import { useState } from "react";


function BlogBox({ title, address, author }) {

    const [showBlog, setshowBlog] = useState(false)

    const handleIndividualBlog = () => {
        setshowBlog(!showBlog);
    }

    return (

        <center>
            <Button variant="light" id="Button" onClick={handleIndividualBlog} >
                <Link className="bloglinkname1" to={'/blogs/readblogs/' + address}>
                    <span>{title}</span>
                    <br />
                </Link>
                <Link className="bloglinkname2" to={'/blogs/readblogs/' + address}>
                    <span className="author">-: by {author}</span>
                </Link>
            </Button>



            <Route path={`/blogs/readblogs/${address}`} >
                {showBlog && <BlogViewer id={address} />}
            </Route>

            <br />
        </center>

    )
}

export default BlogBox
