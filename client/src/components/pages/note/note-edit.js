import { Link, useParams } from 'react-router-dom'
import React from 'react';
import { useState, useEffect } from 'react'
import { EditorState, ContentState, convertToRaw, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { WithContext as ReactTags } from 'react-tag-input';
import moment from 'moment';
// config
import configData from "../../../config/config.json"
// service
import noteService from '../../../service/note-service'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown,
    // faLock,
    // faUser,
    faEye,
    faEdit,
    faUpload,
    // faEnvelope
    // faCheck,
    // faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons'
// sweetalert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const PUBLIC_URL = configData.API_URL + '/data/uploads/';


const NoteEdit = () => {
    let { id } = useParams();

    const [init, setInit] = useState(true)
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    // const [content, setContent] = useState("")
    // const [tag, setTag] = useState("")
    const [postdate, setPostdate] = useState("")
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [tags, setTags] = useState([]);
    const [approve, setApprove] = useState(0)

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

    const getNoteData = () => {
        // console.log('get user data')
        // console.log('id', id)

        noteService.Data(id).then((res) => {

            console.log(res)

            setTitle(res.data.title)
            setSubtitle(res.data.subtitle)
            setPostdate(moment(res.data.postdate).format("YYYY-MM-DDTHH:mm"))
            setEditorState(EditorState.createWithContent(
                ContentState.createFromBlockArray(
                    convertFromHTML(res.data.content)
                )
              )
            )
            setTags(JSON.parse(res.data.tags))
            setApprove(res.data.approved)
            setThumbnail(res.data.thumbnail)
            setFilename(res.data.filename)



            // setName(res.data.name)
            // setUsername(res.data.username)
            // setEmail(res.data.email)
            setInit(false)
        })

    }

    useEffect(() => {
        if(init){
            getNoteData();
        }

        console.log(approve)
    })

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
                        resolve({ data: { link: PUBLIC_URL + res.data.data } });
                    } else {
                        console.log(res)
                        reject()
                    }
                })



            }
        );

    }


    const updateNote = () => {

        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00d1b2',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

                let formData = new FormData();
                // const params = new URLSearchParams()        
                // ? append data in params
                formData.append('thumbnail', thumbnail)
                formData.append('title', title)
                formData.append('subtitle', subtitle)
                formData.append('content', content)
                formData.append('tags', JSON.stringify(tags))
                formData.append('postdate', postdate)
                formData.append('approve', approve)

                //TODO validation after post to api
                noteService.Update(id, formData).then((res) => {

                    if (res.status === 200) {
                        window.location.href = "/note/list";
                    } else {
                        console.log(res)
                    }

                })
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

                            {
                                thumbnail !== null ?
                                <div style={{paddingBottom: "0.5rem"}}>
                                    <Link
                                        className="button is-small is-primary"
                                        to="#"
                                        onClick={() => {
                                            MySwal.fire({
                                                imageUrl: PUBLIC_URL + thumbnail,
                                                imageAlt: 'thumbnail'
                                            })
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faEye} /> Thumbnail
                                    </Link>
                                </div>
                                :null
                            }
                            


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
                                    defaultValue={title}
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
                                    defaultValue={subtitle}
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
                                    defaultValue={postdate}
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
                                        <input type="radio" checked={approve !== 0} onChange={() => setApprove(Date.now())} /> Show
                                    </label>
                                    <label className="radio">
                                        <input type="radio"  checked={approve === 0} onChange={() => setApprove(0)} /> Not show
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <footer className="card-footer ">
                    <div className="card-footer-item buttons flex-between">
                        <Link className="button is-light" to="/note/list">
                            <p className="pad">Cancel</p>
                        </Link>
                        <button className="button is-primary" onClick={updateNote}>
                            <FontAwesomeIcon icon={faEdit} />
                            <p className="pad">Update</p>
                        </button>
                    </div>
                </footer>


            </div>

        </section>

    )
}


export default NoteEdit