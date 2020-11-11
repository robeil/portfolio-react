import React from 'react';
import Header from '../Header/index';
import backgroundImg from '../../Image/background.jpg';
import Icon from '../Icon/index';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: ''
        }
    }

    render() {
        return (
            <>
                <Header />
                <div className="landingImg"
                    style={{
                        backgroundImage: 'url(' + backgroundImg + ')',
                        backgroundSize: "cover",
                        height: "100vh",
                        color: "#f5f5f5"
                    }}>
                    <div className="font-style">
                        <h1>Contact</h1>
                    </div>
                    <form className="form-group">
                            <div className="col-6 mx-auto">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="name" className="form-control" placeholder="Full name" />
                                <label for="exampleFormControlInput1">Email</label>
                                <input type="email" className="form-control" placeholder="Email address" />
                                <label for="exampleFormControlTextarea1">Massage</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"
                                    type="text" placeholder="Write your message here"></textarea>
                                <br>
                                </br>
                                <div>
                                    <label for="submit"></label>
                                    <button className="btn btn-primary" type="submit">submit</button>
                                </div>
                            </div>
                    </form>
                    <Icon />
                </div>
            </>
        )
    }
}

export default Contact;