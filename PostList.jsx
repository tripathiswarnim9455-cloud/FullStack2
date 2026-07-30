import { useDispatch, useSelector } from "react-redux";

import {
    deletePost,
    toggleDraft
}
from "../features/posts/postsSlice";

const PostList=()=>{

const dispatch=useDispatch();

const posts=useSelector(state=>

state.posts.allIds.map(id=>state.posts.byId[id])

);

return(

<div>

<h2>Posts</h2>

{

posts.map(post=>(

<div className="post" key={post.id}>

<p>{post.content}</p>

<p>

Platforms:

{post.platforms.join(", ")}

</p>

<p>

Status:

{

post.draft?

" Draft":" Published"

}

</p>

<button

onClick={()=>dispatch(toggleDraft(post.id))}

>

Toggle Draft

</button>

<button

onClick={()=>dispatch(deletePost(post.id))}

>

Delete

</button>

</div>

))

}

</div>

)

}

export default PostList;