import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
} from "date-fns";

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const header = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <Row className="monthRow">
        <Col className="monthNavLeft">
          <i className="fas fa-chevron-left" onClick={prevMonth}></i>
        </Col>
        <Col className="monthTitle">
          <span>{format(currentMonth, dateFormat)}</span>
        </Col>
        <Col className="monthNavRight">
          <i className="fas fa-chevron-right" onClick={nextMonth}></i>
        </Col>
      </Row>
    );
  };

  const weekdays = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const renderDays = days.map((day) => {
      return <Col className="weekdayCell">{day}</Col>;
    });

    return <Row>{renderDays}</Row>;
  };

  const arr = [
    { date: "2020/07/11", title: "hehe" },
    { date: "2020/07/11", title: "same" },
    { date: "2020/07/12", title: "hhaaa" },
    { date: "2020/07/13", title: "hihi" },
  ];

  const cells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    let day = startDate;
    let days = [];
    const rows = [];

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        days.push(
          <Col
            className={`dateCell ${
              !isSameMonth(day, monthStart)
                ? "dateDisabled"
                : isSameDay(day, selectedDate)
                ? "dateSelected"
                : ""
            }`}
          >
            <span>{format(day, dateFormat)}</span>
            {matchDay(day, arr)}
          </Col>
        );
        day = addDays(day, 1);
      }

      rows.push(<Row>{days}</Row>);
      days = [];
    }
    return <div>{rows}</div>;

    function matchDay(d, a) {
      let bool = false;
      let idx = [];

      a.forEach((e, i) => {
        if (isSameDay(d, new Date(a[i].date))) {
          bool = true;
          idx.push(i);
        }
      });

      if (bool) {
        let arrr = a.filter((e, i) => idx.includes(i));
        return arrr.map((e) => <div>{e.title}</div>);
      }
      return <></>;
    }
  };

  return (
    <div>
      <Container className="calendarContainer">
        <div>{header()}</div>
        <div>{weekdays()}</div>
        <div>{cells()}</div>
      </Container>
    </div>
  );
}

export default Calendar;
