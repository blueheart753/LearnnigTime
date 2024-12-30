import { useNavigate } from 'react-router-dom';
import SideContents from './SideContents';
import { useEffect } from 'react';
import { useNavigateStateStore } from '@renderer/store/store';

const AsideBar = () => {
  const SideContent = [
    { title: '메인', target_url: '' },
    { title: '대시보드', target_url: 'DashBoard' }
  ];

  let { moveNavigateName, navigateTargetUrl, setMoveNavigateName } = useNavigateStateStore();
  const navigate = useNavigate();

  useEffect(() => {
    SideContent.map((el) => {
      if (el.target_url == navigateTargetUrl) {
        setMoveNavigateName(el.title);
      }
    });
  }, []);

  const movePrev = () => {
    navigate(-1);
  };
  const moveNext = () => {
    navigate(+1);
  };

  return (
    <aside>
      <div className="prev-next-box">
        <button onClick={movePrev}>◀</button>
        <span>{moveNavigateName}</span>
        <button onClick={moveNext}>▶</button>
      </div>
      {SideContent.map((el, idx) => (
        <SideContents title={el.title} target_url={el.target_url} key={idx} />
      ))}
    </aside>
  );
};

export default AsideBar;
