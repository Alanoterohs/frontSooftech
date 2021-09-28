import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      dataUsers: [
          {
            id: 1,
            content: 'Alvarado, Eduardo Alfonso',
            date: '2020-09-28',
            start: '2020-09-28 10:00', 
            end: '2020-09-28 10:30',
            schedule: 'de 09:30 a 10:30'
          },
          {
            id: 2,
            content: 'Acuña López, Juliana',
            date: '2020-09-28',
            start: '2020-09-28 11:00',
            end: '2020-09-28 11:45',
            schedule: 'de 11:00 a 12:30'
          },
        ]    
  },
  actions: {
    addReservation({  state }, data) {
      state.dataUsers.push(data);
    },
    removeReservation({ state }, index) {
      let filter = state.dataUsers.filter((data, i) => i !== index);
      console.log(filter);
      this.state.dataUsers = filter;   
    },
  },
})