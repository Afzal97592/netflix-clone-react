import React from 'react'
import './Featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  
  return (
    <div className='featured'>
      {type &&(
        <div className='category'>
          <span>{type === "movie"? "Movies" : "Series"}</span>
          <select name='genre' id = 'genra'>
            <option>Genra</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
         <img 
         src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/b5wdvtubhcdl1mw8m6ra/stranger-things-3?fimg-ssr-default"
          alt=""
         />
         <div className="info">
            <img 
            src='https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1'
            alt=''
            />
            <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque debitis quaerat eveniet corporis sed omnis quam nihil veritatis nisi. Ut corporis maxime dolorum reiciendis! Accusantium id quo error, fugit et totam consequatur corporis, soluta quibusdam voluptatum tempore voluptate fugiat vel. Dignissimos dicta nam non labore quae molestiae! Repudiandae, quo!</span>
            <div className="buttons">
                <button className='play'>
                    <PlayArrowIcon />
                    <span>Play</span>
                </button>
                <button className='more'>
                  <InfoOutlinedIcon />
                  <span>Info</span>
                </button>
            </div>
         </div>
    </div>
  )
}

export default Featured