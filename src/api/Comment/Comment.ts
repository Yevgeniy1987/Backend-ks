import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

export const Comment = list({
    access: allowAll,
    fields: {
        createdAt: timestamp({
            defaultValue: { kind: 'now' }
        }),
        body: text(),
        post: relationship({
            ref: 'Post.comments',
        }),
        author: relationship({
            ref: 'User.comments',
        }),
    }
  })