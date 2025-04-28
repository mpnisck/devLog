import Career from "@/components/Career";
import IntroSection from "@/components/IntroSection";
import { FC } from "react";

const MainLayout: FC = () => {
  return (
    <div
      id="main"
      className="w-full"
    >
      <IntroSection />
      <Career />
    </div>
  );
};

export default MainLayout;
