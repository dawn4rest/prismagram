import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    readUser: async (_, args, { request }) => {
      const { id } = args;
      return prisma.user({ id });
    }
  }
};
