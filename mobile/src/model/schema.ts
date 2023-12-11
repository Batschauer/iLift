import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        { name: 'nickname', type: 'string' },
        { name: 'email', type: 'string', isOptional: true },
        { name: 'password', type: 'string', isOptional: true },
        { name: 'profile_pic', type: 'string', isOptional: true },
      ],
    }),
    tableSchema({
      name: 'settings',
      columns: [
        { name: 'users_id', type: 'string' },
        { name: 'is_darkmode', type: 'boolean', isOptional: true },
        { name: 'mass_unit', type: 'string' },
      ],
    }),
    tableSchema({
      name: 'exercises',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string', isOptional: true },
        { name: 'is_default', type: 'boolean' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'records',
      columns: [
        { name: 'users_id', type: 'string' },
        { name: 'exercises_id', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
        { name: 'repetitions', type: 'number' },
        { name: 'weight', type: 'number' },
        { name: 'notes', type: 'string', isOptional: true },
      ],
    }),
  ],
});
