import { useState } from "react";
import { useDispatch } from "react-redux";

import PlatformSelector from "./PlatformSelector";

import { addPost } from "../features/posts/postsSlice";

const PostForm = () => {

    const dispatch = useDispatch();

    const [content,setContent]=useState("");

    const [selected,setSelected]=useState([]);

    const submit=()=>{

        if(content==="") return;

        dispatch(addPost(content,selected));

        setContent("");
        setSelected([]);

    }

    return(

        <div className="card">

            <textarea

            value={content}

            onChange={(e)=>setContent(e.target.value)}

            placeholder="Write post"

            />

            <PlatformSelector

            selected={selected}

            setSelected={setSelected}

            />

            <button onClick={submit}>

                Publish

            </button>

        </div>

    )

}

export default PostForm;
