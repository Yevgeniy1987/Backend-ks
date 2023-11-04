import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import { text, password, timestamp, relationship } from '@keystone-6/core/fields';

export const User = list({
    access: allowAll,
    fields: {
      name: text(),
      email: text({
        isIndexed: 'unique'
      }),
      password: password(),
      createdAt: timestamp({
        defaultValue: { kind: 'now' }
      }),
      comments: relationship({
        many: true,
        ref: 'Comment.author',
      }),
      author: relationship({
        ref: 'Author.user',
      })
    }
  })