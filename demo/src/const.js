import dayjs from "dayjs";

export const tasks = [
    {
        id: "task1",
        name: "Plan-1",
        start: dayjs().subtract(1, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().subtract(1, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 100,
    },
    {
        id: "task2",
        name: "Do-1",
        start: dayjs().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(1, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 50,
    },
    {
        id: "task3",
        name: "Check-1",
        start: dayjs().add(2, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(2, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
    {
        id: "task4",
        name: "Action-1",
        start: dayjs().add(3, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(5, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
    {
        id: "task5",
        name: "Plan-2",
        start: dayjs().add(6, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(7, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
    {
        id: "task6",
        name: "Do-2",
        start: dayjs().add(8, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(11, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
    {
        id: "task7",
        name: "Check-2",
        start: dayjs().add(12, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(14, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
    {
        id: "task8",
        name: "Action-2",
        start: dayjs().add(15, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(16, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
    {
        id: "task9",
        name: "Plan-3",
        start: dayjs().add(17, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(18, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
    {
        id: "task10",
        name: "Do-3",
        start: dayjs().add(19, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(22, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
    {
        id: "task11",
        name: "Check-3",
        start: dayjs().add(23, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(25, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
    {
        id: "task12",
        name: "Action-3",
        start: dayjs().add(26, "day").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        end: dayjs().add(27, "day").endOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        progress: 0,
    },
]

