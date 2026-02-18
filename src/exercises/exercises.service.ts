import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
    private exercises: any[] = [];
    private idCounter = 1;

    create(createExerciseDto: CreateExerciseDto) {
        const newExercise = { id: this.idCounter++, ...createExerciseDto};
        this.exercises.push(newExercise);
        return newExercise;
    }

    findByWorkout(workoutId: number) {
        return this.exercises.filter (e => e.workoutId === workoutId);
    }

    findOne(id: number) {
        return this.exercises.find(e => e.id === id);
    }

    update(id: number, updateExerciseDto: UpdateExerciseDto) {
        const exercise = this.findOne(id);
        if (exercise) Object.assign(exercise, updateExerciseDto);
        return exercise;
    }

    remove(id: number) {
        const index = this.exercises.findIndex(e => e.id === id);
        if (index >= 0) this.exercises.splice(index, 1);
        return { deleted: id };
    }
}
