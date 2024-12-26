import { useNavigate } from 'react-router-dom';

interface TextType {
  current_title: string;
  title: string;
  target_url: string;
}

const SideContents = (props: TextType) => {
  const navigate = useNavigate();
  const moveFunc = (Link: string) => {
    navigate(`/${Link}`);
  };

  const movePrev = () => {
    navigate(-3);
  };
  const moveNext = () => {
    navigate(+1);
  };
  return (
    <div className="side-contents">
      <div className="prev-next-box">
        <button onClick={movePrev}>◀</button>
        <span>{props.current_title}</span>
        <button onClick={moveNext}>▶</button>
      </div>
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

export default SideContents;
