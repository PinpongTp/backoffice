import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import parse from 'html-react-parser';
import { faAngleDown, faSearch, faCheck, faTrashAlt, faUserEdit, faUserPlus, faFile } from '@fortawesome/free-solid-svg-icons'
//
// import Axios from 'axios'
import { useEffect, useState } from 'react'
// service
import noteService from '../../../service/note-service'
// sweetalert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// const TagsRender = (data) => {
//     let tagsData = data.tagsData
//     if (tagsData && tagsData !== '') {
//         return (
//             <div className='tags'>
//                 {JSON.parse(tagsData).map((tagVal, tagKey) => {
//                     return (
//                         <span className='tag is-primary' key={tagKey}>{tagVal.text}</span>
//                     )
//                 })}
//             </div>
//         )
//     }
//     return <></>
// }

/*
    todo create view note page || edit

    ? note bug
    ? - on create , can't set status to true
*/

const NoteList = () => {

    const [init, setInit] = useState(true)
    const [noteList, setNoteList] = useState([]);
    const getDataList = () => {

        noteService.DataList().then((res) => {
            setNoteList(res.data)
            setInit(false)
        })

    }

    const deleteById = (id) => {

        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                noteService.Delete(id).then((res) => {
                    MySwal.fire('Deleted!', '', 'success')
                    getDataList()
                })
            }
        })
    }

    const Approve = (data) => {

        if (data.approveData !== 0) {
            return <Link to="#" onClick={() => {updateApproveById(data.id, data.approveData)}} className='tag is-primary'>approve</Link>
        }else {
            return <Link to="#" onClick={() => {updateApproveById(data.id, data.approveData)}} className='tag is-primary'>not approve</Link>
        }
    }

    const Empty = (data) => {
        if (data.val.length === 0) {
            return (
            <tr>
                <td colSpan={5}> No data.</td>
            </tr>
            )
        } else {
            return <></>
        }
    }

    const updateApproveById = (id, val) => {

        MySwal.fire({
            title: 'Are you sure?',
            text: val === 0 ? 'Update to approve' : 'Update to not approve',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00d1b2',
            confirmButtonText: val === 0 ? 'Yes, approve' : 'Yes, not approve'
        }).then((result) => {
            if (result.isConfirmed) {

                let approve = val === 0 ? Date.now() : 0
                const params = new URLSearchParams()   
                params.append('approve', approve)

                noteService.UpdateApprove(id, params).then((res) => {
                    MySwal.fire('Updated!', '', 'success')
                    getDataList()
                })

            }
        })
    }


    useEffect(() => {
        if (init) {
            getDataList()
        }
    })

    return (
        <section className="section">
            <div className="columns">
                <div className="column">
                    <h3 className="title is-4">Notes</h3>
                </div>
                <div className="column">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="" />
                        <span className="icon is-medium is-left">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                        <span className="icon is-medium is-right">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                    </div>
                </div>
            </div>

            <div className="card events-card">
                <header className="card-header">
                    <p className="card-header-title">
                        <FontAwesomeIcon icon={faFile} style={{ marginRight: '1em' }} />  Notes list
                    </p>
                    <Link to="#" className="card-header-icon" aria-label="more options">
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleDown} />
                            {/* <i className="fa fa-angle-down" aria-hidden="true"></i> */}
                        </span>
                    </Link>
                </header>
                <div className="card-table">
                    <div className="content">
                        <table className="table is-fullwidth is-striped">
                            <thead>
                                <tr>
                                    <td>title</td>
                                    <td>subtitle</td>
                                    {/* <td>tag</td> */}
                                    <td>approve</td>
                                    <td>post date</td>
                                    <td>action</td>
                                </tr>
                            </thead>
                            <tbody>

                                {noteList.map((val, key) => {

                                    // if (!val.approved || val.approved === 0) {
                                    //     val.approve = 'false'
                                    // } else {
                                    //     val.approve = 'true'
                                    // }

                                    const d = new Date(val.postdate);
                                    console.log(d.toDateString())

                                    return (
                                        <tr key={key}>
                                            <td>{val.title}</td>
                                            <td>{val.subtitle}</td>
                                            {/* <td><TagsRender tagsData={val.tags} /></td> */}
                                            <td><Approve approveData={val.approved} id={val.id}/></td>
                                            <td>{new Date(val.postdate).toLocaleDateString()} {new Date(val.postdate).toLocaleTimeString()}</td>
                                            {/* <td>Admin</td> */}
                                            <td >
                                                <div className="level-right buttons flex-nowrap" >
                                                    <Link
                                                        className="button is-small is-info"
                                                        to={`/note/edit/${val.id}`} >
                                                        <FontAwesomeIcon icon={faUserEdit} />
                                                    </Link>

                                                    <Link
                                                        className="button is-small is-danger"
                                                        to="#"
                                                        onClick={() => { deleteById(val.id) }}
                                                    >
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </Link>
                                                </div>

                                            </td>
                                        </tr>
                                    )
                                })}

                                <Empty val={noteList}></Empty>
                            </tbody>
                        </table>
                    </div>
                </div>
                <footer className="card-footer ">
                    <div className="card-footer-item buttons flex-end">
                        <Link className="button is-small is-primary" to="/note/create">
                            <FontAwesomeIcon icon={faUserPlus} />
                        </Link>
                    </div>
                    {/* <Link to="#" className="card-footer-item">View All</Link> */}
                </footer>
            </div>

        </section>

    )
}


export default NoteList