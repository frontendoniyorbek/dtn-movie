import { IMovie } from "@/interfaces/app.interfaces";
import { create } from "zustand";

interface InfoState {
  modal: boolean;
  currentMovi: IMovie;
  setModal:(bool:boolean) => void;
  setCurrentMovie:(movie: IMovie) => void;
}

export const useInfoStore = create<InfoState>()((set) => ({
  modal: false,
  currentMovi: {} as IMovie,
  setModal: (bool: boolean) => set(state => ({ ...state, modal: bool })),
  setCurrentMovie: (movie: IMovie) => set(state => ({...state, currentMovi: movie})),
}));
