import { useStudyDataStateStore, useTimerStateStore } from '@renderer/store/store';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StopWatch = () => {
  let { Hour, Minute, Second, setSecond } = useTimerStateStore();
  const { StudyName } = useStudyDataStateStore();
  const [hour, setHours] = useState<string>();
  const [minute, setMinutes] = useState<string>();
  const [second, setSeconds] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    setHours(String(Hour).padStart(2, '0'));
    setMinutes(String(Minute).padStart(2, '0'));
    setSeconds(String(Second).padStart(2, '0'));
  }, [Hour, Minute, Second]);

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

  const toggleTimer = () => {
    if (StudyName.length !== 0) {
      setIsRunning(!isRunning);
    } else {
      alert('어떤 걸 공부할지 적어주세요!');
    }
  };

  const saveStudyDataHandler = () => {
    const studyData = {
      name: StudyName,
      hour: hour,
      minute: minute,
      second: second
    };

    const existingDataStr = localStorage.getItem('studies');
    let studies = existingDataStr ? JSON.parse(existingDataStr) : [];

    if (StudyName.length !== 0 && Hour + Minute + Second !== 0) {
      studies.push(studyData);
      localStorage.setItem('studies', JSON.stringify(studies));
      navigate('/');
    } else {
      alert('데이터 저장에 실패했습니다.\n작성된 내용을 다시 확인해 주세요.');
    }

    console.log('저장된 학습 데이터:', studies);
  };

  // const deleteLocalStorageHandler = () => {
  //   localStorage.clear();
  //   console.log('스토리지 삭제 완료!');
  // };

  return (
    <div className="stopwatch-container">
      <p className="study-title">{StudyName.length !== 0 ? StudyName : '공부할 것을 적어주세요'}</p>
      <p className="stopwatch">
        {hour} : {minute} : {second}
      </p>
      <div className="stopwatch-controller">
        <button onClick={saveStudyDataHandler}>종료</button>
        <button onClick={toggleTimer}>{isRunning ? '정지' : '시작'}</button>
        {/* <button onClick={deleteLocalStorageHandler}>삭제</button> */}
      </div>
    </div>
  );
};

export default StopWatch;
