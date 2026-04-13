import { getRandomNumber } from "@/utils/random";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GameStore {
  numbers: number[];
  number: string;
  isActiveTimer: boolean;
  level: number;
  incrementLevel: () => void;
  resetLevel: () => void;
  startTimer: () => void;
  stopTimer: () => void;
  generateNumber: () => void;
  addNumber: (newNumber: number) => void;
  deleteNumbers: () => void;
  deleteLastNumber: () => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (setStore) => {
      return {
        numbers: [],
        number: "0",
        isActiveTimer: true,
        level: 1,

        startTimer: () => {
          setStore(() => {
            return { isActiveTimer: true };
          });
        },

        stopTimer: () => {
          setStore(() => {
            return { isActiveTimer: false };
          });
        },

        addNumber: (newNumber: number) => {
          setStore((store) => {
            return { numbers: [...store.numbers, newNumber] };
          });
        },
        deleteNumbers: () => {
          setStore(() => {
            return {
              numbers: [],
            };
          });
        },
        deleteLastNumber() {
          setStore((store) => {
            return { numbers: store.numbers.slice(0, -1) };
          });
        },
        generateNumber: () => {
          setStore((store) => {
            const randomNumber = getRandomNumber(store.level);
            return { number: randomNumber };
          });
        },

        incrementLevel: () => {
          setStore((store) => {
            return {
              level: store.level + 1,
            };
          });
        },

        resetLevel: () => {
          setStore(() => {
            return {
              level: 1,
            };
          });
        },
      };
    },
    { name: "Numbers" },
  ),
);
