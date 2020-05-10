import React, { Component} from 'react';
import useState from 'react';
import config from './config.js';
const firebase = require('firebase');

function isValidEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

export class Messages extends Component{
    constructor() {
        super();
        this.state = {
          username: '',
          bio: '',
          can_post: '',
          date: '',
          email: '',
          message: '',
          items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      handleSubmit(e) {
          this.state.date = new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString();
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
          bio: this.state.bio,
          user: this.state.username,
          can_post: this.state.can_post,
          date: this.state.date,
          email: this.state.email,
          message: this.state.message
        }
        if(this.state.username.length <= 5 || this.state.username.length>=20){
              window.alert("this.state.username.length not available");
        }else if(this.state.bio.length > 100){
            window.alert("this.state.bio.length not available");
        }else if(this.state.message.length <=15 || this.state.message.length >=500){
            window.alert("this.state.message.length not available");
        }else if(this.state.can_post != "yes" && this.state.can_post != "no"){
            window.alert("this.state.can_post not available");
        }else if(this.state.email != "" && (!isValidEmail(this.state.email))){
            window.alert("this.state.email not available");
        }else{
            window.alert("successful");
            itemsRef.push(item);
        }
        
        this.setState({
          username: '',
          bio: '',
          can_post: '',
          date: '',
          email: '',
          message: ''
        });
      }
      componentDidMount() {
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              title: items[item].date,
              user: items[item].user,
              bio: items[item].bio,
              message: items[item].message,
              can_post: items[item].can_post
            });
          }
          this.setState({
            items: newState
          });
        });
      }
  render(){
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
        // firebase.database().ref('data1').push().set("nice")

        // //get a reference to the database
        // let ref = firebase.database().ref('data')
        // //retrieve its data
        // ref.on('value', snapshot => {
        //     const data = snapshot.val()
        //     this.setState({data: data})
        // })
    }
       return ( 
       <div className='Messages'>
           <header>
               <div className='wrapper'>
                   <h1>Say Hi!</h1>
               </div>
            </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit={this.handleSubmit}>
                <a>What's your name?</a>
               <br />
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username}  />
               <br />
                <a>Offer a short description of yourself.</a>
               <br />
                <input type="text" name="bio" onChange={this.handleChange} value={this.state.bio} />
               <br />
                <a>What have you say?</a>
               <br />
                <input type="text" name="message" onChange={this.handleChange} value={this.state.message} />
               <br />
                <a>Would you like your message to be viewable by he other guests of this site?</a>
               <br />
                <input type="text" name="can_post" onChange={this.handleChange} value={this.state.can_post} />
               <br />
                <a>If you would like me to be able to contact you, what's your email(mail will not be posted)</a>
               <br />
                <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
               <br />
                <button>Send message</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
            <ul>
                {this.state.items.map((item) => {
                if(item.can_post == "yes"){
                    if(item.bio == ""){
                        return (
                        <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.user}</p>
                        <p>{item.message}</p>
                        </li>
                        )
                    }else{
                        return (
                        <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.user}</p>
                        <p>{item.bio}</p>
                        <p>{item.message}</p>
                        </li>
                        )
                    }
                    
                }else{
                    return (
                    <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.user}</p>
                    <p>{item.bio}</p>
                    </li>
                    )
                    
                }
                    })}
            </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Messages ;
