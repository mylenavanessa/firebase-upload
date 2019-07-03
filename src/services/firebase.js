import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBuEk89d5dVOvdKpKi4oaJ7pItdzkl8M1g",
  authDomain: "chat-deb06.firebaseapp.com",
  databaseURL: "https://chat-deb06.firebaseio.com/",
  projectId: "chat-deb06",
  storageBucket: "chat-deb06.appspot.com",
  messagingSenderId: "1051051737383",
  appId: "1:1051051737383:web:4893a87aff79525c"
};
// Initialize Firebase
export default function () {
  firebase.initializeApp(firebaseConfig)
}