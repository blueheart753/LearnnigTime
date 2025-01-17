import { useStudyDataStateStore } from '@renderer/store/store';
import { useRef } from 'react';

const InputData = () => {
  const studyName = useRef<HTMLInputElement | null>(null);
  const { setStudyName } = useStudyDataStateStore();

  const submit = () => {
    if (studyName.current) {
      setStudyName(studyName.current.value.replaceAll(' ', '').trim());
      console.log(studyName.current.value);
    }
  };

  return (
    <section className="input-container">
      <div className="input-box">
        <input type="text" ref={studyName} placeholder="어떤 것을 공부하는 지 적어주세요!" />
        <button onClick={submit}>작성완료</button>
      </div>
    </section>
  );
};

export default InputData;
