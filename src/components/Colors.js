import React,{useState} from "react";
import data from "../data";

function Colors() {
  const [inpdata,setData] =useState(data)
  return inpdata[3].colors.map((col) => {
    return (
      <>
        <div className='col-lg-6 mb-4'>
          <div className={col.classname}>
            <div className='card-body'>
              {col.name}
              <div className={col.classnam1}>{col.percent}</div>
            </div>
          </div>
        </div>
      </>
    )
  })
}

export default Colors

