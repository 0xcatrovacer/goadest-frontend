import BlogBox from "./BlogBox";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogViewer from "./BlogViewer";
import BlogCreator from "./BlogCreator";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { config } from "../../config";

const Blog = () => {
    const [blogTiles, setBlogs] = useState(null);

    const callFn = () => {
        axios
            .get(`${config.backendUrl}/posts`)
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((e) => {
                console.log(e.message);
            });
    };

    useEffect(() => {
        callFn();
    }, []);

    return (
        <div>
            <Router>
                <Route path="/blogs/createblog" component={BlogCreator} />

                <div>
                    <hr className="rule" />
                    <center>
                        <Button variant="dark">
                            <Link className="linkname" to="/blogs/createblog">
                                <span>Create a Blog </span>
                            </Link>
                        </Button>
                    </center>
                    {blogTiles &&
                        blogTiles.map((blog) => {
                            return (
                                <div key={blog.id}>
                                    <BlogBox title={blog.title} author={blog.author} address={blog._id} />
                                </div>
                            );
                        })}
                </div>
            </Router>
        </div>
    );
};

export default Blog;
