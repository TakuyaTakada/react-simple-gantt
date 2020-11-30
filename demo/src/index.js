import React, { useState } from "react";
import { render } from "react-dom";
import SimpleGantt from "../../src";
import { tasks } from "./const";

const App = () => {
    const [viewMode, setViewMode] = useState("Day");
    const [selectedTask, setSelectedTask] = useState(null);
    const handleClick = (task) => {
        setSelectedTask(<p>{task.name} clicked</p>)
    }
    return (
        <div>
            <h2>React Simple Gantt Demo</h2>
            <input
                type="radio"
                name="Day"
                value="Day"
                checked={viewMode === "Day"}
                onChange={() => setViewMode("Day")}
            />
            <label>Day</label>
            <input
                type="radio"
                name="Week"
                value="Week"
                checked={viewMode === "Week"}
                onChange={() => setViewMode("Week")}
            />
            <label>Week</label>
            <input
                type="radio"
                name="Month"
                value="Month"
                checked={viewMode === "Month"}
                onChange={() => setViewMode("Month")}
            />
            <label>Month</label>
            <br/>
            <SimpleGantt tasks={tasks} viewMode={viewMode} onClick={handleClick}/>
            {selectedTask}
        </div>
    )
};

render(<App />, document.getElementById("root"));