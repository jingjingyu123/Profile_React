import React, { Component} from 'react';
import image from './image/JJY1.jpeg';

console.log(image);
export class Home extends Component{
  render(){
    return (
    <div class="Home">
        <div class="image">
            <img src={image}/>
        </div>
        <div class="word">
            <h1>About Me</h1>
             <p>Hi, I am Jingjing Yu. I am a third-year computer science student at UCSB. I have experience with web development and android. Outside of CS, I like playing computer games and watching anime.</p>
        </div>
    </div>
    );
  }
}

export default Home;