import type { Config } from "@react-router/dev/config";

export default {
  // Use SPA mode (client-side only)
  ssr: false,
  // Use src directory instead of app
  appDirectory: "src",
} satisfies Config;
