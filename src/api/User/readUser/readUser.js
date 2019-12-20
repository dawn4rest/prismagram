import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    readUser: async (_, args) => {
      const { id } = args;
      const user = await prisma.user({ id });
      const posts = await prisma.user({ id }).posts();
      return { user, posts };
    }
  }
};
