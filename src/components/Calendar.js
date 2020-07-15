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
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  parse,
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

  console.log(currentMonth);
  const header = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <Row>
        <Col>
          <i className="fas fa-chevron-left" onClick={prevMonth}></i>
        </Col>
        <Col>
          <span>{format(currentMonth, dateFormat)}</span>
        </Col>
        <Col>
          <i className="fas fa-chevron-right" onClick={nextMonth}></i>
        </Col>
      </Row>
    );
  };

  const weekdays = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const renderDays = days.map((day) => {
      return <Col>{day}</Col>;
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
    
    function days() {
      return eachDayOfInterval({ start: startDate, end: endDate }).map(
        (day) => {
          return (
            <Col
              className={`dateCell ${
                !isSameMonth(day, monthStart)
                  ? "dateDisabled"
                  : isSameDay(day, selectedDate)
                  ? "selected"
                  : ""
              }`}
            >
              <span>{format(day, dateFormat)}</span>
              {matchDay(day, arr)}
            </Col>
          );
        }
      );
    }

    return <Row>{days()}</Row>;
  };

  return (
    <div>
      <Container>
        Calendar
        <div>{header()}</div>
        <div>{weekdays()}</div>
        <div>{cells()}</div>
      </Container>
    </div>
  );
}

export default Calendar;
