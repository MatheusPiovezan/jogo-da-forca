<template>
  <Gallows v-bind:word="word" v-bind:category="category" v-bind:life="life" />
  <keyboard
    v-bind:keyboardLetter="keyboardLetter"
    v-bind:correctLetters="correctLetters"
    v-bind:kickedLetters="kickedLetters"
    v-bind:Kick="Kick"
  />
</template>

<script>
import Keyboard from "./components/Keyboard/index.vue";
import Gallows from "./components/Gallows/index.vue";
import list from "./db/list.json";
import keyboardLetter from "./db/keyboardLetter.json";

export default {
  components: {
    Keyboard,
    Gallows,
  },
  data: function () {
    return {
      keyboardLetter: keyboardLetter,
      life: 6,
      category: "",
      secretWord: "",
      word: [],
      correctLetters: [],
      kickedLetters: [],
    };
  },
  methods: {
    Kick(e) {
      const letter = e.srcElement.textContent;

      console.log(this.life);
      if (this.life === 0) {
        return console.log("perdeu");
      }

      if (this.secretWord.includes(letter)) {
        this.correctLetters.push(letter);
        this.kickedLetters.push(letter);
        this.ValidateWord();
      } else {
        this.kickedLetters.push(letter);
        this.life--;
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

<style scoped></style>
