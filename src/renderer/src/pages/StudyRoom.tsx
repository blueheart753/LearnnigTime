import AsideBar from '@renderer/components/AsideBar';
import InputData from '@renderer/components/InputData';
import StopWatch from '@renderer/components/StopWatch';
import { useNavigateStateStore } from '@renderer/store/store';
import { useEffect } from 'react';

const StudyRoom = () => {
  const { setMoveNavigateName } = useNavigateStateStore();

  useEffect(() => {
    setMoveNavigateName('공부하기');
  }, []);

  return (
    <div className="main-box">
      <AsideBar />
      <div className="study-box">
        <InputData />
        <StopWatch />
      </div>
    </div>
  );
};

export default StudyRoom;
