import { useTimerStateStore } from '@renderer/store/store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Watch = () => {
  let { Hour, Minute, Second } = useTimerStateStore();
  const [hour, setHours] = useState<string>();
  const [minute, setMinutes] = useState<string>();
  const [second, setSeconds] = useState<string>();

  useEffect(() => {
    setHours(String(Hour).padStart(2, '0'));
    setMinutes(String(Minute).padStart(2, '0'));
    setSeconds(String(Second).padStart(2, '0'));
  }, [Hour, Minute, Second]);

  const navigate = useNavigate();
  const moveFunc = () => {
    navigate('/StudyRoom');
  };

  return (
    <button className="watch-button" onClick={moveFunc}>
      <p className="study-full-time">
        {hour}시간 {minute}분 {second}초
      </p>
      <p className="study-full-time-title">공부했어요!!</p>
    </button>
  );
};

export default Watch;
