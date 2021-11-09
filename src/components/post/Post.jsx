import React from 'react'
import './post.css'

const Post = () => {
    return (
        <div className="post" >
            <img 
                className="postImg"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>

                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet, consec
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nobis placeat ipsa vel sint perferendis, exercitationem 
                id earum necessitatibus. In commodi nisi rem quasi a delectus 
                saepe voluptates possimus eligendi? Beatae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nobis placeat ipsa vel sint perferendis, exercitationem 
                id earum necessitatibus. In commodi nisi rem quasi a delectus 
                saepe voluptates possimus eligendi? Beatae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nobis placeat ipsa vel sint perferendis, exercitationem 
                id earum necessitatibus. In commodi nisi rem quasi a delectus 
                saepe voluptates possimus eligendi? Beatae.
            </p>
        </div>
    )
}

export default Post
