import { Controller, Post, Get, Patch, Delete, Body, Query, Param } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { ProgramsService } from './programs.service';
import { CreateWorkoutDto } from 'src/workouts/dto/create-workout.dto';
import { WorkoutsService } from 'src/workouts/workouts.service';

@Controller('programs')
export class ProgramsController {
    constructor (
        private programsService: ProgramsService, 
        private workoutsService: WorkoutsService
    ) {}

    // POST /programs (create a program)
    @Post()
    createProgram(@Body() program: CreateProgramDto) {
        return this.programsService.create(program);
    }

    @Post(':id/workouts')
    addWorkout(
        @Param('id') id: string,
        @Body() dto: CreateWorkoutDto,
    ) {
        return this.workoutsService.create({
            ...dto,
            programId: +id,
        });
    }

    // GET /programs (get all programs)
    @Get()
    findAll() {
        return this.programsService.findAll();
    }

    //GET /programs/:id (get one program)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.programsService.findOne(+id);
    }

    // PATCH /programs/:id (update program duration/name)
    @Patch(':id')
    updateProgram(
        @Param('id') id: string,
        @Body() updateProgramDto: UpdateProgramDto
    ) {
        return this.programsService.update(+id, updateProgramDto);
    }

    //DELETE /programs/:id (delete a program)
    @Delete(':id')
    deleteProgram(@Param('id') id: string) {
        return this.programsService.remove(+id);
    }

    //GET /programs/:id/workouts
    @Get(':id/workouts')
    getProgramWorkouts(@Param('id') id: string) {
        return this.programsService.getWorkouts(+id);
    }
}
