import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// layouts
import Footer from "./components/layouts/footer";
import Nav from "./components/layouts/nav";
import Modal from "./components/layouts/modal";
// pages
import Home from "./components/pages/home";
import Note from "./components/pages/note";
import Login from "./components/pages/login";
// test
import Popup from "./components/layouts/popup"



// const About = () => <h1>About</h1>
// const Post = () => <h1>Post</h1>
// const Project = () => <h1>Project</h1>

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


    Popup.show('xxx')

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

        <button className="button is-primary" onClick={this.toggleModal}>
          Open Modal
        </button>

        <button className='button is-primary' onClick={this.test}>test</button>

        <div id="container" className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/note" component={Note} />
            <Route pate="/:id"> 404 </Route>
          </Switch>
        </div>

        <Footer />
      </main>
    );
  }
}

export default App;
