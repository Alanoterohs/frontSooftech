<template>
  <div id="app" >
    <div>
      <Form
      />
    </div>
    <div>
      <Timeline/>
    </div>
    <div>
      <Table/>
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue'
  import Table from './components/Table.vue';
import Timeline from './components/Timeline.vue';
export default {
  name: 'App',
  components: {
    Timeline,
    Form,
    Table,
  }
}
</script>

<style>
</style>
