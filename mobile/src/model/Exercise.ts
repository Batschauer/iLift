import { Model, Query } from '@nozbe/watermelondb';
import {
  children,
  date,
  field,
  text,
  writer,
} from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';
import Record from './Record';

export default class Exercise extends Model {
  static table = 'exercises';

  static associations: Associations = {
    records: { type: 'has_many', foreignKey: 'exercise_id' },
  };

  @text('name') name!: string;
  @text('description') description!: string | null;
  @field('is_default') isDefault!: boolean;
  @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;

  @children('records') records!: Query<Record>;

  @writer async createExercise(
    name: string,
    description: string | null = null,
    isDefault: boolean
  ) {
    const newExercise = await this.collections
      .get<Exercise>('exercises')
      .create((exercise) => {
        exercise.name = name;
        exercise.description = description;
        exercise.isDefault = isDefault;
      });

    return newExercise;
  }
}
