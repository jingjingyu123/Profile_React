import React, { Component} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import image1 from './image/JJY2.jpg';
import image2 from './image/JJY3.jpg';
import image3 from './image/JJY4.jpg';
import image4 from './image/JJY5.jpg';
import image5 from './image/JJY11.jpg';
import image6 from './image/JJY12.jpg';


var data=new Array(8);
var photo=new Array(8);
var temp1
let key=0;

let a='';
let b='';
let c1;
let c2;
let d;
let f;
var movie=new Array(8);
movie[0]="tt3896198";
movie[1]="tt0312098";
movie[2]="tt7798646";
movie[3]="tt0899070";
movie[4]="tt0090738";
movie[5]="tt7545266";
movie[6]="tt9086228";
movie[7]="tt1502397";

const axios = require('axios');
axios.get('https://www.omdbapi.com/?i='+movie[0]+'&apikey=b780d44a')
      .then(function (response){
        data[0]="Title: "+response.data.Title+"  "+"Director:"+response.data.Director+" "+"Ratings: ";
        var temp2="";
        for(var i=0;i<response.data.Ratings.length;i++){
          temp2=temp2+response.data.Ratings[i].Source+" "+response.data.Ratings[i].Value+"; ";
        }
        data[0]=data[0]+temp2;
        photo[0]=response.data.Poster;
      })
      .catch(function (error){
      })
      .then(function(){
      });

axios.get('https://www.omdbapi.com/?i='+movie[1]+'&apikey=b780d44a')
      .then(function (response){
        data[1]="Title: "+response.data.Title+"  "+"Director:"+response.data.Director+" "+"Ratings: ";
        var temp2="";
        for(var i=0;i<response.data.Ratings.length;i++){
          temp2=temp2+response.data.Ratings[i].Source+" "+response.data.Ratings[i].Value+"; ";
        }
        data[1]=data[1]+temp2;
        photo[1]=response.data.Poster;
      })
      .catch(function (error){
      })
      .then(function(){
      });

axios.get('https://www.omdbapi.com/?i='+movie[2]+'&apikey=b780d44a')
      .then(function (response){
        data[2]="Title: "+response.data.Title+"  "+"Director:"+response.data.Director+" "+"Ratings: ";
        var temp2="";
        for(var i=0;i<response.data.Ratings.length;i++){
          temp2=temp2+response.data.Ratings[i].Source+" "+response.data.Ratings[i].Value+"; ";
        }
        data[2]=data[2]+temp2;
        photo[2]=response.data.Poster;
      })
      .catch(function (error){
      })
      .then(function(){
      });

axios.get('https://www.omdbapi.com/?i='+movie[3]+'&apikey=b780d44a')
      .then(function (response){
        data[3]="Title: "+response.data.Title+"  "+"Director:"+response.data.Director+" "+"Ratings: ";
        var temp2="";
        for(var i=0;i<response.data.Ratings.length;i++){
          temp2=temp2+response.data.Ratings[i].Source+" "+response.data.Ratings[i].Value+"; ";
        }
        data[3]=data[3]+temp2;
        photo[3]=response.data.Poster;
      })
      .catch(function (error){
      })
      .then(function(){
      });

axios.get('https://www.omdbapi.com/?i='+movie[4]+'&apikey=b780d44a')
      .then(function (response){
        data[4]="Title: "+response.data.Title+"  "+"Director:"+response.data.Director+" "+"Ratings: ";
        var temp2="";
        for(var i=0;i<response.data.Ratings.length;i++){
          temp2=temp2+response.data.Ratings[i].Source+" "+response.data.Ratings[i].Value+"; ";
        }
        data[4]=data[4]+temp2;
        photo[4]=response.data.Poster;
      })
      .catch(function (error){
      })
      .then(function(){
      });

axios.get('https://www.omdbapi.com/?i='+movie[5]+'&apikey=b780d44a')
      .then(function (response){
        data[5]="Title: "+response.data.Title+"  "+"Director:"+response.data.Director+" "+"Ratings: ";
        var temp2="";
        for(var i=0;i<response.data.Ratings.length;i++){
          temp2=temp2+response.data.Ratings[i].Source+" "+response.data.Ratings[i].Value+"; ";
        }
        data[5]=data[5]+temp2;
        photo[5]=response.data.Poster;
      })
      .catch(function (error){
      })
      .then(function(){
      });
axios.get('https://www.omdbapi.com/?i='+movie[6]+'&apikey=b780d44a')
      .then(function (response){
        data[6]="Title: "+response.data.Title+"  "+"Director:"+response.data.Director+" "+"Ratings: ";
        var temp2="";
        for(var i=0;i<response.data.Ratings.length;i++){
          temp2=temp2+response.data.Ratings[i].Source+" "+response.data.Ratings[i].Value+"; ";
        }
        data[6]=data[6]+temp2;
        photo[6]=response.data.Poster;
      })
      .catch(function (error){
      })
      .then(function(){
      });
axios.get('https://www.omdbapi.com/?i='+movie[7]+'&apikey=b780d44a')
      .then(function (response){
        data[7]="Title: "+response.data.Title+"  "+"Director:"+response.data.Director+" "+"Ratings: ";
        var temp2="";
        for(var i=0;i<response.data.Ratings.length;i++){
          temp2=temp2+response.data.Ratings[i].Source+" "+response.data.Ratings[i].Value+"; ";
        }
        data[7]=data[7]+temp2;
        photo[7]=response.data.Poster;
      })
      .catch(function (error){
      })
      .then(function(){
      });

export class Movies extends Component{
  render(){
    return (
    <SimpleReactLightbox>
      <SRLWrapper>
      <div class="Movies">
            <img src={photo[0]} alt= {data[0]}/>
            <img src={photo[1]} alt= {data[1]}/>
            <img src={photo[2]} alt= {data[2]}/>
            <img src={photo[3]} alt= {data[3]}/>
            <img src={photo[4]} alt= {data[4]}/>
            <img src={photo[5]} alt= {data[5]}/>
            <img src={photo[6]} alt= {data[6]}/>
            <img src={photo[7]} alt= {data[7]}/>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
    );
  }
}

export default Movies;