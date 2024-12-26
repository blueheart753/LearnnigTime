import { create } from 'zustand';

type State = {
  moveNavigateNumber: number;
  updateMoveNavigateNumber: (number: number) => void;
  moveNavigateName: string;
  updateMoveNavigateName: (name: string) => void;
};

const useStateStore = create<State>((set) => ({
  moveNavigateNumber: 0,
  moveNavigateName: '',
  updateMoveNavigateNumber: (number) =>
    set(() => ({
      moveNavigateNumber: number
    })),
  updateMoveNavigateName: (name) =>
    set(() => ({
      moveNavigateName: name
    }))
}));

export default useStateStore;
