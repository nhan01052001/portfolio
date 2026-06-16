import { Suspense } from "react";
import CVClient from "./CVClient";

export const metadata = {
  title: "CV – Nguyen Thanh Nhan",
};

export default function CVPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>}>
      <CVClient />
    </Suspense>
  );
}
