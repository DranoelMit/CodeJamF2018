import React, { Component } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('app'));

//format: color, font, fontsize
const rando = {
        0: '#ff0000,"Comic Sans MS",8rem',
        1: '#123456,"Trebuchet MS",10rem',
        2: '#000000,Impact,12rem',
        3: '#abcdef,cursive,2rem',
        4:'#ffffff,"Courier New",5rem'
};
class PostButton extends Component {
        constructor(props){
                super();
                this.state = {isModal : false};
                this.handleClick = this.handleClick.bind(this);
                this.sendLeet = this.sendLeet.bind(this);
        }

        handleClick(e){
                e.preventDefault();
                this.setState(state => ({
                  isModal: !state.isModal
                }));

        }
        sendLeet(){
                const text = document.getElementById('modalTextArea').value;
                const num = Math.floor(Math.random()*5);
                console.log(num);
                axios.post('http://98.109.119.29:725/addLeet',
                        {
                        "text": text,
                        "style": rando[num]
                        }
                ).then(response => {location.reload()});
        }

        render(){
                return (
                        <>
                        <button id="postButton" onClick={this.handleClick}>Leet</button>
                        <ReactModal className="modal" isOpen={this.state.isModal} >
                                <button className="modalChild" id="closeModalButton" onClick={this.handleClick}>X</button>
                                <textarea className="modalChild" id="modalTextArea" placeholder="Write a leet!"></textarea>
                                <button className="modalChild" id="sendLeetButton" onClick={this.sendLeet}>Send</button>
                        </ReactModal>
                        </>
                );
        }
}

export default PostButton
