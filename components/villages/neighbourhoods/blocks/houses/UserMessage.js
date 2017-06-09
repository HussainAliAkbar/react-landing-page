import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

// Initialize Firebase
//this config will vary from firebase project to project
//simply replace my configuration with the configuration you get from your firebase project
const config = {
    apiKey: "AIzaSyBlptKEC2jYRIRgmWW32UaLWbHWXCNdG-I",
    authDomain: "chat-bot-demo-960d2.firebaseapp.com",
    databaseURL: "https://chat-bot-demo-960d2.firebaseio.com",
    projectId: "chat-bot-demo-960d2",
    storageBucket: "chat-bot-demo-960d2.appspot.com",
    messagingSenderId: "990728770835"
};
firebase.initializeApp(config);


//get data from firebase
const database = firebase.database();
const user = database.ref('user');


class UserMessage extends React.Component {
    constructor(){
        super();
        this.state = {avatar: "", username: "", message: "", showComponent: false};
    }

    componentDidMount() {
        let firebaseAvatar;
        let firebaseUsername;
        let firebaseMessage;

        setTimeout(() => {
            this.setState({showComponent: true});
        }, 3000);

        let promise1 = new Promise((resolve, reject) => {
            user.on('value', (snapshot) => {
                firebaseAvatar = snapshot.val().avatar;
                resolve(firebaseAvatar);
            });
        });

        let promise2 = new Promise((resolve, reject) => {
            user.on('value', (snapshot) => {
                firebaseUsername = snapshot.val().username;
                resolve(firebaseUsername);
            });
        });

        let promise3 = new Promise((resolve, reject) => {
            user.on('value', (snapshot) => {
                firebaseMessage = snapshot.val().message;
                resolve(firebaseMessage);
            });
        });


        Promise.all([promise1, promise2, promise3])
            .then((values => {
                this.setState({
                    avatar: values[0],
                    username: values[1],
                    message: values[2]
                });
                console.log(values);
        }));
    }

    render() {
        const showComponent = this.state.showComponent;
        return (
            <div>
                {showComponent ? (
                    <div className="user-message">
                        <div style={{background: this.state.avatar}} className="user-avatar"></div>
                        <div className="username">{this.state.username}</div>
                        <div className="message">{this.state.message}</div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        )
    }
}
module.exports = UserMessage;