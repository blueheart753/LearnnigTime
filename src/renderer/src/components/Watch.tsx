import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface StudyData {
  name: string;
  second: number;
  minute: number;
  hour: number;
}

const Watch = () => {
  const [studyRecords, setStudyRecords] = useState<StudyData[]>([]);
  const [Hour, setHour] = useState<number>(0);
  const [Minute, setMinute] = useState<number>(0);
  const [Second, setSecond] = useState<number>(0);

  useEffect(() => {
    const existingDataStr = localStorage.getItem('studies');
    if (existingDataStr) {
      const studyData = JSON.parse(existingDataStr);
      setStudyRecords(studyData);
    }
  }, []);

  useEffect(() => {
    const totalSeconds = studyRecords.reduce((sum, record) => sum + record.second, 0);
    const totalMinute = studyRecords.reduce((sum, record) => sum + record.minute, 0);
    const totalHour = studyRecords.reduce((sum, record) => sum + record.hour, 0);
    setSecond(totalSeconds);
    setMinute(totalMinute);
    setHour(totalHour);
  }, [studyRecords]);

  const navigate = useNavigate();
  const moveFunc = () => {
    navigate('/StudyRoom');
  };

  const formatTime = (Time: number) => {
    return String(Time).padStart(2, '0');
  };

  return (
    <button className="watch-button" onClick={moveFunc}>
      <p className="study-full-time">
        {formatTime(Hour)}시간 {formatTime(Minute)}분 {formatTime(Second)}초
      </p>
      <p className="study-full-time-title">공부했어요!!</p>
    </button>
  );
};

export default Watch;
