import Vue from 'vue'
import firebase from 'firebase/app'
// import 'firebase/app'
import 'firebase/firestore'
import VueFirestore from 'vue-firestore'

Vue.use(VueFirestore)

export const app = firebase.initializeApp({
  apiKey: 'AIzaSyCcZU82iQ5L2odXt1wIuVrb4vWqJrwTQUY',
  authDomain: 'todovue-c895e.firebaseapp.com',
  databaseURL: 'https://todovue-c895e.firebaseio.com',
  projectId: 'todovue-c895e'
})

const settings = {
  timestampsInSnapshots: true
}
firebase.firestore().settings(settings)
export const db = firebase.firestore()

// export const db = firebase.firestore()
export const usersCollection = firebase.firestore().collection('users')

// export const messagesCollection = firebase.firestore().collection('messages');
// export const typingStatus = firebase.firestore().collection('typing-status');
// export const likesCollection = firebase.firestore().collection('likes');
