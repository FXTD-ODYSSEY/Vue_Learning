<template>
  <div>
    <p>click {{ $store.state.count }} times ,count is {{ evenOrOdd }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

import {mapState,mapGetters,mapActions} from 'vuex';

export default {
 
  computed: {
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])

    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd  
    // }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    },
    incrementIfOdd() {
      this.$store.dispatch('incremetnIfOdd')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    }
  }
};
</script>

<style>
</style>
