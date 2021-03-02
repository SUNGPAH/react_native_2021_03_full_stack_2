import firebase from 'react-native-firebase';
import {
  setRegistrationToken,
} from '../actions';
import store from '../config/store';

const getState = store.getState;
const dispatch = store.dispatch;

class FCMListener {
  async checkPermission(jwtToken) {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken(jwtToken);
    } else {
      this.requestPermission(jwtToken);
    }
  }

  async requestPermission(jwtToken) {
    try {
      await firebase.messaging().requestPermission();
      this.getToken(jwtToken);
    } catch (error) {
      console.log('permission rejected');
    }
  }

  async getToken(jwtToken) {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      dispatch(setRegistrationToken(jwtToken, fcmToken));
    }
  }

  async createNotificationListeners() {
    //앱이 foreground, background에서 실행 중일때, push 알림을 클릭하여 열 때,
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened((notificationOpen) => {
        this.receiveNotification(notificationOpen.notification.data);
      });

    const notificationOpen = await firebase
      .notifications()
      .getInitialNotification();
    //앱이 종료된 상황에서 push 알림을 클릭하여 열 때
    if (notificationOpen) {
      this.receiveNotification(notificationOpen.notification.data);
    }
  }

  async initialize(jwtToken) {
    const channel = new firebase.notifications.Android.Channel(
      'TurnChat',
      'TurnChat',
      firebase.notifications.Android.Importance.High,
    ).setDescription('TurnChat의 다양한 소식을 받아보실 수 있습니다.');
    firebase.notifications().android.createChannel(channel);

    this.checkPermission(jwtToken);

    this.createNotificationListeners();
  }

  receiveNotification(data) {
    console.log(data);
    const clickAction = data.click_action;
    const payload = JSON.parse(data.payload);
    return;
  }

  initBadgeNum() {
    firebase.notifications().setBadge(0);
    firebase.notifications().removeAllDeliveredNotifications();
  }

  removeListeners() {
    this.notificationOpenedListener();
  }
}

export default new FCMListener();
