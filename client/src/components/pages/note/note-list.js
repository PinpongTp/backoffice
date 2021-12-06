import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch, faCheck, faUser, faTrashAlt, faUserEdit, faUserPlus } from '@fortawesome/free-solid-svg-icons'
//
import Axios from 'axios'
import { useEffect, useState } from 'react'
// service
import noteService from '../../../service/note-service'
// sweetalert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const NoteList = () => {

    const [init, setInit] = useState(true)
    const [noteList, setNoteList] = useState([]);
    const getDataList = () => {

        noteService.DataList().then((res) => {
            setNoteList(res.data)
            setInit(false)

            console.log(noteList)
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

    useEffect(() => {
        if(init){
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
                        Notes list
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
                                    <td></td>
                                    <td>title</td>
                                    <td>tag</td>
                                    <td>status</td>
                                    <td>post date</td>
                                    <td>action</td>
                                </tr>
                            </thead>
                            <tbody>

                                {noteList.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td width="5%">
                                                <FontAwesomeIcon icon={faUser} />
                                            </td>
                                            <td>{val.title}</td>
                                            <td>{val.subtitle}</td>
                                            <td>{val.content}</td>
                                            <td>{val.postdate}</td>
                                            {/* <td>Admin</td> */}
                                            <td >
                                                <div className="level-right buttons" >
                                                    <Link
                                                        className="button is-small is-info"
                                                        to={`/user/edit/${val.id}`} >
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

                                {/* //! if empty
                                */}

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