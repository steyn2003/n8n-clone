// /lib/polar.ts (server-only file)
import { Polar } from "@polar-sh/sdk";

if (!process.env.POLAR_ACCESS_TOKEN) {
  // Avoid leaking full token in logs
  throw new Error("POLAR_ACCESS_TOKEN is not set");
}

export const polarClient = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
  // keep this in sync with the token's origin (sandbox vs production)
  server: process.env.POLAR_ENV === "production" ? "production" : "sandbox",
});
