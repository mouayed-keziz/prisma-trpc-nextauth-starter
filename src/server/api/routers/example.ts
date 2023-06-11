import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { prisma } from "@/server/db";


export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `this is a ${input.text}`,
      };
    }),

  double : publicProcedure
  .input(z.number())
  .query(({input}) => {
    return {
      result : input * 2
    }
  }),

 
  timesThree : publicProcedure
  .input(z.number())
  .mutation(({input}) => {
    return {
      result : input * 3
    }
  }),

  createExample : publicProcedure
  .input(z.string())
  .mutation(({input}) => {
    return prisma.example.create({
      data : {
        text : input
      }
    })
  }),

  getAllExamples : publicProcedure
  .query(() => {
    return prisma.example.findMany()
  }),

    
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
