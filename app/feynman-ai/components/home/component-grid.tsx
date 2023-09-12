"use client";

import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";

import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";

export default function ComponentGrid() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <DemoModal />
      <button
        onClick={() => setShowDemoModal(true)}
        className="flex w-36 items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
      >
        <p className="text-gray-600">Modal</p>
      </button>

      <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
        <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
          <p className="text-gray-600">Tooltip</p>
        </div>
      </Tooltip>
    </div>
  );
}
