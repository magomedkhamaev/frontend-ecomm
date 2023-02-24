import React from "react";
import { useDispatch } from "react-redux";
import {setColorId} from '../redux/slices/filter';

const Color = () => {
   const dispatch = useDispatch();
   const catArr = ['','gold','blue','grey','black','bisque'];
   const onClickColor = (id) => {
    dispatch(setColorId(id));
   }
  return (
    <>
      <ul className="colors ps-0">
      {catArr.map((catName, i) => (
                 <li key={i} onClick={() => onClickColor(catName)} style={{backgroundColor: `${catName}`, cursor: 'pointer'}} >
                 {/* {catName} */}
                </li>
              ))}
              {/* <li style={{backgroundColor: `${color}`}}></li> */}
        {/* <li value={'gold'} style={{backgroundColor: 'gold'}}></li>
        <li value={'blue'} style={{backgroundColor: 'blue'}}></li>
        <li value={'grey'} style={{backgroundColor: 'grey'}}></li>
        <li value={'bisque'} style={{backgroundColor: 'bisque'}}></li> */}
      </ul>
    </>
  );
};

export default Color;
