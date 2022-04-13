import React from 'react';

function Modal( { closeModal } ) {
    return (
        <div className="modalBackground bg-dark" >
            <div className="modalContainer">
                    <button
                        onClick={ () => { 
                            closeModal(false)
                        }}
                    
                    >
                    X
                    </button>tawaz
                <div className="title">

                </div>
                <div className="body">
                    <form action="" >
                        <div className="form-group">
                          <textarea name="" id="" className="form-group" cols="30" rows="10"></textarea>
                        </div>

                    </form>

                </div>
                <div className="footer">
                <button
                        onClick={ () => { 
                            closeModal(false)
                        }}
                    
                    >
                     Cancel
                    </button>
                    <button type="submit">Send</button>

                </div>
            </div>
            
        </div>
    )
}

export default Modal;
