<script>
export default {
  data() {
    return {
      name: 'Joe Doe',
      status: 'active',
      tasks: ['Task one', 'Task two', 'Task three'],
      link: 'https://google.com',
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else if (this.status === 'pending') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1>
  <br>
  <p v-if="status === 'active'">User is active!</p>
  <p v-else-if="status === 'pending'">User is panding</p>
  <p v-else="status">User is inactive!</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Click for Google</a>
  <br>
  <!--<button v-on:click="toggleStatus">Change Status</button>-->
  <button @click="toggleStatus">Change Status</button>
</template>
