import BLog from "@/components/Blog/BLog";
import HappyCustomar from "@/components/Customar/HappyCustomar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NewsLetter from "@/components/NewsLatter/NewsLetter";
import OrderDetails from "@/components/Order/OrderDetails";
import Promote from "@/components/Promote/Promote";
import Quote from "@/components/Quote/Quote";
import OurServices from "@/components/Services/OurServices";
import Services from "@/components/Services/Services";
import OurTeam from "@/components/Team/OurTeam";
import WhoWeAre from "@/components/Weare/WhoWeAre";
import HowToWork from "@/components/Work/HowToWork";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Promote />
      <WhoWeAre />
      {/* <OrderDetails /> */}
      <OurServices />
      <Services />
      <HowToWork />
      <HappyCustomar />
      <NewsLetter />
      <BLog />
      <Quote />
      <OurTeam />
    </div>
  );
}
