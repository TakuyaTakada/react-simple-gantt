import React from "react";
import dayjs from "dayjs";
import "./style.css";

const TaskBar = ({task, edge, viewWidth}) => {
    const edgeDate = dayjs(edge).subtract(3, "day");
    const start = dayjs(task.start);
    const end = dayjs(task.end);
    const width = viewWidth * (end.diff(start, "day") + 1);
    const position = `${viewWidth * start.diff(edgeDate, "day")}px`;
    return (
        <div className="box" style={{width: `${width}px`, marginLeft: position}}>
            {`${task.progress}%`}
            <div
                className="innerBox"
                style={{
                    width: task.progress === 0
                        ? "0px"
                        : `${width * (task.progress / 100)}px`,
                    borderTopRightRadius: task.progress === 100 ? "0.5em" : "0em",
                    borderBottomRightRadius: task.progress === 100 ? "0.5em" : "0em",
                }}
            />
        </div>
    )
}

export default TaskBar;