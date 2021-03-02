import React, {useState,useEffect} from 'react';
import { Actions } from 'react-native-router-flux';

import Div from '../components/lib/Div';
import Text from '../components/lib/Text';

import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';

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
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    setYear(2021)
    setMonth(2);

    setTimeout(() => {
      setCurrentDate('2021-02-21');
      setMarkedDates({
        '2021-02-15': {selected: true, marked: true, selectedColor: 'red'},
        '2021-02-16': {marked: true},
        '2021-02-17': {marked: true, dotColor: 'red', activeOpacity: 0},
        '2021-02-18': {disabled: true, disableTouchEvent: true}
      })
    }, 1000)
  }, [])
  
  const goToSignup = () => {
    Actions.signup();
  }

  const onMonthChange = (data:any) => {
  }

  const openDaily = (dateString:string) => {
    const obj = dateString.split("-")
    const year = obj[0];
    const month = obj[1];
    const date = obj[2];
    Actions.pastDaily({obj});
  }

  const Arrow = () => {
    return <Div><Text>arrow</Text></Div>
  }

  if (!year){
    return <Div><Text>Loading.</Text></Div>
  }

	return <Div>
    <Div className="mt80">
    </Div>
    <Calendar
      markedDates={markedDates}
      // Initially visible month. Default = Date()
      current={currentDate}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2012-05-10'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      // Handler which gets executed on day press. Default = undefined
      onDayPress={(day) => {
        openDaily(day.dateString);
      }}
      // Handler which gets executed on day long press. Default = undefined
      onDayLongPress={(day) => {console.log('selected day', day)}}
      // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
      monthFormat={'yyyy MM'}
      // Handler which gets executed when visible month changes in calendar. Default = undefined
      onMonthChange={(data) => {
        onMonthChange(data)
        console.log('month changed', data)}
      }
      // Hide month navigation arrows. Default = false
      hideArrows={false}
      // Replace default arrows with custom ones (direction can be 'left' or 'right')
      renderArrow={(direction) => (<Arrow/>)}
      // Do not show days of other months in month page. Default = false
      hideExtraDays={true}
      // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
      // day from another month that is visible in calendar page. Default = false
      disableMonthChange={true}
      // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
      firstDay={0}
      // Hide day names. Default = false
      hideDayNames={false}
      // Show week numbers to the left. Default = false
      showWeekNumbers={false}
      // Handler which gets executed when press arrow icon left. It receive a callback can go back month
      onPressArrowLeft={subtractMonth => subtractMonth()}
      // Handler which gets executed when press arrow icon right. It receive a callback can go next month
      onPressArrowRight={addMonth => addMonth()}
      // Disable left arrow. Default = false
      disableArrowLeft={false}
      // Disable right arrow. Default = false
      disableArrowRight={false}
      // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
      disableAllTouchEventsForDisabledDays={true}
      // Replace default month and year title with custom one. the function receive a date as parameter.
      renderHeader={(date) => {
        const header = date.toString('MMMM yyyy');
        return <Div><Text>{header}</Text></Div>}}
        // Enable the option to swipe between months. Default = false
      enableSwipeMonths={true}    
    />
  </Div>
}

export default CalendarScreen;