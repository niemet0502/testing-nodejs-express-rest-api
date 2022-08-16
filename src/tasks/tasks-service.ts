import Task from "./tasks-entities";
import taskRepository, { getTaskDetail } from "./tasks-repositories";

export const create = (body: Request) => {
  const { name, description, isDueDate, date } = body as any;

  const task = new Task();

  task.name = name;
  task.description = description;
  task.isDueDate = isDueDate;
  task.date = date;

  return task;
};

export const save = async (task: Task) => {
  task = await taskRepository.save(task);

  return task;
};

export const findTasksByUser = async (id: number) => {
  const tasks = await taskRepository.find({
    order: { id: "DESC" },
    where: { user: { id: id } },
  });

  return tasks;
};

export const findTaskById = async (id: number) => {
  const task = await getTaskDetail(id);

  return task;
};

export const deleteTask = async (id: number) => {
  const result = await taskRepository.delete(id);

  return result;
};
