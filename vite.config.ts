import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  const runtime = globalThis as typeof globalThis & {
    process?: { env?: Record<string, string | undefined> };
  };
  const repositoryName = runtime.process?.env?.GITHUB_REPOSITORY?.split("/")[1];
  const isGitHubPages = runtime.process?.env?.GITHUB_PAGES === "true";

  return {
    base: isGitHubPages && repositoryName ? `/${repositoryName}/` : "/",
    plugins: [react()],
  };
});
