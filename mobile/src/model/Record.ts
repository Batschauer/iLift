import { Model, Relation } from '@nozbe/watermelondb';
import {
  date,
  field,
  immutableRelation,
  text,
  writer,
} from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';
import Exercise from './Exercise';
import User from './User';

export default class Record extends Model {
  static table = 'records';

  static associations: Associations = {
    users: { type: 'belongs_to', key: 'user_id' },
    exercises: { type: 'belongs_to', key: 'exercise_id' },
  };

  @immutableRelation('users', 'users_id') user!: Relation<User>;
  @immutableRelation('exercises', 'exercises_id') exercise!: Relation<Exercise>;

  @field('repetitions') repetitions!: number;
  @field('weight') weight!: number;
  @text('notes') notes!: string | null;
  @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;

  @writer async addRecord(
    user: User,
    exercise: Exercise,
    repetitions: number,
    weight: number,
    notes: string | null
  ) {
    const newRecord = await this.collections
      .get<Record>('records')
      .create((record) => {
        record.user.set(user);
        record.exercise.set(exercise);
        record.repetitions = repetitions;
        record.weight = weight;
        record.notes = notes;
      });

    return newRecord;
  }
}
