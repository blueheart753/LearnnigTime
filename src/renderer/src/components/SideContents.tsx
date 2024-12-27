import { useNavigate } from 'react-router-dom';
import useStateStore from '@renderer/store/store';
import { memo } from 'react';

interface TextType {
  title: string;
  target_url: string;
}

const SideContents = (props: TextType) => {
  let { setMoveNavigateName, setNavigateTargetUrl } = useStateStore();
  const navigate = useNavigate();

  const moveFunc = (Link: string) => {
    setMoveNavigateName(props.title);
    setNavigateTargetUrl(Link);
    navigate(`/${Link}`);
  };

  return (
    <div className="side-contents">
      <button
        onClick={() => {
          moveFunc(props.target_url);
        }}
        className="move-btn"
      >
        {props.title}
      </button>
    </div>
  );
};

export default memo(SideContents);
