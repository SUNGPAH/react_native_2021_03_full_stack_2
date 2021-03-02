import React, { useEffect, useState } from "react";

import Div from './Div';
import Button from './Button';
import {Color} from '../../Constant';

const RadioInput = ({onValueChange, options, id}:any) => {
  const [currentIdx, setCurrentIdx] = useState(null);
  const onBtnPress = (idx) => {
    setCurrentIdx(idx)
  }

  useEffect(() => {
    onValueChange(currentIdx, id)
  }, [currentIdx])

  return <Div className="fdr fJCSB f1">
  {
    options.map((option:any, index:number) => {
      return <Button onPress={(e:any) => {onBtnPress(index)}} key={index}>
        <Div className="borderMidGray" style={{width:30, height:30, borderRadius:30, backgroundColor:'white',}}></Div>
        {
          currentIdx === index &&
          <Div style={{position:"absolute", left:6, top:6, backgroundColor:Color.primary,
          width:18, height:18, borderRadius:18,
          }}></Div>
        }
      </Button>
    })
  }
  </Div>
}

export default RadioInput
