import React, { useState, useEffect } from "react";
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
  const [eventsList, setEventsList] = useState(null);

  const loadEvents = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/events`;
    const data = await fetch(url);
    const result = await data.json();

    setEventsList(result);
  };

  useEffect(() => {
    loadEvents()
  }, [])

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
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const renderDays = days.map((day) => {
      return <Col className="weekdayCell">{day}</Col>;
    });

    return <Row>{renderDays}</Row>;
  };

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
            {matchDay(day, eventsList)}
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
        let filteredEventsList = a.filter((e, i) => idx.includes(i));
        return filteredEventsList.map((e) => <div>{e.title}</div>);
      }
      return <></>;
    }
  };

  if (eventsList === null) {
    return <div>Loading...</div>;
  }

  console.log(eventsList);

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
