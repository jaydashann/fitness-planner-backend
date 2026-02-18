import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkoutsModule } from './workouts/workouts.module';
import { ProgramsModule } from './programs/programs.module';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [WorkoutsModule, ProgramsModule, ExercisesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
