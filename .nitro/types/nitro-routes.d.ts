// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/create-user': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../routes/create-user.post').default>>>>
    }
    '/get-user/:id': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../routes/get-user/[id].get').default>>>>
    }
    '/get-users': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../routes/get-users.get').default>>>>
    }
  }
}
export {}