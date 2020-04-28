import React, { Component} from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import image1 from './image/JJY2.jpg';
import image2 from './image/JJY3.jpg';
import image3 from './image/JJY4.jpg';
import image4 from './image/JJY5.jpg';
import image5 from './image/JJY11.jpg';
import image6 from './image/JJY12.jpg';

console.log(image1);
console.log(image2);
console.log(image3);
console.log(image4);
console.log(image5);
console.log(image6);
export class Image extends Component{
  render(){
    return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <div class="Picture">
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
            <img src={image5}/>
            <img src={image6}/>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
    );
  }
}

export default Image;