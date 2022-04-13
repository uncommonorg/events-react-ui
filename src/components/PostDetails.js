import React from 'react'

function PostDetails(props) {

    const id = props.match.params.id



    return (
        <div className="container">

            <div className="row">
                <div className="col-md-4" >
                    <div class="item one">
                        <div href="/" class="posts"   bg-danger>
                            <p class="date">WED {id} </p>
                            <p class="time">3.05</p>
                            <p class="conference"><span>Conference:</span> The Future of open source chatting.</p>
                            <div class="links">
                                <div >Exponor,</div>
                                <div >Porto</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails;
