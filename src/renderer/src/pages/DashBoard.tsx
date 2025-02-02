import AsideBar from '@renderer/components/AsideBar';
import StudyRecord from '@renderer/components/StudyRecord';

const DashBoard = () => {
  return (
    <section className="dashboard">
      <div className="main-box">
        <AsideBar />
        <StudyRecord />
      </div>
    </section>
  );
};

export default DashBoard;
