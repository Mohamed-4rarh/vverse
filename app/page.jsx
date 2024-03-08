import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-8 bg-gradient-to-tr from-[#016DEA] to-[#FA0101]">
        <ProfileCard />
      </main>
    </>
  );
}
