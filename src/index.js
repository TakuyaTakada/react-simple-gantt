import React, { useState } from "react";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import "./style.css";
import useDimensions from "react-cool-dimensions";
import Timeline from "./components/Timeline/Timeline";
import TaskBar from "./components/TaskBar/TaskBar";

dayjs.extend(timezone);

const SimpleGantt = ({ tasks, viewMode, onClick, height, headerWidth }) => {
    const { ref } = useDimensions();
    const [taskWidth, setTaskWidth] = useState(
        headerWidth ? headerWidth : 140
    );

    const handleWidth = (width) => setTaskWidth(width);

    let viewWidth;
    switch (viewMode) {
        case "Week":
            viewWidth = 20;
            break;
        case "Month":
            viewWidth = 10;
            break;
        default:
            viewWidth = 30;
    }

    const sortedTasks = tasks.sort((a, b) => {
        const aStart = dayjs(a.start)
        const bStart = dayjs(b.start)
        return aStart.diff(bStart)
    })
    const latestTask = tasks.reduce((a, b) => {
        const aEnd = dayjs(a.end)
        const bEnd = dayjs(b.end)
        return aEnd.isAfter(bEnd) ? a : b
    })

    return (
        <div className="main" style={{height: height ? height : "300px"}}>
            <table>
                <tbody>
                    <tr className="headerRow">
                        <td
                            ref={ref}
                            className="headerCol"
                            style={{ width: taskWidth }}
                            onClick={() =>
                                handleWidth(ref && ref.current ? ref.current.offsetWidth : 140)
                            }
                        >
                            {dayjs.tz.guess() === "Asia/Tokyo" ? "タスク" : "Task"}
                        </td>
                        <td className="timelineCol">
                            <Timeline earliest={sortedTasks[0].start} latest={latestTask.end} viewWidth={viewWidth} />
                        </td>
                    </tr>
                    <>
                        {sortedTasks.map((task, idx) => {
                            return (
                                <tr key={idx} className="dataRow">
                                    <td
                                        className="data"
                                        style={{ width: taskWidth }}
                                        onClick={onClick ? () => onClick(task) : () =>  console.log(task)}
                                    >
                                        {task.name}
                                    </td>
                                    <td>
                                        <TaskBar task={task} edge={sortedTasks[0].start} viewWidth={viewWidth}/>
                                    </td>
                                </tr>
                            )
                        })}
                    </>
                </tbody>
            </table>
        </div>
    )
}

export default SimpleGantt;