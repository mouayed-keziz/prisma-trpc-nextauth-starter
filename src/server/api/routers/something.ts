import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { prisma } from "@/server/db";

export const somethingRouter = createTRPCRouter({
    what: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
        return {
            greeting: `SOMETHING WHAT : ${input.text}`,
        };
    }),

    delete_note : publicProcedure
    .input(z.string())
    .mutation(async ({input}) => {
        //input is the id, delete from prisma the example with id
        const result = await prisma.example.delete({
            where : {
                id : input
            }
        })
        return (result)
    })

})
