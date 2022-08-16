import { AppDataSource } from "../database/data-source";
import Task from "./tasks-entities";

const repository = AppDataSource.getRepository(Task);

export const getTaskDetail = async (taskID: number) => {
  const task = await repository.findOne({
    order: { id: "DESC" },
    where: { user: { id: taskID } },
  });

  return task;
};

export default repository;
