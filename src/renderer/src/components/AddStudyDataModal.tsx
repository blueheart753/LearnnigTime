import { useModalStateStore } from '@renderer/store/store';
import dayjs from 'dayjs';
import { useRef } from 'react';
const Modal = () => {
  const { OpenModalFlag, setOpenModalFlag } = useModalStateStore();
  const studyName = useRef<HTMLInputElement | null>(null);
  const inputHour = useRef<HTMLInputElement | null>(null);
  const inputMinute = useRef<HTMLInputElement | null>(null);
  const inputSecond = useRef<HTMLInputElement | null>(null);

  const closeModal = () => {
    setOpenModalFlag(!OpenModalFlag);
  };

  const saveStudyDataHandler = () => {
    const today = dayjs();
    try {
      const year = today.get('year');
      const month = today.get('month') + 1;
      const day = today.get('date');

      if (
        !studyName.current ||
        !inputHour.current ||
        !inputMinute.current ||
        !inputSecond.current
      ) {
        alert('모든 필드를 입력해주세요.');
        return;
      }

      const studyData = {
        name: studyName.current.value,
        hour: parseInt(inputHour.current.value, 10),
        minute: parseInt(inputMinute.current.value, 10),
        second: parseInt(inputSecond.current.value, 10),
        year: year,
        month: month,
        day: day
      };

      if (isNaN(studyData.hour) || isNaN(studyData.minute) || isNaN(studyData.second)) {
        alert('올바른 숫자를 입력해주세요.');
        return;
      }

      const existingDataStr = localStorage.getItem('studies');
      let studies = existingDataStr ? JSON.parse(existingDataStr) : [];

      studies.push(studyData);
      localStorage.setItem('studies', JSON.stringify(studies));

      setOpenModalFlag(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="modal-wrap">
      <div className="modal-container">
        <input
          type="text"
          required
          placeholder="공부명을 입력해주세요"
          className="modal-input"
          ref={studyName}
        />
        <div className="study-time-input-container">
          <input required type="number" max={23} min={0} placeholder="시간" ref={inputHour} />
          <input required type="number" max={59} min={0} placeholder="분" ref={inputMinute} />
          <input required type="number" max={59} min={0} placeholder="초" ref={inputSecond} />
        </div>
        <div className="modal-btn-container">
          <button className="modal-btn modal-btn-accept" onClick={() => saveStudyDataHandler()}>
            추가
          </button>
          <button className="modal-btn modal-btn-cancel" onClick={closeModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
