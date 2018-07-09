import * as React from 'react'
import {
	ConnectDragSource,
	DragSource,
	DragSourceConnector,
	DragSourceMonitor,
} from 'react-dnd'
import ItemTypes from './ItemTypes';
import ImgComp from './img';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style={
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}



const boxSource = {
	beginDrag(props) {
		return {
			name: props.name
		}
	},

	endDrag(props,monitor,component) {
    debugger;
		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()
    console.log(item,dropResult)

		if (dropResult) {
			props.dropHandler(props.name,props.src,dropResult)
		}
	},
}

@DragSource(
	ItemTypes.compartment,
	boxSource,
	(connect,monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}),
)
export default class Compartment extends React.Component {
	 render() {
		const { isDragging, connectDragSource } = this.props
		const { name } = this.props
		const opacity = isDragging ? 0.4 : 1

		return (
			connectDragSource &&
			connectDragSource(
        <div style={{marginTop:'7px'}}>
        <Card>
      <ImgComp src={this.props.src} width={100} height={100}/>
      <br/>
      <span>{this.props.name}</span>
      </Card>
      </div>)
		)
	}
}