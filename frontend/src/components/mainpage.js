import React, {Component} from 'react';
import '../mainpage.css';
import circle from '../Pan_Blue_Circle.png'

class Mainpage extends Component {
    render() {
        return (
            <div className="grid">
                <div className="g s1">
                    <img src={circle} alt="circle" />
                </div>
                <div className="g s2">
                    <img src={circle} alt="circle" />
                </div>
                <div className="g s3">
                    <img src={circle} alt="circle" />
                </div>
                <div className="g s4">
                    <h1>
                    FUNKCJA 1
                    </h1>
                    Opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
                </div>
                <div className="g s5">
                    <h1>
                    FUNKCJA 2
                    </h1>
                    Opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
                </div>
                <div className="g s6">
                    <h1>
                    FUNKCJA 3
                    </h1>
                    Opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
                </div>
                <div className="g s7">
                    <h1>
                        OPIS
                    </h1>
                    Opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis
                </div>
            </div>
        );
    }
}

export default Mainpage;
