import React from 'react'
import './Post.css'
const Post = (props) => {

    return(

        <div className = 'card-containers'>

            <div className='image-containers'>
                <img src ={props.imageURL} />
            </div>

             <div className="card-content">
                <div className='card-tilte'>
                    <h3>{props.title}</h3>
                </div>

                <div className='card-body'>
                    <p>{props.body}</p>
                </div>
            </div>


            <div className='btn'>
                <button>
                    <a>view more</a>
                </button>
            </div>


        </div>


    )


}

export default Post;