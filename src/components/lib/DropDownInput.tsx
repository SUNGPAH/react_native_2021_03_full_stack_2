import React, {useState} from "react";
import Div from './Div';
import Text from './Text';
import Button from './Button';

const DropDownInput = ({label, list, renderKey, onSelectClick, valueInit, txtInit}:any) => {
  const SelectItem = ({onPress, index, txt, value}:any) => {
    return <Button key={index} onPress={onPress}
    className="p16"
    style={{minHeight:50, width:'100%',
      alignItems:'center', justifyContent:'flex-start', flexDirection:'row',
      borderBottomWidth: 1, borderBottomColor: "#e0e3e9",
    }}>
      <Text className="colDarkGray fS">{txt}</Text>
    </Button>
  }

  const [showOptions, setShowOptions] = useState(false);
  const toggleDropDownInput = () => {
    setShowOptions(prev => !prev)
  }

  const renderTxt = () => {
    console.log('render txt');
    const index = list.findIndex(x => x.value === valueInit)
    if(index !== -1){
      return list[index].txt
    }else{
      return ""
    }
  }

  return <Div className="mb16">
    <Text className="fM bold">{label}</Text>
    <Div>
      <Button onPress={toggleDropDownInput}>
        <Div style={{borderBottomWidth:1, borderBottomColor:'#dcdcdc', height:50,
        flexDirection:'row', alignItems:'center',
        justifyContent:'space-between'}}>
          {
            valueInit ?
            <Text className="fS colBlack">{renderTxt()}</Text>
            :
            <Text className="fS colDarkGray">{txtInit}</Text>
          }
        </Div>
      </Button>
      {
        (showOptions === true) ?
        <Div style={{borderWidth:1, borderColor:'#e0e3e9', borderBottomWidth:0, borderTopWidth:0,}}>
          {list.map((object:any, index) => {
            return <Div key={index}>
              <SelectItem txt={object.txt} value={object.value} onPress={(e) => {
              onSelectClick(renderKey, object.value)
              toggleDropDownInput();
            }}/></Div>
          })}
        </Div>
        :
        <></>
      }
    </Div>
  </Div>
}

export default DropDownInput
