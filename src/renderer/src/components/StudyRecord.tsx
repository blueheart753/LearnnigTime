import { useEffect, useState } from 'react';
import AddStudyData from './AddStudyData';
import { useModalStateStore } from '@renderer/store/store';

interface StudyData {
  name: string;
  second: number;
  minute: number;
  hour: number;
  today: number;
  year: number;
  month: number;
  day: number;
}

const StudyRecord = () => {
  const [studyRecords, setStudyRecords] = useState<StudyData[]>([]);
  const { OpenModalFlag } = useModalStateStore();
  useEffect(() => {
    const existingDataStr = localStorage.getItem('studies');
    if (existingDataStr) {
      const studyData = JSON.parse(existingDataStr);
      setStudyRecords(studyData);
    }
  }, [OpenModalFlag]);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  const ConfirmDeleteStudyData = (el: StudyData) => {
    confirm(`"${el.name}" 을/를 삭제하시겠습니까?`)
      ? DeleteStudyData(el)
      : alert('삭제를 취소했습니다.');
  };

  const DeleteStudyData = (el: StudyData) => {
    const updatedRecords = studyRecords.filter((record) => record !== el);
    setStudyRecords(updatedRecords);
    alert(`${el.name} 을/를 삭제했습니다.`);
    localStorage.setItem('studies', JSON.stringify(updatedRecords));
  };

  return (
    <div className="study-record-box">
      <ul>
        {studyRecords.length !== 0 ? (
          studyRecords.map((el, idx) => (
            <li key={idx} className="study-data">
              <span>
                {el.name} - {formatTime(el.hour)}:{formatTime(el.minute)}:{formatTime(el.second)}
              </span>
              <button
                onClick={() => {
                  ConfirmDeleteStudyData(el);
                }}
                className="delete-study-data-btn"
              >
                삭제
              </button>
            </li>
          ))
        ) : (
          <p>공부를 조금 해주새요...</p>
        )}
        <AddStudyData />
      </ul>
    </div>
  );
};

export default StudyRecord;
