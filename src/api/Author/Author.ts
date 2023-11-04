import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import { text, timestamp, relationship } from '@keystone-6/core/fields';

export const Author = list({
    access: allowAll,
    fields: {
      nickname: text(),
      createdAt: timestamp({
        defaultValue: { kind: 'now' }
      }),
      posts: relationship({
        many: true,
        ref: 'Post.author',
      }),
      user: relationship({
        ref: 'User.author',
      })
    }
  })