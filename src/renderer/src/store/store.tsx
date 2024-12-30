import { create } from 'zustand';

type NavigateState = {
  moveNavigateName: string;
  setMoveNavigateName: (name: string) => void;
  navigateTargetUrl: string;
  setNavigateTargetUrl: (url: string) => void;
};

type TimerState = {
  Hour: number;
  setHour: (hour: number) => void;
  Minute: number;
  setMinute: (minute: number) => void;
  Second: number;
  setSecond: (second: number) => void;
};

const useNavigateStateStore = create<NavigateState>((set) => ({
  moveNavigateName: '',
  setMoveNavigateName: (name) => set({ moveNavigateName: name }),
  navigateTargetUrl: '',
  setNavigateTargetUrl: (url) => set({ navigateTargetUrl: url })
}));

const useTimerStateStore = create<TimerState>((set) => ({
  Hour: 0,
  setHour: (hour) => set({ Hour: hour }),
  Minute: 0,
  setMinute: (minute) => set({ Minute: minute }),
  Second: 0,
  setSecond: (second) => set({ Second: second })
}));

export { useNavigateStateStore, useTimerStateStore };
