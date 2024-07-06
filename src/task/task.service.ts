import { Injectable } from '@nestjs/common';
import { ITask } from '../task/task.interface';
import { TaskDTO } from './dto/task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
    tasks: ITask[] = [];

    create(taskDTO: TaskDTO): ITask {
        const task = {
            id: uuidv4(),
            ...taskDTO,
        };
        this.tasks.push(task);
        return task;
    };

    findAll(): ITask[] {
        return this.tasks;
    }

    findById(id:string): ITask {
        return this.tasks.find(task => task.id === id);
    }

    update(id:string, taskDTO:TaskDTO): ITask {
        const newTask = {id, ...taskDTO}
        this.tasks = this.tasks.map(task => task.id === id ? newTask: task);
        return newTask;
    }

    delete(id:string): string {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return 'Task deleted'
    }
}
