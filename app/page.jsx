import CustomRoundedButton from "@/components/CustomRoundedButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Endorsments from "@/containers/Endorsments";
import { Megaphone, Network, QrCode, Save, Share2, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* hero section, contains profile card and person details */}
      <main className="p-8 bg-gradient-to-tr from-[#016DEA] to-[#FA0101]">
        <ProfileCard />
      </main>

      {/* menu buttons and endorsements section */}
      <section className="p-8">
        <div className="flex items-center gap-8 w-fit mx-auto py-3 px-5 rounded-[50px] border shadow-md mb-8">
          <CustomRoundedButton 
            text={'general info'}
            icon={<QrCode color="#fff" />}
          />
          <CustomRoundedButton 
            text={'connections'}
            icon={<Network color="#fff" />}
          />
          <CustomRoundedButton 
            text={'endorsements'}
            icon={<Megaphone color="#fff" />}
          />
          <CustomRoundedButton 
            text={'likes'}
            icon={<ThumbsUp color="#fff" />}
          />
          <CustomRoundedButton 
            text={'shares'}
            icon={<Share2 color="#fff" />}
          />
          <CustomRoundedButton 
            text={'saved'}
            icon={<Save color="#fff" />}
          />
        </div>
      </section>

      <section className="p-8">
        <Endorsments />
      </section>

      {/* footer add image */}
      <div className="w-[1450px] h-[300px] relative mx-auto mb-10">
        <Image 
          src={'/footer-ad.jpg'}
          fill
          className="object-cover"
          alt="footer add"
        />
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
