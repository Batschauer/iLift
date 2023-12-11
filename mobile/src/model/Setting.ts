import { Model, Relation } from '@nozbe/watermelondb';
import { Associations } from '@nozbe/watermelondb/Model';
import {
  field,
  immutableRelation,
  writer,
} from '@nozbe/watermelondb/decorators';
import User from './User';

export type TUnitMass = 'kg' | 'lb';

export default class Setting extends Model {
  static table = 'settings';

  static associations: Associations = {
    users: { type: 'belongs_to', key: 'user_id' },
  };

  @immutableRelation('users', 'users_id') user!: Relation<User>;
  @field('is_darkmode') isDarkmode!: boolean;
  @field('mass_unit') massUnit!: TUnitMass;

  @writer async updateSettings(
    isDarkmode: boolean | null,
    massUnit: TUnitMass | null
  ) {
    await this.update((setting) => {
      if (typeof isDarkmode === 'boolean') setting.isDarkmode = isDarkmode;
      if (typeof massUnit === 'string') setting.massUnit = massUnit;
    });
  }
}
