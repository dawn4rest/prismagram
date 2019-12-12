import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    toggleLike: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { postId } = args;

      try {
        const existingLike = await prisma.$exists.like({
          AND: [{ user: { id: user.id } }, { post: { id: postId } }]
        });

        if (existingLike) {
          // Del Like
        } else {
          await prisma.createLike({
            user: {
              connect: {
                id: user.id
              }
            },
            post: {
              connect: {
                id: postId
              }
            }
          });
        }
        return true;
      } catch {
        return false;
      }
    }
  }
};
