import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Div from '../components/lib/Div';
import Text from '../components/lib/Text';
import {LocaleConfig, Calendar} from 'react-native-calendars';
import {getCalendarAPI} from '../apis/memo';
import {setCalendarCurrentDate, setCalendarYear, setCalendarMonth, setCalendarMarkedDates} from '../reducers/memo';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
  today: 'Aujourd\'hui'
};

LocaleConfig.locales['kor'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['일','월','화','수','목','금','토'],
  today: '오늘'
};
LocaleConfig.defaultLocale = 'kor';

const CalendarScreen = (props) => {
  const dispatch = useDispatch();
  const calendar = useSelector((state:any) => state.memo.calendar); 

  useEffect(() => {
    getCalendarApiWrapper(0, 0); //init
  }, [])
  
  useEffect(() => {
  }, [])

  const getCalendarApiWrapper = (year:number, month: number) => {
    getCalendarAPI(year, month).then((json:any) => {
      if(json.success){
        dispatch(setCalendarCurrentDate(json.current_date));
        dispatch(setCalendarYear(json.yyyy)); //integer
        dispatch(setCalendarMonth(json.mm)); 

        const strArr = json.created_ats.map((number:number) => {
          return `${0}${number}`
        }).map((number:string) => {
          return number.slice(-2)
        })
        
        let converted = {}
        strArr.forEach((date:string) => {
          const mmStr = `0${json.mm}`.slice(-2)
          converted[`${json.yyyy}-${mmStr}-${date}`] = {
            marked:true, 
            dotColor: '#48b496', 
            selectedColor: "#28b496", 
            selected:true,
          }
        })
        console.log(converted);
        dispatch(setCalendarMarkedDates(converted));
      }
    });  
  }

  const onMonthChange = (data:any) => {
    getCalendarApiWrapper(data.year, data.month); //init
  }

  const openDaily = (dateString:string) => {
  }

  const Arrow = () => {
    return <Div><Text>arrow</Text></Div>
  }

  if (!calendar){
    return <></>
  }

	return <Div>
    <Div className="mt80">
    </Div>
    <Calendar
      markedDates={calendar.markedDates}
      // Initially visible month. Default = Date()
      current={calendar.currentDate}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2012-05-10'}
      onDayPress={(day) => {
        openDaily(day.dateString);
      }}
      onDayLongPress={(day) => {console.log('selected day', day)}}
      monthFormat={'yyyy MM'}
      onMonthChange={(data) => {
        onMonthChange(data)
      }}
      hideArrows={false}
      renderArrow={(direction) => (<Arrow/>)}
      hideExtraDays={true}
      disableMonthChange={true}
      firstDay={0}
      hideDayNames={false}
      showWeekNumbers={false}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      disableArrowLeft={false}
      disableArrowRight={false}
      disableAllTouchEventsForDisabledDays={true}
      renderHeader={(date) => {
        const header = date.toString('MMMM yyyy');
        return <Div><Text>{header}</Text></Div>}}
      enableSwipeMonths={true}    
    />
  </Div>
}

export default CalendarScreen;