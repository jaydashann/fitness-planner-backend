import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ExercisesService } from './exercises.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  // POST /exercises (create exercise)
  @Post()
  create(@Body() dto: CreateExerciseDto) {
    return this.exercisesService.create(dto);
  }

  // GET /exercises/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exercisesService.findOne(+id);
  }

  @Get('workout/:workoutId')
  findByWorkout(@Param('workoutId') workoutId: string) {
    return this.exercisesService.findByWorkout(+workoutId);
  }

  // PATCH /exercises/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateExerciseDto) {
    return this.exercisesService.update(+id, dto);
  }

  // DELETE /exercises/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exercisesService.remove(+id);
  }
}
