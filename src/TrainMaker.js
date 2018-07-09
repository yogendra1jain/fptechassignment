import React,{Component} from 'react';
import ImgComponent from './img';
import TextField from 'material-ui/TextField';
import SubTrainMaker from './SubTrainMaker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
class TrainMaker extends Component
{
  componentDidMount()
  {
         this.messagesEnd.scrollTop =  this.messagesEnd.scrollHeight;

  }
  scrollToBottom = () => {
 this.messagesEnd.scrollTop =  this.messagesEnd.scrollHeight;
}
componentDidUpdate() {
  this.scrollToBottom();
}


  render()
  {
    console.log(this.props.trains,"yahoo");
   
    return(
 <div  style={{maxHeight:'340px',overflowY:'auto',right:50}} ref={(el) => { this.messagesEnd = el; }}>
 {this.props.trains.map((train,index)=>
 <div>
 <SubTrainMaker trains={this.props.trains} carriageCount={ train[`Train${index+1}`].carriageCount} identifier={index+1} train={train} key={index} index={index} {...this.props} />
 </div>
 )}
 </div>
    )
  }

}

export default TrainMaker