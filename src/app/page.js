import Button from "@/components/Button";
import Carousal from "@/components/Carousal";
import Tabs from "@/components/Tabs";
import { carousalImages } from "@/data/assets";

export default function Home() {
  const sectionImageStyle = {
    backgroundImage: "url('/images/mask.png')",
    backgroundSize: "cover",
  };

  return (
    <main
      className="flex min-h-screen flex-col 
     text-base bg-black font-poppins mt-4 my-10 gap-5 lg:gap-16"
    >
      {/* Carousal */}
      <section className="md:mx-2 md:ml-10 lg:ml-20 h-1/3 lg:h-1/2 grid grid-cols-2 lg:grid-cols-3 justify-between">
        <div className="col-span-2 p-4 md:p-0 md:col-span-1 lg:col-span-1 flex flex-col gap-4 justify-center text-center md:text-start">
          <p className="text-[#BEF56E] font-light text-sm md:text-xs tracking-widest">
            EXPLORE A NEW DIMENSION
          </p>
          <p className="text-xl md:text-3xl lg:text-5xl font-light text-white leading-normal">
            Ready to unlock your potentials in a world of fun?
          </p>
          <div className="mt-4 cursor-pointer">
            <Button name={"GET STARTED"} />
          </div>
        </div>
        <div className="col-span-2 mt-5 pb-10 md:mt-0 lg:ml-20 md:col-span-1 lg:col-span-2 text-white relative">
          <Carousal>
            {carousalImages.map((c, i) => (
              <div
                key={i}
                className=" w-full h-full lg:w-[488px] lg:h-[388px] rounded-lg my-12 "
              >
                <img className="w-full h-full" src={c.img} />
              </div>
            ))}
          </Carousal>
        </div>
      </section>

      {/* Tabs */}
      <section
        className="w-full h-fit object-cover object-center text-white"
        style={sectionImageStyle}
      >
        <div className="my-10">
          <p className="text-3xl font-thin text-center">Newly Released Games</p>
          <Tabs />
        </div>
      </section>
      {/* Card */}

      <section className="grid grid-cols-12 gap-6 p-4 lg:p-8">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-6 ">
          <div className="w-full h-fit">
            <img className="w-full h-full" src="/images/c4.png" />
            <div className="flex overflow-x-auto w-full h-full gap-4 mt-4">
              <img className="w-full h-full" src="/images/c2.png" />
              <img className="w-full h-full" src="/images/c3.png" />
              <img className="w-full h-full" src="/images/c1.png" />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-6 overflow-y-auto flex flex-col lg:text-sm gap-4 mt-4 md:mt-0 md:font-thin text-white">
          <div className="w-full h-full">
            <p className="text-[#BEF56E] text-2xl font-medium">
              Mortal Kombat 1
            </p>
            <p className="whitespace-normal lg:leading-8 lg:mt-4">
              For single-player, the game features the return of the plot-driven
              Story Mode and the traditional form of Towers mode from the
              previous games, while introducing the addition of the seasonal
              Invasion mode, an online mode combining fighting mechanics with
              board game and role-playing game elements.
            </p>
            <div className="flex flex-col gap-1 mt-4 lg:gap-4 lg:mt-8">
              <p>Category: Fighting Action-adventure</p>
              <p>Listed Date: September 19, 2023</p>
              <p>Chain: Ethereum</p>
              <p>Number of users: 439,475 </p>
            </div>
            <div className="text-black mt-4 lg:mt-8 text-center md:text-start">
              <Button name={"PLAY"} />
            </div>
          </div>
        </div>
      </section>

      <section className="md:mx-2 md:ml-10 lg:ml-20 h-1/3 lg:h-1/2 grid grid-cols-2 lg:grid-cols-3 justify-between">
        <div className="col-span-2 p-4 md:p-0  md:col-span-1 lg:col-span-1 flex flex-col gap-4 justify-center text-center md:text-start">
          <p className="text-[#BEF56E] font-light text-sm md:text-xs tracking-widest">
            EXPLORE A NEW DIMENSION
          </p>
          <p className="text-xl  md:text-3xl lg:text-5xl font-light text-white leading-normal">
            Ready to unlock your potentials in a world of fun?
          </p>
          <div className="mt-2 lg:mt-4 cursor-pointer">
            <Button name={"GET STARTED"} />
          </div>
        </div>
        <div className="col-span-2 mt-5 md:mt-0 w-fit h-fit lg:ml-20 md:col-span-1 lg:col-span-2 text-white">
          <img className="w-full h-full" src="images/CTA.png" />
        </div>
      </section>
    </main>
  );
}
