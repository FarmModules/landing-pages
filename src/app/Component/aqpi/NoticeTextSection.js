"use client";

import Appointlet from "@appointlet/appointlet.js";
import "@appointlet/appointlet.js/dist/appointlet.min.css";

const NoticeTextSection = () => {
  const appointlet = new Appointlet("https://appt.link/farm-modules-tech/aquaponics-intelligence-consultancy");

  const handleClick = async () => {
    const meetingData = await appointlet.openModal();
  };

  return (
    <div className="flex justify-center mt-[120px] w-[100%]">
      <div className="">
        <div className="text-[48px]">
          Did you know that some commercial farmers
          <span className="font-bold"> save 10s of hours</span> and{" "}
          <span className="font-bold">100s of USD per month </span>
          by <span className="font-bold">reducing manual measurements, </span>
          and <span className="font-bold">other monotonous tasks ?</span> 🤓 🧑‍🌾 🤑
          <br />
          <br />
          It is now easier than ever before,
          <br />
          thanks to tools like ⬇️ <span className="text-[#449AE9]">Aquaponics Intelligence</span> ⬇️
          <br />
          <br />
          <span className="font-bold">Plug ‘n play IoT solution</span> to fullfill all your aquaponics automation,
          digitalization & optimisation needs:
        </div>

        <div className="mt-[80px] w-[100%]">
          <img src={"/graph.png"} style={{ objectFit: "contain", width: "100%", hight: "100%" }} />
        </div>

        <div className="text-[39px] mt-[63px]">
          ➡️ Check your farm health with sensors and camera online, wherever you are
          <br />
          <br />
          ➡️ Automate everything you need, from lights to fish feeding and pH dosing
          <br />
          <br />
          ➡️ Get notified in case of any problems with your farm, via email or phone
        </div>

        <div className="text-[39px] mt-[310px]">
          Starting from <b>997 $*</b> you can get:
          <br />
          <ul className="list-inside list-disc">
            <li>
              continuous measurements from sensors: pH, humidity, air temperature, water temperature and water level and
              possibility to add manual measurements to platform
            </li>
            <li>1 Integrated camera to see your farm online - 24/7 (more can be integrated)</li>
            <li>4x relays to connect devices to automate (e.g. LED, fan, fish feeder, ...)</li>
            <li>get notified on email or phone</li>
            <br />
          </ul>
          <b>*96$</b> from that amount is a yearly subscription for software service (only 8$ per month)
          <b>(only 8$ per month)</b>
        </div>

        <div className="mt-[55px]">
          <div
            className="bg-[#13ae5c] px-[5px] pt-[6px] pb-[8px] rounded-3xl w-[80%]"
            onClick={() => {
              handleClick();
            }}
          >
            <div className="rounded-3xl py-[20px] text-[48px] font-bold text-center flex items-center justify-center bg-[#ffffff] hover:bg-[#13ae5c]  hover:cursor-pointer hover:text-[#ffffff]">
              Schedule FREE meeting with our loT analyst
            </div>
          </div>
          <div className="text-[39px] mt-[20px]">To anlyze your loT needs and wishes</div>
        </div>

        <div className="mt-[30px] flex">
          <div className="w-[60%] h-[665%] relative">
            <img
              src={"/testFarm.png"}
              alt="testFarm.png"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </div>

          <div className="flex items-center">
            <div className="ml-[55px] font-bold text-[39px]">
              Intuituve, begginer friendly automation & monitoring interface
              <br />
              <br />
              Tens of actuators and sensors integratated
              <br />
              <br />
              E-mail & SMS alerting
            </div>
          </div>
        </div>

        <div className="mt-[65px] text-[39px]">
          <b>And Yes:</b>
          <br />
          ✔️ All sensors come integrated and pre-calibrated
          <br />
          ✔️ Extensive technical documentation and support is provided
          <br />
          ✔️ We can connect a wide range of devices by relays and PWM
          <br />
          <br />
          <b>Someting Special About Us:</b>
          <br />
          ✔️ Not just generic IoT provider, but living and breathing aquaponics, so we can get your struggles and needs
          <br />
          ✔️ Possibility to collaborate with us and our partners (universities and commercial farmers) on cutting edge
          aquaponics research
          <br />
          ✔️ Our in-house RnD teams, consisting of experts from fields of Hydroponics, Aquaculture, Electronics, 3D
          printing, AI and more, are working on making farms as optimized as possible for a given scale
        </div>

        <div className="mt-[55px] text-[39px] font-bold">
          Some of our academics & commercial customers and partners, including us (Farm Modules 👋):
        </div>

        <div className="mt-[30px] flex justify-between">
          <div>
            <img src={"/farm-logo.png"} width={446} height={86} />

            <img src={"/czu-logo.png"} width={500} height={97} />
          </div>
          <div>
            <img src={"/jihoceska-logo.png"} width={413} height={134} />
          </div>
          <div>
            <img src={"/ns-logo.png"} width={145} height={136} />
          </div>
        </div>

        <div className="mt-[90px]">
          <div
            className="bg-[#13ae5c] px-[5px] pt-[6px] pb-[8px] rounded-3xl w-[80%]"
            onClick={() => {
              handleClick();
            }}
          >
            <div className="rounded-3xl py-[20px] text-[48px] font-bold text-center flex items-center justify-center bg-[#ffffff] hover:bg-[#13ae5c]  hover:cursor-pointer hover:text-[#ffffff]">
              Schedule FREE meeting with our loT analyst
            </div>
          </div>
        </div>

        <div className="mt-[40px] text-[39px]">
          <br />
          <b>Now</b>, you can also can get <b>life-time</b> access to our <b>aquaponics system modelling</b> and{" "}
          <b>fish growth rate spreadsheets as</b> ⬇️ 👨🏼‍🌾{" "}
          <span className="text-[#13AE5C] font-bold">FREE BONUS FOR YOU</span> 👩🏽‍🌾 ⬇️
          <br />
          <br />
        </div>

        <div className="mt-[40px] mb-[100px] w-[100%]">
          <div className="w-[90%]">
            <img src={"/table.png"} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoticeTextSection;
