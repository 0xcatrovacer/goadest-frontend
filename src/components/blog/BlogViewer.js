import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../config";

const BlogViewer = ({ id }) => {
    const [blog, setBlog] = useState(null);

    const callFn = () => {
        axios
            .get(`${config.backendUrl}/post/${id}`)
            .then((res) => {
                setBlog(res.data);
                console.log(res.data);
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
            <center>
                <hr className="ruler" />
                <div id="content" placeholder="Blog Content">{blog && blog.content}</div>
                <hr className="ruler" />
            </center>
        </div>
    );
};

export default BlogViewer;
