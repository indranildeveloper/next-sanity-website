import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_APP_ID!,
  dataset: "production",
  title: "My personal website",
  apiVersion: "2024-05-06",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
