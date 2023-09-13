"use client";
import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";

import { Github } from "@/components/shared/icons";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import MainForm from "@/components/home/mainform";
import { ErrorBoundary } from "react-error-boundary";

export type FallbackProps = {
    error: any;
    resetErrorBoundary: (...args: any[]) => void;
};
function fallbackRender(props: FallbackProps) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.

    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{props.error.message}</pre>
        </div>
    );
}

export default async function Home() {

  return (
    <ErrorBoundary fallbackRender={fallbackRender}  onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
    }}>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-5xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Feynman AI</Balancer>
        </h1>
        <p
          className="mt-0 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Check your understanding of important concepts
          </Balancer>
        </p>
        <div
          className="mx-auto mt-2 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
 <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/ptah23/feynman-ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />

          </a>
        </div>
      </div>

        <MainForm/>
    </ErrorBoundary>
  );
}
