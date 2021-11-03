import React from "react";
// import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCoffee } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
// import { useState } from 'react'

const Modal = ({ children, closeModal, modalState, title }) => {

    console.log('xxxxxxxxxx')
    console.log('children : ', children)
    console.log('closeModal : ', closeModal)
    console.log('modalState : ', modalState)
    console.log('title : ', title)

    if(!modalState) {
        return null;
    }

    return (
        <div id="modal" className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            {/* <figure className="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="" />
                            </figure> */}
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <div>
                                    <p>
                                        <strong>{title}</strong>
                                        {/* <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small> */}
                                    </p>
                                </div>
                                
                                {children}
                                
                            </div>
                            {/* <nav className="level is-mobile">
                                <div className="level-left">
                                    <button className="level-item" aria-label="retweet">
                                        <span className="icon is-small">
                                            <FontAwesomeIcon icon={faCoffee} />
                                        </span>
                                    </button>
                                    <button className="level-item" aria-label="like">
                                        <span className="icon is-small">
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </button>
                                </div>
                            </nav> */}
                        </div>
                    </article>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={closeModal} ></button>
        </div>
    )

}


Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
    title: PropTypes.string
}

export default Modal