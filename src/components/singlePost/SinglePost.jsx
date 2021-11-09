import React from 'react'
import './singlePost.css'

const SinglePost = () => {
    return (
        <div className="singlePost" >
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg" 
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor" >Author: <b>Usoroh</b> </span>
                    <span className="singlePostDate" >1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum ab, officia voluptatum dicta consectetur expedita 
                    ratione eius veniam ex totam aut deserunt ipsa excepturi 
                    autem possimus unde eos porro dolorem! psa excepturi
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum ab, officia voluptatum dicta consectetur expedita 
                    ratione eius veniam ex totam aut deserunt ipsa excepturi 
                    autem possimus unde eos porro dolorem! psa excepturi
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum ab, officia voluptatum dicta consectetur expedita 
                    ratione eius veniam ex totam aut deserunt ipsa excepturi 
                    autem possimus unde eos porro dolorem! psa excepturi
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum ab, officia voluptatum dicta consectetur expedita 
                    ratione eius veniam ex totam aut deserunt ipsa excepturi 
                    autem possimus unde eos porro dolorem! psa excepturi
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum ab, officia voluptatum dicta consectetur expedita 
                    ratione eius veniam ex totam aut deserunt ipsa excepturi 
                    autem possimus unde eos porro dolorem! psa excepturi
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum ab, officia voluptatum dicta consectetur expedita 
                    ratione eius veniam ex totam aut deserunt ipsa excepturi 
                    autem possimus unde eos porro dolorem! psa excepturi
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum ab, officia voluptatum dicta consectetur expedita 
                    ratione eius veniam ex totam aut deserunt ipsa excepturi 
                    autem possimus unde eos porro dolorem! psa excepturi
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum ab, officia voluptatum dicta consectetur expedita 
                    ratione eius veniam ex totam aut deserunt ipsa excepturi 
                    autem possimus unde eos porro dolorem! psa excepturi
                </p>
            </div>
        </div>
    )
}

export default SinglePost
