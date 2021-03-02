export const emailRule = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
export const convertIndexToDayKor = (dateIndex) => {
	let kor
	switch (dateIndex) {
    case 0:{
      kor = "월"
      break;
    }
    case 1:{
      kor = "화"
      break;
    }
    case 2:{
      kor = "수"
      break;
    }
    case 3:{
      kor = "목"
      break;
    }
    case 4:{
      kor = "금"
      break;
    }
    case 5:{
      kor = "토"
      break;
    }
    case 6:{
      kor = "일"
      break;
    }
    default:{
      break;
    }
  }
  return kor
}

export const convIntToHr = (integer) => {
	let _hour

  if(integer <= 11){
    _hour = `오전 ${integer}`
  }else if (integer == 12){
    _hour = "오후 12"
  } else{
    _hour = `오후 ${integer - 12}`
  }
  return _hour;
}

export const statusToKor = (status) => {
  let kor = "";
  switch (status) {
    case "recruiting":{
      kor = "모집 중인 스터디"
      break;
    }
    case "confirmed":{
      kor = "시작 대기 중인 스터디"
      break;
    }
    case "ongoing":{
      kor = "진행 중인 스터디"
      break;
    }
    case "canceled":{
      kor = "목"
      break;
    }
    case "not_matched":{
      kor = "NOT MATCHED"
      break;
    }
    case "finished":{
      kor = "지난 스터디"
      break;
    }
    default:{
      break;
    }
  }
  return kor
}

export const convertMoneyUnitKor = (integer) => {
  if(!integer){
    return null
  }

  const arr = integer.toString().split("")
  // console.log(arr);
  let currentIndex = arr.length - 1

  let str = ""
  for (var i = 1; i <= arr.length; i++) {
    if((i%3) ===0){
    str = `,${arr[currentIndex]}${str}`
    }else{
    str = `${arr[currentIndex]}${str}`
    }

    currentIndex = currentIndex - 1;
    if(currentIndex === -1){
      break;
    }
  }

  return str
}

export const levelList = [
  {
    txt:"Lv.5) Advanced (TOEFL: 28-30, TOEIC: 8, OPIC: AL) or 완벽하지 않지만 대부분의 전문적인 대화가 가능한 수준",
    value:5,
  },
  {
    txt:"Lv.4) Upper-Intermediate (TOEFL: 24-27, TOEIC: 7, OPIC: IH) or 친숙한 분야에 한해 전문적인 대화가 가능한 수준",
    value: 4
  },
  {
    txt:"Lv.3) Intermediate (TOEFL: 18-23, TOEIC: 6, OPIC: IL, IM) or 전문적인 대화는 어려우나 일상 대화는 가능한 수준",
    value:3,
  },
  {
    txt:"Lv.2) Pre-Intermediate (TOEFL: 10-17, TOEIC: 4-5, OPIC: NH) or 완벽하지 않지만 쉬운 일상 대화가 가능한 수준",
    value:2,
  },
  {
    txt:"Lv.1) Elementary (TOEFL: 0-9, TOEIC: 1-3, OPIC: NL,NH) or 자기소개 같이 아주 쉬운 대화가 가능한 수준",
    value:1,
  }
];


export const langList = [
  {
    txt: 'eng',
    value: "eng"
  },
  {
    txt: "kor", 
    value: "kor",
  },
  {
    txt: "chi", 
    value: "chi",
  }
]
