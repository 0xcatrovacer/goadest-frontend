import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { config } from "../../config";

const BlogCreator = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, content };

        axios({
            method: "POST",
            url: `${config.backendUrl}/post`,
            headers: {
                "Content-Type": "application/json",
            },
            data: blog,
        }).then(() => {
            setTitle("");
            setContent("");
            setAuthor("");
            history.push("/blogs");
        });
    };

    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        placeholder="Blog Title"
                    />
                    <br />

                    <input
                        id="author"
                        type="text"
                        value={author}
                        onChange={(e) => {
                            setAuthor(e.target.value);
                        }}
                        placeholder="Blog author"
                    />

                    <br />

                    <input id="post" type="submit" value="POST" />
                    <br />
                    <br />
                    <textarea
                        id="contentCreate"
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                        rows="20"
                        cols="200"
                        placeholder="Blog Content"
                    >
                    </textarea>
                </form>
            </center>
        </div>
    );
};

export default BlogCreator;
