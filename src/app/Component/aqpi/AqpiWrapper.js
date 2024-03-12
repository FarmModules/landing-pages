"use client";

import TitleSection from "./TitleSection";
import DeviceImage from "./DeviceImage";
import NoticeTextSection from "./NoticeTextSection";
const AqpiWrapper = () => {
  return (
    <div className="w-[80%] mx-[10%]">
      <TitleSection />
      <DeviceImage />
      <NoticeTextSection />
    </div>
  );
};

export default AqpiWrapper;
