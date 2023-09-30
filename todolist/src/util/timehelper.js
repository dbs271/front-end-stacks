import { useEffect, useState } from "react";

const TimeHelper = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const Day = date.getDate();
  const Week = date.getDay();

  const DaysWeek = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  const CurrentDayWeek = DaysWeek[Week];

  const NowDate = `${Year} 년 ${Month} 월 ${Day} 일`;

  return { NowDate, CurrentDayWeek };
};

export default TimeHelper;
