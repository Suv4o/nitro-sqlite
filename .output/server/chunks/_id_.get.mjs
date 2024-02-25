import { d as defineEventHandler, g as getRouterParam } from './nitro/node-server.mjs';
import { g as getUser } from './user.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'typeorm';
import 'node:fs';
import 'node:url';

const _id__get = defineEventHandler(async (event) => {
  const userId = Number(getRouterParam(event, "id"));
  return await getUser(userId);
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
