import React, { useRef, useState } from 'react'
import './List.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../listItem/ListItem';
const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slidNumber, setSlidNumber] = useState(0);
  const listRef = useRef()
  const handleClick = (direction) =>{
    let distance = listRef.current.getBoundingClientRect().x-50
      if (direction === "left" && slidNumber > 0){
        setSlidNumber(slidNumber-1)
            listRef.current.style.transform =`translateX(${230+distance}px)`
      }
      // console.log(distance)
      if(direction === "right" && slidNumber < 5){
        setIsMoved(true)
        setSlidNumber(slidNumber+1)
           listRef.current.style.transform =`translateX(${-230+distance}px)`
      }
  }
  return (
    <div className='list'>
       <span className='listTitle'>Continue to watch</span>
       <div className='wrapper'>
         <ArrowBackIosNewOutlinedIcon className='sliderArrow left'
          onClick={()=>handleClick("left")}
          style={{display: !isMoved && 'none'}}
          />
         <div className='container' ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
         </div>
         <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>handleClick("right")} />
       </div>
    </div> 
  )
}

export default List