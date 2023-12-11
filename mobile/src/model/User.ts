import { Model, Query } from '@nozbe/watermelondb';
import { Associations } from '@nozbe/watermelondb/Model';
import { children, text, writer } from '@nozbe/watermelondb/decorators';
import Setting from './Setting';
import Record from './Record';

export default class User extends Model {
  static table = 'users';

  static associations: Associations = {
    settings: { type: 'has_many', foreignKey: 'user_id' },
    records: { type: 'has_many', foreignKey: 'user_id' },
  };

  @text('nickname') nickname!: string;
  @text('email') email!: string | null;
  @text('password') password!: string | null;
  @text('profile_pic') profile_pic!: string | null;

  @children('settings') settings!: Query<Setting>;
  @children('records') records!: Query<Record>;

  @writer async createUser(
    nickname: string,
    email: string | null = null,
    password: string | null = null,
    profile_pic: string | null = null
  ) {
    const newUser = await this.collections.get<User>('users').create((user) => {
      user.nickname = nickname;
      user.email = email;
      user.password = password;
      user.profile_pic = profile_pic;
    });

    await this.collections.get<Setting>('settings').create((setting) => {
      setting.user.set(this);
      setting.isDarkmode = false;
      setting.massUnit = 'kg';
    });

    return newUser;
  }
}
