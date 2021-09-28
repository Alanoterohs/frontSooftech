<template>
  <div class="container is-fullhd">
    <div class="columns is-centered is-desktop">
    <div class="box">
      <h2 class="title ">Reserva</h2>
      
      <form class="columns is-desktop m-1" v-on:submit.prevent="addReservation">

          <div class="field is-expanded m-1">
            <label class="label">Nombre</label>
            <div class="control">
              <input v-model="reservationData.content" class="input" type="text" placeholder="Coloque su nombre" required>
            </div>
          </div>

          <div class="field is-expanded m-1">
            <label class="label">Fecha</label>
            <input class="input-date" v-model="reservationData.date" type="date" required>
          </div>

          <div class="field is-expanded m-1">
            <label class="label">Desde</label>
            <input class="input-date" v-model="reservationData.start"  type="time" required>    
          </div>

          <div class="field is-expanded m-1">
            <label class="label">Hasta</label>
            <input class="input-date" v-model="reservationData.end" name="dto" type="time" required>    
          </div>
      
          <div class="field is-expanded m-1">
            <label class="label">Enviar</label>
             <button class="button is-success">Reservar</button>
          </div>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment';
export default {
  
  name: "Form",
  data() {
  return {
      reservationData: {
          id: 3,
          content: '',
          date: '',
          start: '',
          end: '',
          schedule: '',
        },
    }
  },
  methods: {
    addReservation() {
      let data = {
        id: this.reservationData.id ++,
        content: this.reservationData.content,
        date: this.reservationData.date,
        start: this.reservationData.date + ' ' + this.reservationData.start,
        end: this.reservationData.date + ' ' +  this.reservationData.end,
        schedule: 'de ' + this.reservationData.start + ' a ' + this.reservationData.end,
      }
      this.$store.dispatch('addReservation', data);
      this.reservationData.content = ''; 
      this.reservationData.date = '';
      this.reservationData.start = '';
      this.reservationData.end = '';
      this.reservationData.schedule = '';
    }
  }
};
</script>

<style>

.input-date {
    align-items: center;
    border: 1px solid transparent;
    display: inline-flex;
    font-size: 1rem;
    height: 2.5em;
    line-height: 1.5;
    padding-bottom: calc(0.5em - 1px);
    padding-left: calc(0.75em - 1px);
    padding-right: calc(0.75em - 1px);
    padding-top: calc(0.5em - 1px);
    position: relative;
    vertical-align: top;
    background-color: white;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #4a4a4a;
    box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
    max-width: 100%;
    width: 100%;
}


.input-date:hover {
  border-color: #b5b5b5;
}
.input-date:focus {
    outline: none;
    border-color: #7957d5;
    box-shadow: 0 0 0 .125em rgb(121 87 213 / 25%);
}
input[type="time"]::-webkit-inner-spin-button,::-webkit-datetime-edit-fields-wrapper{
    filter: drop-shadow(16px 16px 20px rgb(191, 191, 191)) invert(70%);
}
input[type="time"]::-webkit-inner-spin-button,::-webkit-calendar-picker-indicator{
    filter: drop-shadow(16px 16px 20px rgb(191, 191, 191)) invert(70%);
}
input[type="time"]::-webkit-inner-spin-button,::-webkit-datetime-edit-minute-field{
    filter: drop-shadow(16px 16px 20px rgb(191, 191, 191)) invert(70%);
}
input[type="time"]::-webkit-inner-spin-button,::-webkit-datetime-edit-hour-field{
    filter: drop-shadow(16px 16px 20px rgb(191, 191, 191)) invert(70%);
}

input[type="time"]::before {
  background-color:pink;
  color: #363636;
  width: 15px;
  height: 20px;
  position: absolute;
  top: 12px;
  right: 6px;
  color: #999;
}
</style>
