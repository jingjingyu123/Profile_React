import React, { Component} from 'react';
import image1 from './image/JJY7.jpg';
import image2 from './image/JJY9.jpg';
import image3 from './image/JJY8.jpg';
import image4 from './image/JJY10.jpg';

console.log(image1);
export class Projects extends Component{
  render(){
    return (
    <div class="Project">
        <div class="p">
            <div class="i">
                <a href="https://github.com/jingjingyu123/Profile"><img src={image1}/></a>
            </div>
            <div class="w">
                <a>Personal Website:my website, created using html and css.</a>
            </div>
        </div>
    <div class="p">
        <div class="i">
            <a href="https://github.com/jingjingyu123/"><img src={image2}/></a>
        </div>
        <div class="w">
            <a>Tutor Schedule: help tutors make better schedules.</a>
        </div>
    </div>

    <div class="p">
            <div class="i">
            <a href="https://github.com/jingjingyu123/"><img src={image3}/></a>
            </div>
            <div class="w">
                <a>WeTube:fun mobile app to watch videos together.</a>
            </div>
        </div>
        <div class="p">
            <div class="i">
                <a href="https://github.com/jingjingyu123/"><img src={image4}/></a>
            </div>
            <div class="w">
            <a>Floor sweeping robert:help you sweep the floor.</a>
            </div>
        </div>
    </div>
    );
  }
}

export default Projects;