import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { integer, relationship, text, timestamp } from '@keystone-6/core/fields';

export const Post = list({
    access: allowAll,
    fields: {
        createdAt: timestamp({
            defaultValue: { kind: 'now' }
        }),
        title: text(),
        body: text(),
        likes: integer({
            defaultValue: 0
        }),
        author: relationship({
            ref: 'Author.posts'
        }),
        comments: relationship({
            many: true,
            ref: 'Comment.post',
        }),
        tags: relationship({
            many: true,
            ref: 'Tag.posts',
        })
    }
  })