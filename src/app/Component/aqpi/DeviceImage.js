const DeviceImage = () => {
  return (
    <div className="flex justify-center mt-[90px] w-[100%]">
      <div className="flex w-[60%] h-[669px] justify-center">
        <img
          src={"/device.png"}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};
export default DeviceImage;
