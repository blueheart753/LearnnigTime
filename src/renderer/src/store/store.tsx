import { create } from 'zustand';

type State = {
  moveNavigateName: string;
  setMoveNavigateName: (name: string) => void;
  navigateTargetUrl: string;
  setNavigateTargetUrl: (url: string) => void;
};

const useStateStore = create<State>((set) => ({
  moveNavigateName: '',
  setMoveNavigateName: (name: string) =>
    set(() => ({
      moveNavigateName: name
    })),
  navigateTargetUrl: '',
  setNavigateTargetUrl: (url: string) =>
    set(() => ({
      navigateTargetUrl: url
    }))
}));

export default useStateStore;
