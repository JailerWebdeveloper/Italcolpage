import { create } from "zustand";

 export const userBearstore = create((set)=> ({
    bears:2,
    llamas:0,

    increasebears: () => set(state => ({bears: state.bears + 1})),
    increaseLlamas: () => set(state => ({llamas: state.llamas + 1})),
    decreasebears: (by) => set(state => ({bears: state.bears - by})),
    decreaseLlamas: () => set(state => ({llamas: state.llamas - 1})),
    removeall: () => set(state => ({bears: 0, llamas: 0}))
}))
