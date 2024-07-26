import HeaderStyle from "../HeaderStyle/HeaderStyle";
import Logo from "./../../assets/imgs/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg";

export default function Home() {
  return (
    <>
      <section className="home-section w-full min-h-[75%] pt-48 pb-1 bg-[#19BC9B] flex items-end">
        <div className="container mx-auto flex flex-col items-center">
          <img className="w-[20%] rounded-full" src={Logo} />
          <h1 className="text-6xl font-bold my-8 text-center">START REACT</h1>
          <HeaderStyle
            textColorClass={"text-white"}
            bgColorClassBefore={"before:bg-white"}
            bgColorClassAfter={"after:bg-white"}
          />
          <p className="mt-8 mb-5 text-sm md:text-xl md:font-medium">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </section>
    </>
  );
}
