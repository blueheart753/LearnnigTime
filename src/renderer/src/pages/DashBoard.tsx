import AsideBar from '@renderer/components/AsideBar';
import Header from '@renderer/components/Header';

const DashBoard = () => {
  return (
    <section>
      <div className="dash-board-box">
        <AsideBar />
        <Header />
      </div>
    </section>
  );
};

export default DashBoard;
