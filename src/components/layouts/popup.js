import ReactDOM from 'react-dom';
import Modal from "./modal";
import { Component } from "react";

const rootElement = document.getElementById('root');
const element = document.createElement('div');
element.setAttribute("id", "popup");



class popup extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          modalState: true
        };
        
        this.toggleModal = this.toggleModal.bind(this);
      }

    toggleModal() {     
        console.log('toggleModal')
        
        this.setState((prev, props) => {
            const newState = !prev.modalState;
            
            return { modalState: newState };
        });
    }


    show(val) {
        rootElement.append(element);
        console.log('++ popup show ++')
        console.log('val : ' + val)

        // this.setState({
        //     modalState: true
        // })

        ReactDOM.render(
            <Modal
                closeModal={this.toggleModal}
                modalState={this.state.modalState}
                title="Example modal title"
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean efficitur sit amet massa fringilla egestas.Nullam condimentum luctus turpis.
                </p>
            </Modal>
            ,
            document.getElementById('popup')
        );
        // return val

    }

    hide() {
        console.log('++ popup hide ++')
        // CLEAR ELEMENT
        // return val
    }

}

let Popup = new popup()
export default Popup


