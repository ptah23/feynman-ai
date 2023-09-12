"use client";


import { useDemoModal } from "@/components/home/demo-modal";


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

    </div>
  );
}
