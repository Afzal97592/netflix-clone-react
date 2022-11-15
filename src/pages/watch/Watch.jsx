import React from 'react'
import './Watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
const Watch = () => {
  return (
    <div className='watch'>
        <div className='back'>
           <ArrowBackOutlinedIcon />
           Home
        </div>
        <video
        className="video"
        autoPlay
        progress
        controls
        src="https://media.istockphoto.com/id/1326696806/video/tourist-pulling-her-luggage-into-modern-hotel.mp4?s=mp4-640x640-is&k=20&c=8FRfkVTBR9yYyuof9Edj2aqkRLGoL_s59zdNdsag8Co="
      />
    </div>
  )
}

export default Watch