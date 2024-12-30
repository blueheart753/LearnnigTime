import AsideBar from '@renderer/components/AsideBar';
import { useTimerStateStore } from '@renderer/store/store';
import { useEffect, useState } from 'react';

const StudyRoom = () => {
  let { Second, setSecond } = useTimerStateStore();
  const [isRunning, setIsRunning] = useState<boolean>();

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSecond(Second++);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  // const toggleTimer = () => {
  //   setIsRunning(!isRunning);
  // };
  return <AsideBar />;
};

export default StudyRoom;
