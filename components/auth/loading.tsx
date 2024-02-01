import Image from "next/image";
import logo from "../../images/Addasubheading-ezgif.com-video-to-gif-converter.gif";

const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Image
        src={logo}
        alt="logo"
        width={500}
        height={500}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
