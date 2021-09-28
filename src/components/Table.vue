<template>
  <div class="hero-body">
    <div class="container has-text-centered">
            <div class="box">
                <table class="table is-striped">
                    <thead>
                        <tr>
                        <th width="500">Nombre</th>
                        <th width="500">Horario</th>
                        <th width="100">Accion</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr v-for="(data, index) in this.$store.state.dataUsers" :key= "data.id">
                        <th>{{ data.content }}</th>
                        <td>{{ data.schedule }}</td>
                        <td><button @click="deleteReservation(index)"><b-icon icon="delete"></b-icon></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                data: this.$store.state.dataUsers,
            }
        },
        methods: {
            deleteReservation(index) {
                this.$store.dispatch('removeReservation', index);
            },
        },
    }
</script>