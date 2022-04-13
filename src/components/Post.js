import React from 'react';
import {useState} from 'react';
import Modal from './includes/Modal';
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

function Post( { posts, date, tittle, hed  } ) {

    const [ openModal, setOpenModal] = useState(false);
 

    return (
            <div className="container post-list mt-5">
                {/* < Modal/> */}
                <h1>{hed}</h1>
                <div className="row">
                    {posts.map( (post) => (
                        <div className="col-md-4" key={post.id} >
                            <div className="latest">
                                <div className="item one">
                                    <div  className="posts" bg-danger>
                                        <p className="date"> {post.date} </p>
                                        <p className="time">3.05</p>
                                        <p className="conference"><span>Conference:</span> {post.title}</p>
                                        <div className="links mb-3">
                                            <a href="/">{post.venue}</a>
                                            <a href="/">Porto</a>
                                        </div>
                                        <div className="post-options" >
                                          <div className="post-option">
                                                {/* <ThumbUpIcon/> */}
                                                <FormControlLabel
                                                control={<Checkbox icon={<FavoriteBorder />} 
                                                        checkedIcon={<Favorite />}
                                                name="checkedH" />}
                                                label="like"
                                                />
                                                    {/* <p>Like</p> */}
                                          </div>
                                          <div className="post-option">
                                             <button
                                              onClick={ () => { 
                                                setOpenModal(true) 
                                                }}
                                             >
                                                  <ChatBubbleOutlineIcon
                                                 
                                                 />

                                             </button>
                                               
                                                <p>comment</p>
                                                
                                          </div>
                                          <div className="post-option">
                                                <NearMeIcon/>
                                                <p>share</p>
                                          </div>

                                           
                                          
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    ))}
                </div>
                { openModal && <Modal closeModal={setOpenModal} /> }
           </div>
    )
}

export default Post;
