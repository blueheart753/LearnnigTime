import { useModalStateStore } from '@renderer/store/store';
import Modal from './AddStudyDataModal';

const AddStudyData = () => {
  const { OpenModalFlag, setOpenModalFlag } = useModalStateStore();
  return (
    <div className="add-study-box">
      <button onClick={() => setOpenModalFlag(!OpenModalFlag)} className="add-study-btn">
        공부 내역 추가
      </button>
      {OpenModalFlag ? <Modal /> : null}
    </div>
  );
};

export default AddStudyData;
