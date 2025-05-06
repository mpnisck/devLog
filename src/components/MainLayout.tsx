import Career from "@/components/Career";
import IntroSection from "@/components/IntroSection";
import Work from "@/components/Work";
import { FC } from "react";

const MainLayout: FC = () => {
  return (
    <div
      id="main"
      className="w-full"
    >
      <IntroSection />
      <Career />
      <Work />
    </div>
  );
};

export default MainLayout;
