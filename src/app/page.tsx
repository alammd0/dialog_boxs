import ReportDialog from "@/components/ReportDialog";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <h1 className="text-3xl font-bold text-center px-3 py-3">Assignment - Frontend Developer </h1>
      <p className="text-xl font-bold text-center px-2 py-2 capitalize">dialog boxs</p>

      <ReportDialog/>
      </>
  );
}
