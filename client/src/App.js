import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// layouts
import Footer from "./components/layouts/footer";
import Nav from "./components/layouts/nav";
// import Content from "./components/layouts/content"

import Aside from "./components/layouts/aside";
import Modal from "./components/layouts/modal";
// pages
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import ProfileEdit from "./components/pages/profile/profile-edit"
// test
// import Popup from "./components/layouts/popup"



// const About = () => <h1>About</h1>
// const Post = () => <h1>Post</h1>
// const Project = () => <h1>Project</h1>

const AuthContainer = () => (
  <div id="container" className="App flex container">
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
    </Switch>
  </div>
)

const DefaultContainer = () => (
  <div id="container" className="App flex container">
    <Aside />
    <div className="main">
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/profile-edit" component={ProfileEdit} />
        <Route pate="/:id"> 404 </Route>
        <Route pate="*"> * </Route>
      </Switch>
    </div>
  </div>
)



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {



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
