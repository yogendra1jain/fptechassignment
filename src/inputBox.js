import * as React from 'react';
import DragAreaHoc from './DragAreaHoc';
const style = {
	    border: '2px dashed #0087F7',
    borderRadius: '5px',
    minHeight: '70px',
    position: 'absolute',
    bottom:'4%',
    width:'97%',
    opacity: '1',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

const InputBox = (props)=>
{
  	const { canDrop, isOver, connectDropTarget } = props
		const isActive = canDrop && isOver

		let backgroundColor = 'white'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}
  return(
	<div style={{ ...style,backgroundColor}}>
  <span>Drag Drop Elements here to create Train </span>
			</div>)
}

export default DragAreaHoc(InputBox);