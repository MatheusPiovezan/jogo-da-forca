<template>
  <Gallows v-bind:word="word" v-bind:category="category" v-bind:life="life" />
  <keyboard
    v-bind:keyboardLetter="keyboardLetter"
    v-bind:correctLetters="correctLetters"
    v-bind:kickedLetters="kickedLetters"
    v-bind:Kick="Kick"
  />
  <Modal @close="toggleModal" :modalActive="modalActive">
    <div class="modal-content">
      <h1 v-if="won">Parabéns, você ganhou!</h1>
      <h1 v-else>Você foi enforcado!</h1>
    </div>
  </Modal>
</template>

<script>
import Keyboard from "./components/Keyboard/index.vue";
import Gallows from "./components/Gallows/index.vue";
import list from "./db/list.json";
import keyboardLetter from "./db/keyboardLetter.json";
import Modal from "./components/Modal/index.vue";
import { ref } from "vue";

export default {
  components: {
    Keyboard,
    Gallows,
    Modal,
  },
  data: function () {
    return {
      keyboardLetter: keyboardLetter,
      won: true,
      life: 6,
      category: "",
      secretWord: "",
      word: [],
      correctLetters: [],
      kickedLetters: [],
      modalActive: ref(false),
    };
  },
  methods: {
    toggleModal() {
      this.modalActive = !this.modalActive;
    },
    Kick(e) {
      const letter = e.srcElement.textContent;

      if (this.secretWord.includes(letter)) {
        this.correctLetters.push(letter);
        this.kickedLetters.push(letter);
        this.ValidateWord();
      } else {
        this.kickedLetters.push(letter);
        this.life--;
      }

      if (this.word.join("") === this.secretWord) {
        this.toggleModal();
      }

      if (this.life === 0) {
        this.won = false;
        this.toggleModal();
      }
    },
    ValidateWord() {
      this.word = [];

      this.secretWord.split("").forEach((letter) => {
        if (this.correctLetters.includes(letter)) {
          this.word.push(letter);
        } else {
          this.word.push("_");
        }
      });
    },
  },
  created: function () {
    this.category = list[Math.floor(Math.random() * list.length)];

    this.secretWord =
      this.category.arr[
        Math.floor(Math.random() * this.category.arr.length)
      ].toLocaleLowerCase();
    console.log(this.secretWord);

    this.ValidateWord();
  },
};
</script>

<style lang="scss" scoped>
.modal-content {
  display: flex;
  align-content: center;
  justify-content: center;

  h1 {
    margin: 0 0 5rem 0;
  }
}
</style>
