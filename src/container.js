import * as React from 'react'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Compartment from './compartment';
import TrainMaker from './TrainMaker';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import InputBox from './inputBox';
const style = {
	  border: '2px solid #0087F7',
    borderRadius: '5px',
}
export default class Container extends React.Component {
constructor(props)
{
  super(props);
  this.state = {
    trains:[],
    numberOfTrains:0
  }
}
 findPlatform= (arr,dep,n)=>  
 {
   console.log(arr,dep,"ff")
   let  plat_needed = 1;
   let result = 1;
   let  i =1;
   let j=0;
   //arr.sort();
  //dep.sort();
  arr.sort(function(a, b) {
  return a - b;
});
dep.sort(function(a, b) {
  return a - b;
});
  console.log(arr,dep);
    while (i < n && j < n){
    
        if (arr[i] < dep[j])
        {
          plat_needed = plat_needed+1;
        i++;
        }
        if (plat_needed > result)
        result = plat_needed
        else
        {
         
            plat_needed = plat_needed-1
            j= j+1
        }

    }
    alert(`Platform required --->${result}`);
      return result
    }
         
  
validate24Format = (time)=>
{
  debugger;
  console.log(time)
 let regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/g
 return regex.test(time)?true:false
}
calculateTracks = () =>
{
  let invalid = false;
 
  let arrival = this.state.trains.map((train,index)=>

  {
  let arrivalTime =  train[`Train${index+1}`].arrivalTime;
  if(this.validate24Format(arrivalTime))
  return  parseInt(arrivalTime.split(':').join(''))
  else 
  invalid = true
  })
  
  let departure = this.state.trains.map((train,index)=>
  {
    let departureTime = train[`Train${index+1}`].departureTime;
 if(this.validate24Format(departureTime))
  return parseInt(departureTime.split(':').join(''))
  else 
  invalid = true
  })
  if(invalid)
  {
    alert("You entered wrong input")
    return 
  }
  this.findPlatform(arrival,departure,arrival.length)
    console.log(arrival,departure)
}
  dropHandler=(name,src,dropResult)=>
  {
    if(dropResult.name=='inputBox')
    {
    console.log(dropResult,"dropResult");
    if(name=="locomotive")
    {
    this.state.numberOfTrains = this.state.numberOfTrains+1;
    let obj = {};
    obj[`Train${this.state.numberOfTrains}`] = {
      arrivalTime:'ff',
      departureTime:"jj",
      src:src,
      carriageCount:0
    }
    this.state.trains.push(obj)
    this.setState({numberOfTrains:this.state.numberOfTrains,trains:this.state.trains})
    }
    else
    {
    
  this.state.trains[this.state.numberOfTrains-1][`Train${this.state.numberOfTrains}`].carriageCount= this.state.trains[this.state.numberOfTrains-1][`Train${this.state.numberOfTrains}`].carriageCount+1;
console.log(this.state.trains)
this.setState({trains:this.state.trains})
   
    }
    }
    else
    {
     this.state.trains[dropResult.name-1][`Train${dropResult.name}`].carriageCount= this.state.trains[dropResult.name-1][`Train${dropResult.name}`].carriageCount+1;
this.setState({trains:this.state.trains})
    }
  }

  departure=(time,index)=>
  {
this.state.trains[index][`Train${index+1}`].departureTime =time;
  }
   arrival=(time,index)=>
  {
this.state.trains[index][`Train${index+1}`].arrivalTime = time;


  }
	render() {
		return (
		<DragDropContextProvider backend={HTML5Backend}>
  <div>
    <div className="mui-row">
    
      <Card className="mui-col-md-2" style={{minHeight:window.innerHeight*0.85,display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
       <div> <Compartment
          dropHandler={this.dropHandler}
          src="https://st3.depositphotos.com/4060975/18364/v/1600/depositphotos_183646056-stock-illustration-steam-engine-cartoon-retro-train.jpg"
          name="carriage"
        />
        
        </div>
        <Compartment
          dropHandler={this.dropHandler}
          src="https://cdn.iconscout.com/public/images/icon/premium/png-512/train-locomotive-toy-engine-play-kids-vehicle-icon-3421e8991f051e92-512x512.png"
          name="locomotive"
        />
      </Card>
      <div className="mui-col-md-9" style={{ minHeight: window.innerHeight*.85,position:'relative',overFlow:'scroll',...style}}>
        <div>
          <TrainMaker
            departure={this.departure}
            arrival={this.arrival}
            trains={this.state.trains}
          />
        </div>
        <div >
          <InputBox
          identifier={'inputBox'}
           trains={this.state.trains}
          />
        </div>
      </div>
   
    </div>
    <div style={{display:'flex',justifyContent:'center',marginTop:'7px'}}>
      <RaisedButton
        label="Calculate Track"
        secondary={true}
        onClick={this.calculateTracks}
      />
    </div>
  </div>
</DragDropContextProvider>

		)
	}
}