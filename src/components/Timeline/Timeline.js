import React from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import "./style.css";

dayjs.extend(timezone);

const Timeline = ({earliest, latest, viewWidth}) => {
    const dayStart = dayjs(earliest).subtract(3, "day");
    const dayEnd = dayjs(latest).add(1, "month");
    const months = [];
    let days = [];
    let week = "";
    for (let day = dayStart; day.isBefore(dayEnd); day = day.add(1, "day")) {
        let label;
        switch (viewWidth) {
            case 10:
                label = "";
                break;
            case 20:
                if (week === "") {
                    week = day.startOf("week").format("DD");
                    label = day.startOf("week").format("DD");
                } else if (week === day.startOf("week").format("DD")) {
                    label = "";
                } else {
                    week = day.startOf("week").format("DD");
                    label = day.startOf("week").format("DD");
                }
                break;
            default:
                label = day.format("DD");
        }
        days.push(
            <div
                key={day.toISOString()}
                className="day"
                style={{ width: `${viewWidth}px` }}
            >
                {label}
            </div>
        );
        if (
            day.isSame(day.endOf("month"), "day") ||
            day.isSame(dayEnd.subtract(1, "day"), "day")
        ) {
            months.push(
                <div className="month" key={day.month()}>
                    <div>{day.format(dayjs.tz.guess() === "Asia/Tokyo" ? "MM月" : "MMM")}</div>
                    <div className="days">{days}</div>
                </div>
            );
            days = [];
        }
    }

    return <div className="timeline">{months}</div>;
}

export default Timeline;