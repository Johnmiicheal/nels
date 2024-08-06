import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../themes";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Nelson Elijah — Robotics. Teaching. Quality Education.",
  description:
    "AI, Robotics & Embedded Systems Engineer | Research Enthusiast | Passionate about Education, Youth Development & seemingly insurmountable problems",
  generator: "Next.js",
  applicationName: "Nelson Elijah",
  keywords: [
    "artificial intelligence",
    "robotics",
    "hardware",
    "education",
    "research",
    "teaching",
    "youth development",
    "creative",
    "creative engineer",
    "stanford",
    "tech",
    "nigeria",
    "africa",
    "hardware engineer",
    "portfolio",
    "systems engineer portfolio",
    "writer",
  ],
  colorScheme: "light",
  openGraph: {
    title: "Nelson Elijah — Robotics. Teaching. Quality Education.",
    description:
      "AI, Robotics & Embedded Systems Engineer | Research Enthusiast | Passionate about Education, Youth Development & seemingly insurmountable problems",
    url: "https://www.nelsonelijah.com/",
    siteName: "www.nelsonelijah.com",
    images: [
      {
        url: "https://i.imgur.com/41x0RW8.png",
        width: 1200,
        height: 630,
        alt: "Nelson Elijah — Robotics. Teaching. Quality Education.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

  const message = `
%cWebsite designed by Johnmiicheal\n
 #####    #####   ######    ######  ######   ##  ##   ##  ##   
#######  #######  #######  #######  #######  ### ##   ## ##    
##   ##  ##   ##       ##  ##            ##  ######   ####     
##       ##   ##  ##   ##  #######  ######   ######   ####     
##   ##  ##   ##  ##   ##  ##       ##       ## ###   ## ##    
#######  #######  #######  #######  ##       ##  ##   ##  ##   
 #####    #####   ######    ######  ##       ##  ##   ##   ## 
`
console.log(message, "color: pink;");

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
       <Head>
        <title>Nelson Elijah — Robotics. Teaching. Quality Education.</title>
        <meta name="description" content="AI, Robotics & Embedded Systems Engineer | Research Enthusiast | Passionate about Education, Youth Development & seemingly insurmountable problems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logosingle.svg" />
      </Head>
       <Component {...pageProps} />
    </ChakraProvider>
  );
}
