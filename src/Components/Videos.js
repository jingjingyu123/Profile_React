import React, { Component} from 'react';
import YouTube from 'react-youtube';
export class Videos extends Component{
  render(){
    const opts = {
        playerVars: {
            //https://www.youtube.com/embed
          autoplay: 1,
        },
      };
    return (
        <div class="Videos">
            <div class="Video">
              <iframe src="https://www.youtube.com/embed/il_t1WVLNxk"></iframe>
            </div>
            <div class="Video">
              <iframe src="https://www.youtube.com/embed/il_t1WVLNxk?autoplay=1"></iframe>
            </div>
            <div class="Video">
              <iframe src="https://www.youtube.com/embed/il_t1WVLNxk/AS_dAPN1Dlk?playlist=AfxHGNRtFac&loop=1"> </iframe>
            </div>
            <div class="Video">
              <iframe src="https://www.youtube.com/embed/il_t1WVLNxk/?controls=0"> </iframe> 
            </div>
        </div>);
  }
}

export default Videos;