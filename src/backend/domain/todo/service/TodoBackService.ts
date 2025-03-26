import { formatDate } from "@backend/common/utils/formatDate";
import { TodoBack } from "../entities/TodoBack";
import TodoRepository from "../repository/TodoRepository";
import { isToday } from "@backend/common/utils/isToday";
import TodoLabelRepository from "../repository/TodoLabelRepository";
import {
  TodoBackDto,
  TodoCreateBackDto,
} from "../dto/TodoDto";

class TodoBackService {
  todoRepository: TodoRepository = new TodoRepository();
  todoLabelRepository: TodoLabelRepository =
    new TodoLabelRepository();

  async getAll() {
    const todoLabels =
      await this.todoLabelRepository.getAll();
    return (await this.todoRepository.getAll())
      .filter((todo: TodoBack) => {
        const { doneDate } = todo;
        if (!doneDate) {
          return true;
        }
        if (
          formatDate(doneDate, "yyyy-MM-dd") ===
          formatDate(new Date(), "yyyy-MM-dd")
        ) {
          return true;
        }

        return false;
      })
      .map((todo) => {
        const labelId = todo?.labelId;
        delete todo.labelId;

        if (!labelId) return todo;
        const todoLabel = todoLabels.find(
          (label) => label.id === labelId
        );
        if (!todoLabel) return todo;
        const newTodo = { ...todo, label: todoLabel };
        delete newTodo.labelId;
        return newTodo;
      })
      .sort((a, b) => a.order - b.order);
  }

  async getAllByIsDone() {
    const todoLabels =
      await this.todoLabelRepository.getAll();
    return (await this.todoRepository.getAllByIsDone())
      .map((todo) => {
        const labelId = todo?.labelId;
        delete todo.labelId;

        if (!labelId) return todo;
        const todoLabel = todoLabels.find(
          (label) => label.id === labelId
        );
        if (!todoLabel) return todo;
        const newTodo = { ...todo, label: todoLabel };
        delete newTodo.labelId;
        return newTodo;
      })
      .sort((a, b) => a.order - b.order);
  }

  async findByCateId(cateId: number) {
    const todoLabels =
      await this.todoLabelRepository.getAll();
    return (await this.todoRepository.findByCateId(cateId))
      .filter((todo: TodoBack) => {
        const { doneDate } = todo;
        if (!doneDate) {
          return true;
        }
        if (
          formatDate(doneDate, "yyyy-MM-dd") ===
          formatDate(new Date(), "yyyy-MM-dd")
        ) {
          return true;
        }

        return false;
      })
      .map((todo) => {
        const labelId = todo?.labelId;
        delete todo.labelId;

        if (!labelId) return todo;
        const todoLabel = todoLabels.find(
          (label) => label.id === labelId
        );
        if (!todoLabel) return todo;
        const newTodo = { ...todo, label: todoLabel };
        delete newTodo.labelId;
        return newTodo;
      })
      .sort((a, b) => a.order - b.order);
  }

  async findByCateIdAndIsDone(cateId: number) {
    const todoLabels =
      await this.todoLabelRepository.getAll();
    return (
      await this.todoRepository.findByCateIdAndIsDone(
        cateId
      )
    )
      .map((todo) => {
        const labelId = todo?.labelId;
        delete todo.labelId;

        if (!labelId) return todo;
        const todoLabel = todoLabels.find(
          (label) => label.id === labelId
        );
        if (!todoLabel) return todo;
        const newTodo = { ...todo, label: todoLabel };
        delete newTodo.labelId;
        return newTodo;
      })
      .sort((a, b) => a.order - b.order);
  }

  async findByIsToday() {
    const todoLabels =
      await this.todoLabelRepository.getAll();
    return (await this.todoRepository.findExistedToday())
      .filter((todo: TodoBack) => {
        const { doneDate, isToday: today } = todo;
        if (!isToday(today)) return false;
        if (!doneDate) return true;
        if (
          formatDate(doneDate, "yyyy-MM-dd") ===
          formatDate(new Date(), "yyyy-MM-dd")
        ) {
          return true;
        }

        return false;
      })
      .map((todo) => {
        const labelId = todo?.labelId;
        delete todo.labelId;

        if (!labelId) return todo;
        const todoLabel = todoLabels.find(
          (label) => label.id === labelId
        );
        if (!todoLabel) return todo;
        const newTodo = { ...todo, label: todoLabel };
        delete newTodo.labelId;
        return newTodo;
      })
      .sort((a, b) => a.order - b.order);
  }

  async save(data: TodoBackDto | TodoCreateBackDto) {
    if ("id" in data) {
      const labelId = data.label?.id;
      const todoBack = data as TodoBack;
      if (labelId) {
        todoBack.labelId = labelId;
      }
      delete data.label;
      return await this.todoRepository.save(todoBack);
    } else {
      const allData = await this.todoRepository.getAll();
      const order =
        allData.length > 0
          ? allData[allData.length - 1].order + 1000
          : 1000;
      const labelId = data.label?.id;
      const todoBack = data as TodoBack;
      todoBack.order = order;
      if (labelId) {
        todoBack.labelId = labelId;
      }
      delete data.label;
      return await this.todoRepository.save(todoBack);
    }
  }

  async findByImportant() {
    const todoLabels =
      await this.todoLabelRepository.getAll();
    return (await this.todoRepository.findByImportant())
      .filter((todo: TodoBack) => {
        const { doneDate } = todo;
        if (doneDate === null || doneDate === undefined) {
          return true;
        }
        if (
          formatDate(doneDate, "yyyy-mm-dd") ===
          formatDate(new Date(), "yyyy-mm-dd")
        ) {
          return true;
        }

        return false;
      })
      .map((todo) => {
        const labelId = todo?.labelId;
        delete todo.labelId;

        if (!labelId) return todo;
        const todoLabel = todoLabels.find(
          (label) => label.id === labelId
        );
        if (!todoLabel) return todo;
        const newTodo = { ...todo, label: todoLabel };
        delete newTodo.labelId;
        return newTodo;
      })
      .sort((a, b) => a.order - b.order);
  }

  async findByImportantAndIsDone() {
    const todoLabels =
      await this.todoLabelRepository.getAll();
    return (
      await this.todoRepository.findByImportantAndIsDone()
    )
      .map((todo) => {
        const labelId = todo?.labelId;
        delete todo.labelId;

        if (!labelId) return todo;
        const todoLabel = todoLabels.find(
          (label) => label.id === labelId
        );
        if (!todoLabel) return todo;
        const newTodo = { ...todo, label: todoLabel };
        delete newTodo.labelId;
        return newTodo;
      })
      .sort((a, b) => a.order - b.order);
  }

  async updateDone(id: number, done: boolean) {
    const todo = (await this.todoRepository.get(
      id
    )) as TodoBack;

    todo.isDone = done;

    return await this.todoRepository.save(todo);
  }

  async delete(id: number) {
    return await this.todoRepository.delete(id);
  }

  async get(id: number) {
    const todoLabels =
      await this.todoLabelRepository.getAll();
    const todo = (await this.todoRepository.get(
      id
    )) as TodoBack;
    const labelId = todo?.labelId;
    delete todo.labelId;

    if (!labelId) return todo;
    const todoLabel = todoLabels.find(
      (label) => label.id === labelId
    );
    if (!todoLabel) return todo;
    const newTodo = { ...todo, label: todoLabel };
    delete newTodo.labelId;
    return newTodo;
  }
}

export default TodoBackService;
