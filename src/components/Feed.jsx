import React, { Component } from 'react';
import axios from 'axios';

class Feed extends Component {
        constructor(props){
                super();
                this.state = {
                        leets: []
                }
        }

        componentDidMount() {

                axios.get('http://98.109.119.29:725/loadLeets').then(response => {
                        let split = response.data;
                        let leets = [];
                        for(let i=0; i<split.length-1; i++){
                                let splittle = split[i].split("///////////////////////////");
                                //sub zero is text, 1 is styling
                                let styles = splittle[1].split(',');
                                let pstyle = {
                                        "color": styles[0],
                                        "font-family": styles[1],
                                        "font-size": styles[2]
                                };

                                leets.push({
                                        "text": splittle[0],
                                        "color" : pstyle.color,
                                        "font-family" : pstyle["font-family"],
                                        "font-size": pstyle["font-size"]
                                });
                                //leets.push(<div className="leet"><p className="leetP" style={pstyle}>{splittle[0]}</p></div>);
                        }
                        this.setState({leets})


                });
        }


        render() {
                console.log(this.state.leets);
                return (
                        <div id="feed">
                                {this.state.leets.map(leet => (
                                         <div className="leet">
                                                 <p className="leetP" style={{
                                                                 color:leet.color, fontFamily:leet["font-family"], fontSize: leet["font-size"]
                                                                        }}>{leet.text}</p>
                                         </div>
                                ))}
                        </div>
                );
        }
}

export default Feed
