export default defineCachedEventHandler(
  async () => {
    return await getUsers();
  },
  { maxAge: 10 /* 10 seconds */ }
);
