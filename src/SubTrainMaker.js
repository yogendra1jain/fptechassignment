import React,{Component} from 'react';
import ImgComponent from './img';
import TextField from 'material-ui/TextField';
import DragAreaHoc from './DragAreaHoc';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';


class SubTrainMaker extends Component
{
  constructor(props)
  {
  super(props);
  
  }
 carriageMaker=(count)=>
{
  let carriage = []
for(let i =0;i<count;i++){
  carriage.push(<div key={i} style={{display:'flex',alignItems:'center'}}> <ImgComponent key={i} src={'https://st3.depositphotos.com/4060975/18364/v/1600/depositphotos_183646056-stock-illustration-steam-engine-cartoon-retro-train.jpg'} height={70} width={70}/>
  </div>)
}
 return carriage
}
  render()
  {
    debugger;
    console.log("yahoo",this.props)
   let  train = this.props.train
   console.log("train from render",train)
return (
  <Card style={{margin:'5px',right:'5px',overflowX:'auto'}}>
  <span style={{fontWeight:'200'}}>{`Train${this.props.index+1}`} Add more coaches here  </span>    
    <div key={this.props.index} style={{display:'flex'}}>
    <div style={{display:"flex",alignItems:'center'}}>
          <ImgComponent src={train[`Train${this.props.index+1}`].src} height={70} width={70}/>
            {...this.carriageMaker(train[`Train${this.props.index+1}`].carriageCount)}
    </div>        
    <div style={{display:'flex',alignItems:'center',marginLeft:'10px'}}>
          <TextField
          inputStyle={{marginTop:'0px'}}
          hintText="Arrival"
          
          onChange={(event)=>this.props.arrival(event.target.value,this.props.index)}
          />
          <TextField
                hintText="Departure"
                 inputStyle={{marginTop:'0px'}}
               
                onChange={(event)=>this.props.departure(event.target.value,this.props.index)}

          />
         

    </div>
 </div>
  </Card>
)
}
}
export default DragAreaHoc(SubTrainMaker)