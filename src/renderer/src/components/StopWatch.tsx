import { useStudyDataStateStore } from '@renderer/store/store';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StopWatch = () => {
  const { StudyName, setStudyName } = useStudyDataStateStore();
  let [Hour, setHour] = useState<number>(0);
  let [Minute, setMinute] = useState<number>(0);
  let [Second, setSecond] = useState<number>(0);
  const today = dayjs();

  const navigate = useNavigate();

  const [isRunning, setIsRunning] = useState<boolean>();

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isRunning) {
      timer = setInterval(() => {
        setSecond((prevSecond) => {
          const newSecond = prevSecond + 1;
          if (newSecond >= 60) {
            setMinute((prevMinute) => {
              const newMinute = prevMinute + 1;
              if (newMinute >= 60) {
                setHour((prevHour) => prevHour + 1);
                return 0;
              }
              return newMinute;
            });
            return 0;
          }
          return newSecond;
        });
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
  const formatTime = (Time: number) => {
    return String(Time).padStart(2, '0');
  };

  const saveStudyDataHandler = () => {
    const year = today.get('year');
    const month = today.get('month') + 1;
    const day = today.get('day');
    console.log(`${today.get('year')} . ${today.get('month')} . ${today.get('day')}`);

    const studyData = {
      name: StudyName,
      second: Second,
      minute: Minute,
      hour: Hour,
      year: year,
      month: month,
      day: day
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
    console.log(existingDataStr);

    console.log('저장된 학습 데이터:', studies);
  };

  const deleteLocalStorageHandler = () => {
    StudyName.length !== 0
      ? confirm(`${StudyName} 을/를 지우시겠습니까?`)
        ? DeleteThisStudy()
        : null
      : null;
    console.log('스토리지 삭제 완료!');
  };

  const DeleteThisStudy = () => {
    alert(`${StudyName} 을/를 삭제되었습니다.`);
    setStudyName('');
    navigate('/');
  };

  return (
    <div className="stopwatch-container">
      <p className="study-title">{StudyName.length !== 0 ? StudyName : '공부할 것을 적어주세요'}</p>
      <p className="stopwatch">
        {formatTime(Hour)} : {formatTime(Minute)} : {formatTime(Second)}
      </p>
      <div className="stopwatch-controller">
        <button onClick={saveStudyDataHandler}>종료</button>
        <button onClick={toggleTimer}>{isRunning ? '정지' : '시작'}</button>
        <button onClick={deleteLocalStorageHandler}>삭제</button>
      </div>
    </div>
  );
};

export default StopWatch;
