import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

export const Post = list({
    access: allowAll,
    fields: {
        createdAt: timestamp({
            defaultValue: { kind: 'now' }
        }),
        title: text(),
        body: text(),
        author: relationship({
            ref: 'User.posts'
        }),
    }
  })