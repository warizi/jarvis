import { flowaDb } from "@backend/config/dbConfig/indexedDbConfig";
import {
  TodoBack,
  TodoCreateBack,
} from "../entities/TodoBack";
import { isToday } from "@backend/common/utils/isToday";
import moment from "moment";

class TodoRepository {
  async getAll() {
    return (await flowaDb.todo.toArray()) as TodoBack[];
  }

  async getAllByIsDone() {
    return (await flowaDb.todo.toArray()).filter((todo) => {
      return todo.isDone && !isToday(todo.doneDate);
    }) as TodoBack[];
  }

  async save(data: TodoBack | TodoCreateBack) {
    const convertedData = {
      ...data,
      isImportant: data.isImportant ? 1 : 0, // boolean → number 변환
    };

    if ("id" in convertedData) {
      await flowaDb.todo.update(
        convertedData.id,
        convertedData
      );
    } else {
      await flowaDb.todo.add(convertedData);
    }

    return convertedData;
  }

  async findByImportant() {
    return (await flowaDb.todo
      .where("isImportant")
      .equals(1) // Assuming 'true' is stored as 1 in the database
      .toArray()) as TodoBack[];
  }

  async findByImportantAndIsDone() {
    return (
      await flowaDb.todo
        .where("isImportant")
        .equals(1)
        .toArray()
    ).filter((todo) => {
      return todo.isDone && !isToday(todo.doneDate);
    }) as TodoBack[];
  }

  async findExistedToday() {
    return (await flowaDb.todo
      .filter((todo: TodoBack) => {
        const { isToday } = todo;

        if (isToday) return true;

        return false;
      })
      .toArray()) as TodoBack[];
  }

  async findTodayByStartDateAndEndDate() {
    return (await flowaDb.todo
      .filter((todo: TodoBack) => {
        const { startDate, endDate } = todo;
        const today = moment()
          .tz("Asia/Seoul")
          .format("YYYY-MM-DD");
        const start = moment(startDate)
          .tz("Asia/Seoul")
          .format("YYYY-MM-DD");
        const end = moment(endDate)
          .tz("Asia/Seoul")
          .format("YYYY-MM-DD");
        if (startDate && endDate) {
          return (
            moment(today).isBetween(
              start,
              end,
              undefined,
              "[]"
            ) ||
            moment(today).isSame(start) ||
            moment(today).isSame(end)
          );
        }
        if (startDate) {
          return moment(today).isSame(start);
        }
        return false;
      })
      .toArray()) as TodoBack[];
  }

  async findByCateId(cateId: number) {
    return (await flowaDb.todo
      .where({ cateId })
      .toArray()) as TodoBack[];
  }

  async findByCateIdAndIsDone(cateId: number) {
    return (
      await flowaDb.todo.where({ cateId }).toArray()
    ).filter((todo) => {
      return todo.isDone && !isToday(todo.doneDate);
    }) as TodoBack[];
  }

  async delete(id: number) {
    await flowaDb.todo.delete(id);
  }

  async get(id: number) {
    return await flowaDb.todo.get(id);
  }
}

export default TodoRepository;
