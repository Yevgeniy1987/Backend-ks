import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text, timestamp } from '@keystone-6/core/fields';

export const Tag = list({
    access: allowAll,
    fields: {
        createdAt: timestamp({
            defaultValue: { kind: 'now' }
        }),
        name: text({
            isIndexed: 'unique'
        }),
        posts: relationship({
            many: true,
            ref: 'Post.tags',
        })
    }
  })