import React from 'react';
import Header from '../Header/index';
import backgroundImg from '../../Image/background.jpg';
import Icon from '../Icon/index';
import Animation from '../Animation/index';

class Contact extends React.Component {

    render() {
        return (
            <>

                <div className="landingImg"
                    style={{
                        backgroundImage: 'url(' + backgroundImg + ')',
                        backgroundSize: "cover",
                        height: "100vh",
                        color: "#f5f5f5"
                    }}>
                    <div className="head">
                        <Animation>
                            <h1>Robeil Aregawi</h1>
                        </Animation>
                    </div>
                    <Header />
                    <div className="contact">
                        <form className="mx-auto" style={{ width: "60%" }}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Email</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email address" />
                            </div>
                            <div>
                                <label for="exampleFormControlTextarea1">Massage</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"
                                    type="text" placeholder="Write your message here" />
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                    <Icon />
                </div>

            </>
        )
    }
}

export default Contact;