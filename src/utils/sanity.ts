import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-13",
  token: process.env.NEXT_PUBLIC_TOKEN,
  perspective: "published",
  useCdn: false,
});

export default client;