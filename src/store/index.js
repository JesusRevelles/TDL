import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { db } from './../plugins/firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      id: null,
      name: null,
      profile: null
    },
    loading: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            // AQUI ESTOY APARTE DE CREANDO EL USUARIO, AÑADIENDO DATOS BASICOS EN EL CLOUD DB
            const newUser = {
              id: user.uid,
              name: payload.name,
              profile: payload.profile,
              email: payload.email
            }
            const id = newUser.id
            db.collection('users').doc(`${id}`).set(newUser)
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              email: user.email
            }
            commit('setUser', newUser)
          })
    },
    autoSignIn ({commit}, payload) {

      db.collection('users').doc(payload.uid).get()
        .then((userdata) => {
          let userInfo = userdata.data()
          const newUser = {
            id: payload.uid,
            profile: userInfo.profile,
            email: userInfo.email,
            name: userInfo.name
          }
          commit('setUser', newUser)
        })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', {
        id: null,
        name: null,
        profile: null
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
  }
})
