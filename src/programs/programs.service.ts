import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import { WorkoutsService } from 'src/workouts/workouts.service';

@Injectable()
export class ProgramsService {
    private programs: any[] = []; // store programs in memory
    private idCounter = 1;

    constructor(private readonly workoutsService: WorkoutsService) {}

    create(createProgramDto: CreateProgramDto) {
        const newProgram = { id: this.idCounter++, ...createProgramDto };
        this.programs.push(newProgram);
        return newProgram;
    }

    findAll() {
        return this.programs;
    }

    findOne(id: number) {
        return this.programs.find(p => p.id === id);
    }

    update(id: number, updateProgramDto: UpdateProgramDto) {
        const program = this.findOne(id);
        if (program) {
            Object.assign(program, updateProgramDto);
        }
        return program;
    }

    remove(id: number) {
        const index = this.programs.findIndex(p => p.id === id);
        if (index >= 0) this.programs.splice(index, 1);
        return { delete: id }; 
    }

    // get workouts of program
    getWorkouts(programId: number) {
        return this.workoutsService.findByProgram(programId);
    }
}
