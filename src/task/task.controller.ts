import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
    constructor(private readonly TaskService: TaskService) {}

    @Post()
    create(@Body() TaskDTO:TaskDTO){
        return this.TaskService.create(TaskDTO);
    }

    @Get()
    findAll(){
        return this.TaskService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id:string) {
        return this.TaskService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() taskDTO:TaskDTO) {
        return this.TaskService.update(id, taskDTO);
    }

    @Delete(':id')
    delete(@Param('id') id:string) {
        return this.TaskService.delete(id);
    }
}
