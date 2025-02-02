const formatMinute = (second: number) => {
  const minute = Math.floor(second / 60);
  return { minute };
};

const formatHour = (minute: number) => {
  const hour = Math.floor(minute / 60);
  return { hour };
};

export { formatMinute, formatHour };
