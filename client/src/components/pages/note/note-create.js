import { Link } from 'react-router-dom'
import React from 'react';
import { useState } from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// service
import noteService from '../../../service/note-service'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faLock,
    faUser,
    faUserPlus,
    faEnvelope
    // faCheck,
    // faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
//


const NoteCreate = () => {

    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [content, setContent] = useState("")
    const [tag, setTag] = useState("")
    const [postdate, setPostdate] = useState("")
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // const onEditorStateChange = (editorState) => {
    //     setEditorState(editorState)
    // }

    // const editor = React.useRef(null);
    // function focusEditor() {
    //     editor.current.focus();
    // }

    const uploadCallback = (file) => {

        console.log(file)



        return new Promise(
            (resolve, reject) => {

                const params = new URLSearchParams()
                params.append('image', file)

                console.log(params)
                // return

                var formData = new FormData();
                formData.append("image", file);
 
                // console.log(file.data.data)

                noteService.Upload(formData).then((res) => {
                    console.log(res.status);
                    console.log(res)

                    if (res.status === 201) {
                        resolve({ data: { link: 'http://localhost:3001/data/uploads/' + res.data.data } });
                    } else {
                        console.log(res)
                        reject()
                    }
                })



            }
        );

    }


    const createUser = () => {
        console.log(title, subtitle, content, tag, postdate, editorState.getCurrentContent());
        const contentData = draftToHtml(convertToRaw(editorState.getCurrentContent()));

        const params = new URLSearchParams()
        params.append('title', title)
        params.append('subtitle', subtitle)
        params.append('content', contentData)
        params.append('tag', tag)
        params.append('postdate', postdate)

        //TODO validation after post to api
        noteService.Create(params).then((res) => {

            if (res.status === 201) {
                window.location.href = "/note/list";
            } else {
                console.log(res)
            }

        })

    }


    return (
        <section className="section">
            <div className="columns">
                <div className="column">
                    <h3 className="title is-4">Create note</h3>
                </div>
            </div>

            <div className="card events-card">
                <header className="card-header">
                    <p className="card-header-title">
                        note data
                    </p>
                    <Link to="#" className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleDown} />
                            {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
                        </span>
                    </Link>
                </header>
                <div className="card-content">
                    <div className="content">

                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="title input"
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Subtitle</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="subtitle input"
                                    onChange={(e) => {
                                        setSubtitle(e.target.value)
                                    }}
                                />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Content</label>
                            <div className="control has-icons-left">
                                <Editor
                                    // ref={editor}
                                    toolbarClassName="toolbarClassName"
                                    wrapperClassName="wrapperClassName"
                                    editorClassName="editorClassName"
                                    editorState={editorState}
                                    onEditorStateChange={(e) => { setEditorState(e) }}
                                    placeholder="Write something!"
                                    toolbar={{ image: { uploadCallback: uploadCallback } }}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Tag</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="tag"
                                    onChange={(e) => {
                                        setTag(e.target.value)
                                    }}
                                />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Postdate</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="datetime-local"
                                    // placeholder="postdate"
                                    onChange={(e) => {
                                        setPostdate(e.target.value)
                                    }}
                                />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faLock} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="card-footer ">
                    <div className="card-footer-item buttons flex-end">
                        <button className="button is-primary" onClick={createUser}>
                            <FontAwesomeIcon icon={faUserPlus} />
                            <p className="pad">Create</p>
                        </button>
                    </div>
                    {/* <Link to="#" className="card-footer-item">View All</Link> */}
                </footer>
            </div>

        </section>

    )
}


export default NoteCreate