import { Controller, Get, Query, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { WorkoutsService } from './workouts.service';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  // GET /workouts
  @Get()
  findAll(@Query('programId') programId?: string) {
    return this.workoutsService.findAll(
      programId ? +programId : undefined,
    );
  }

  // GET /workouts/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workoutsService.findOne(+id);
  }

  // POST /workouts
  @Post()
  create(@Body() dto: CreateWorkoutDto) {
    return this.workoutsService.create(dto);
  }

  // PATCH /workouts/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateWorkoutDto) {
    return this.workoutsService.update(+id, dto);
  }

  // DELETE /workouts/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutsService.remove(+id);
  }

  // GET /workouts/:id/exercises
  @Get(':id/exercises')
  getExercises(@Param('id') id: string) {
    return this.workoutsService.findByWorkout(+id);
  }
}
