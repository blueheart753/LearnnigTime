import { create } from 'zustand';

export type NavigateState = {
  moveNavigateName: string;
  setMoveNavigateName: (name: string) => void;
  navigateTargetUrl: string;
  setNavigateTargetUrl: (url: string) => void;
};

export type TimerState = {
  Second: number;
  setSecond: (second: number) => void;
};

export type StudyData = {
  StudyName: string;
  setStudyName: (name: string) => void;
};

export type ModalState = {
  OpenModalFlag: boolean;
  setOpenModalFlag: (openModalFlag: boolean) => void;
};

const useNavigateStateStore = create<NavigateState>((set) => ({
  moveNavigateName: '',
  setMoveNavigateName: (name) => set({ moveNavigateName: name }),
  navigateTargetUrl: '',
  setNavigateTargetUrl: (url) => set({ navigateTargetUrl: url })
}));

const useTimerStateStore = create<TimerState>((set) => ({
  Second: 0,
  setSecond: (second) => set({ Second: second })
}));

const useStudyDataStateStore = create<StudyData>((set) => ({
  StudyName: '',
  setStudyName: (name) => set({ StudyName: name })
}));

const useModalStateStore = create<ModalState>((set) => ({
  OpenModalFlag: false,
  setOpenModalFlag: (openModalFlag) => set({ OpenModalFlag: openModalFlag })
}));

export { useNavigateStateStore, useTimerStateStore, useStudyDataStateStore, useModalStateStore };
