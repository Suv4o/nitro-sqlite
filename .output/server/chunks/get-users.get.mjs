import { a as getUsers } from './user.mjs';
import { b as defineCachedEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'typeorm';
import 'node:fs';
import 'node:url';

const getUsers_get = defineCachedEventHandler(async () => {
  return await getUsers();
}, {
  maxAge: 10
  /* 10 seconds */
});

export { getUsers_get as default };
//# sourceMappingURL=get-users.get.mjs.map
