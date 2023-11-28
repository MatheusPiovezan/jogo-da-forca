export interface GameData {
    keyboardLetter: any;
    won: boolean;
    life: number;
    category: { arr: string[] } | null;
    secretWord: string;
    word: string[];
    correctLetters: string[];
    kickedLetters: string[];
    modalActive: boolean;
    NormalizeLetter?: any;
    ValidateDisplayedWord?: any;
    toggleModal?: any;
  }
  