import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { ExercisesService } from 'src/exercises/exercises.service';

@Injectable()
export class WorkoutsService {
    private workouts: any[] = [];
    private idCounter = 1;

    constructor(private readonly exercisesService: ExercisesService) {}

    create(createWorkoutDto: CreateWorkoutDto) {
        const newWorkout = { id: this.idCounter++, ...createWorkoutDto };
        this.workouts.push(newWorkout);
        return newWorkout;
    }

    findAll(programId?: number) {
        if (programId) return this.workouts.filter(w => w.programId === programId);
        return this.workouts;
    }

    findOne(id: number) {
        return this.workouts.find(w => w.id === id);
    }

    update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
        const workout = this.findOne(id);
        if (workout) Object.assign(workout, updateWorkoutDto);
        return workout;
    }

    remove(id: number) {
        const index = this.workouts.findIndex(w => w.id === id);
        if (index >= 0) this.workouts.splice(index, 1);
        return { deleted: id };
    }

    // get exercises for a workout
    findByWorkout(workoutId: number) {
        return this.exercisesService.findByWorkout(workoutId);
    }

    // get all workouts for a program
    findByProgram(programId: number) {
        return this.workouts.filter(w => w.programId === programId);
    }
}
