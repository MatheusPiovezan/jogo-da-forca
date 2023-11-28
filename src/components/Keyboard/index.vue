<template>
  <section>
    <div v-for="item in keyboardLetter" v-bind:key="item">
      <button
        v-for="letter of item"
        v-bind:class="{
          'btn-success': correctLetters.includes(letter),
          'btn-danger':
            !correctLetters.includes(letter) && kickedLetters.includes(letter),
        }"
        v-bind:key="letter"
        v-bind:disabled="kickedLetters.includes(letter)"
        v-on:click="Kick($event)"
      >
        {{ letter }}
      </button>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: "Keyboard",
  props: ["keyboardLetter", "correctLetters", "kickedLetters", "Kick"],
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.8rem;

  div {
    button {
      all: unset;
      height: 40px;
      width: 40px;
      margin: 0 0.25rem 0 0.25rem;
      font-size: 1.4rem;
      text-align: center;
      background-color: #fff;
      border: 1px solid transparent;
      border-color: #ccc;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
}

.btn-success {
  background-color: #198754;
  color: #fff;
}
.btn-danger {
  background-color: #dc3545;
  color: #fff;
}
</style>
