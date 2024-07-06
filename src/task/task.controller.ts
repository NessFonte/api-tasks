import { Body, Controller, Get, Param, Post, Put, Delete, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    create(@Body() TaskDTO:TaskDTO){
        /*return new Promise((resolve, reject) => {
            setTimeout(() => reject('Something was wrong!'), 5000);
        })*/
        return this.taskService.create(TaskDTO);
    }

    @Get()
    findAll(){
        return this.taskService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id:string) {
        return this.taskService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id:string, @Body() taskDTO:TaskDTO) {
        return this.taskService.update(id, taskDTO);
    }

    @Delete(':id')
    delete(@Param('id') id:string) {
        return this.taskService.delete(id);
    }
}
