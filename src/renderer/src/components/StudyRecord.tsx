import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const existingDataStr = localStorage.getItem('studies');
    if (existingDataStr) {
      const studyData = JSON.parse(existingDataStr);
      setStudyRecords(studyData);
    }
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return (
    <div className="study-record-box">
      <ul>
        {studyRecords.length !== 0 ? (
          studyRecords.map((el, idx) => (
            <li key={idx} className="study-data">
              <input type="checkbox" name="studyData" />
              <span>
                {el.name} - {formatTime(el.hour)}:{formatTime(el.minute)}:{formatTime(el.second)}
              </span>
            </li>
          ))
        ) : (
          <p>공부를 조금 해주새요...</p>
        )}
      </ul>
    </div>
  );
};

export default StudyRecord;
