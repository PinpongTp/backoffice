import { Link } from 'react-router-dom'
import React from 'react';
import { useState, useEffect } from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { WithContext as ReactTags } from 'react-tag-input';
// service
import noteService from '../../../service/note-service'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    faLock,
    faUser,
    faUserPlus,
    faUpload,
    faEnvelope
    // faCheck,
    // faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
//


const NoteCreate = () => {

    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    // const [content, setContent] = useState("")
    // const [tag, setTag] = useState("")
    const [postdate, setPostdate] = useState("")
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [tags, setTags] = useState([]);
    const [approve, setApprove] = useState(false)

    const [thumbnail, setThumbnail] = useState(null)
    const [filename, setFilename] = useState("No file uploaded") // for file input


    const KeyCodes = {
        comma: 188,
        enter: 13,
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const handleDelete = (i) => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag) => {
        // console.log(tag)
        setTags([...tags, tag]);
        // console.log(tags)
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = [...tags].slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        setTags(newTags);
    };

    const handleTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const onClearAll = () => {
        setTags([]);
    };

    const onTagUpdate = (i, newTag) => {

        console.log('onTagUpdate')

        const updatedTags = tags.slice();
        updatedTags.splice(i, 1, newTag);
        setTags(updatedTags);
    };

    useEffect(() => {
        // console.log(thumbnail)
    });



    // const onEditorStateChange = (editorState) => {
    //     setEditorState(editorState)
    // }

    // const editor = React.useRef(null);
    // function focusEditor() {
    //     editor.current.focus();
    // }

    const uploadThumbnail = (file) => {

        if (file) {
            setFilename(file.name)
            setThumbnail(file)
        }

    }

    const uploadCallback = (file) => {

        console.log(file)



        return new Promise(
            (resolve, reject) => {

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
        const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

        let formData = new FormData();
        // const params = new URLSearchParams()        
        // ? append data in params
        formData.append('thumbnail', thumbnail)
        formData.append('title', title)
        formData.append('subtitle', subtitle)
        formData.append('content', content)
        formData.append('tags', tags)
        formData.append('postdate', postdate)
        formData.append('approve', approve)

        //TODO validation after post to api
        noteService.Create(formData).then((res) => {

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
                            <label className="label">Thumbnail</label>
                            <div className="control has-icons-left">
                                <div className="file is-right is-fullwidth">
                                    <label className="file-label">
                                        <input
                                            className="file-input"
                                            type="file"
                                            name="resume"
                                            onChange={(e) => {
                                                uploadThumbnail(e.target.files[0])
                                            }}
                                        />
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <FontAwesomeIcon icon={faUpload} />
                                                {/* <i className="fas fa-upload"></i> */}
                                            </span>
                                            <span className="file-label">
                                                Choose a file…
                                            </span>
                                        </span>
                                        <span className="file-name">
                                            {filename}
                                        </span>
                                    </label>
                                </div>

                                {/* <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faUser} />
                                </span> */}
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="title input"
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Subtitle</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="subtitle input"
                                    onChange={(e) => {
                                        setSubtitle(e.target.value)
                                    }}
                                />
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
                            <label className="label">Postdate</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="datetime-local"
                                    // placeholder="postdate"
                                    onChange={(e) => {
                                        setPostdate(e.target.value)
                                    }}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Tags</label>
                            <div className="control">
                                <ReactTags
                                    inline={false}
                                    handleDelete={handleDelete}
                                    handleAddition={handleAddition}
                                    handleDrag={handleDrag}
                                    delimiters={delimiters}
                                    handleTagClick={handleTagClick}
                                    onClearAll={onClearAll}
                                    onTagUpdate={onTagUpdate}
                                    tags={tags}
                                    classNames={{
                                        tagInputField: 'input',
                                        selected: 'tags',
                                        tag: 'tag is-primary',
                                        remove: 'delete is-small'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Approve</label>
                            <div className="control">
                                <div className="control">
                                    <label className="radio">
                                        <input type="radio" checked={approve === true} onChange={() => setApprove(true)} /> Show
                                    </label>
                                    <label className="radio">
                                        <input type="radio"  checked={approve === false} onChange={() => setApprove(false)} /> Not show
                                    </label>
                                </div>
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