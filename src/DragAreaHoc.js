import React,{Component} from 'react';
import {
	DropTarget,
	DropTargetConnector,
	DropTargetMonitor,
	ConnectDropTarget,
} from 'react-dnd'
import ItemTypes from './ItemTypes'
function DragAreaHoc(ViewCompoenent)
{
class DragArea extends React.Component {

  
	 render() {
    
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		let backgroundColor = 'white'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		return (
			connectDropTarget &&
			connectDropTarget(
        <div style={{backgroundColor }}>
				<ViewCompoenent {...this.props}/>
        </div>,
			)
		)
	}
}
const boxTarget = {
  canDrop(props,monitor) {
    console.log(props,monitor.getItem(),"props")
    if(props.trains.length>0&&monitor.getItem().name=="locomotive")
    {
    return  props.trains[props.trains.length-1][`Train${props.trains.length}`].carriageCount==0? false:true
    }
    else if(props.trains.length==0)
    {
    return (monitor.getItem().name=="carriage")?false:true
    }
    return true
  },
	drop(props) {
		return { name: props.identifier }
	},
}
let dropper = (connect, monitor) =>
{ 
  return ({
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	})
}

return  DropTarget(ItemTypes.compartment,
	boxTarget, dropper)(DragArea);
}

export default DragAreaHoc