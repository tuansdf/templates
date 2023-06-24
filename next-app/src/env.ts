import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().optional(),
});

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
