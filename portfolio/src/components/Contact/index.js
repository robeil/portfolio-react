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

                    <div>
                        <form className="form-group mx-auto" style={{ width: "60%", top: "80%" }}>
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
                                <button className="btn btn-primary submit" type="submit">submit</button>
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