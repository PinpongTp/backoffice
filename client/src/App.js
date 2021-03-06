//! module
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//! layouts
import Footer from "./components/layouts/footer";
import Nav from "./components/layouts/nav";
import Aside from "./components/layouts/aside";
import Modal from "./components/layouts/modal";

//! pages
import Home from "./components/pages/home";
import Login from "./components/pages/login";
// profile
import ProfileEdit from "./components/pages/profile/profile-edit"
// user
import UserList from "./components/pages/user/user-list"
import UserCreate from "./components/pages/user/user-create"
import UserEdit from "./components/pages/user/user-edit";
// note
import NoteList from "./components/pages/note/note-list";
import NoteCreate from "./components/pages/note/note-create";
import NoteEdit from "./components/pages/note/note-edit";
// project
import ProjectList from "./components/pages/project/project-list";
import ProjectCreate from "./components/pages/project/project-create";
import ProjectEdit from "./components/pages/project/project-edit";

//! service
import AuthService from "./service/auth-service"


const AuthContainer = () => (
    <div id="container" className="App flex container">
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
        </Switch>
    </div>
)

const DefaultContainer = () => {
    if (AuthService.loggedIn()) {
        return (
            <div id="container" className="App flex container">
                <Aside />
                <div className="main pad">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/profile-edit" component={ProfileEdit} />
                        {/* user */}
                        <Route path="/user/list" component={UserList} />
                        <Route path="/user/create" component={UserCreate} />
                        <Route path="/user/edit/:id" component={UserEdit} />
                        {/* note */}
                        <Route path="/note/list" component={NoteList} />
                        <Route path="/note/create" component={NoteCreate} />
                        <Route path="/note/edit/:id" component={NoteEdit} />
                        {/* project */}
                        <Route path="/project/list" component={ProjectList} />
                        <Route path="/project/create" component={ProjectCreate} />
                        <Route path="/project/edit/:id" component={ProjectEdit}/>
                        <Route pate="/:id"> 404 </Route>
                        <Route pate="*"> * </Route>
                    </Switch>
                </div>
            </div>
        )
    }else {
        return <Redirect to="/login" />
    }
}



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        AuthService.loggedIn({ test: 'test' }).then((res) => {
            console.log(res)
        })


        // if(this.item === undefined) {return}

        console.log('toggleModal')

        this.setState((prev, props) => {
            const newState = !prev.modalState;

            return { modalState: newState };
        });
    }

    test() {
        console.log('test')

        // const location = useLocation();
        // console.log(location.pathname);

        // Popup.show('xxx')

    }

    render() {
        return (
            <main className="my-app">

                <Modal
                    closeModal={this.toggleModal}
                    modalState={this.state.modalState}
                    title="Example modal title"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean efficitur sit amet massa fringilla egestas.Nullam condimentum luctus turpis.
                    </p>
                </Modal>

                <Nav />

                {/* <button className="button is-primary" onClick={this.toggleModal}>
          Open Modal
        </button> */}

                {/* <button className='button is-primary' onClick={this.test}>test</button> */}

                <Switch>
                    <Route exact path="/(login)" component={AuthContainer} />
                    <Route component={DefaultContainer} />
                </Switch>

                <Footer />
            </main>
        );
    }
}

export default App;