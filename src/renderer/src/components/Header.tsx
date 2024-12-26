import dayjs from 'dayjs';

const Header = () => {
  const today = dayjs();
  const formatDate = (plusMinusDate: number) => {
    return `${today.get('month') + 1}월 ${today.get('D') + plusMinusDate}일`;
  };
  return (
    <header>
      <nav>
        <button>◀ {formatDate(-1)}</button>
        <button>{formatDate(0)}(오늘)</button>
        <button>{formatDate(1)} ▶</button>
      </nav>
    </header>
  );
};

export default Header;
