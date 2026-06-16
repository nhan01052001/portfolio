import { Suspense } from "react";
import SeniorCVClient from "./SeniorCVClient";

export const metadata = {
  title: "CV – Nguyen Thanh Nhan",
};

export default function SeniorCVPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" }}>Loading...</div>}>
      <SeniorCVClient />
    </Suspense>
  );
}
