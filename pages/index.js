import Layout from "../components/Layout";
import{Header, Footer} from '../components/index';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Layout pageTitle="Neflix clone">
        <Header />
        {/* Tv Section */}
        <section className="sm:flex items-center sm:p-14 h-[27rem] mt-5 border-b-8 border-[#404040]">
          <div className="sm:text-left  text-center">
            <h1 className="sm:text-[3.5rem] text-[2rem] font-semibold">Enjoy on your TV.</h1>
            <h2 className="sm:text-[1.7rem] text-[1.2rem] px font-medium">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>

          <div className="flex justify-center w-full ">
            <div className="relative">
              <div className=" w-50">
                <Image
                  src="/assets/tv.webp"
                  alt="tv"
                  height="250"
                  width="400"
                  className="z-10"
                />
                <video
                  className=" w-full h-[9rem] top-10 right-1 absolute"
                  autoPlay
                  playsInline
                  muted=""
                  loop=""
                >
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </section>
        {/* Download Section */}
        <section className="mt-5 border-b-8 border-[#404040] ">
          <div className="text-center">
            <h1 className="text-[1.8rem] font-semibold">
              Download your shows to watch offline.
            </h1>
            <h2 className="text-[1.19rem] px-3 font-medium">
              Save your favourites easily and always have something to watch.
            </h2>
          </div>

          <div className="flex justify-center w-full mb-24">
            <div className="relative">
              <div className="w-50">
                <Image
                  src="/assets/mobile-0819.webp"
                  alt="download"
                  height="200"
                  width="300"
                  className="z-10"
                />
                <div className="bg-[#000] absolute -mt-16 z-10  right-4 w-[16rem] h-[4rem] border-2 border-[#404040] rounded-xl">
                  <div className="flex p-2 relative">
                    <Image
                      src="/assets/boxshot.webp"
                      alt="box-shot"
                      height="50"
                      width="35"
                      className=""
                    />
                    <span className="ml-2">
                      <h2 className="font-semibold">Stranger things</h2>
                      <h4 className="text-[0.9rem] font-semibold text-[#003F8F]">
                        Downloading....
                      </h4>
                    </span>
                    <div className="absolute right-1 w-[3rem] h-[3rem] bg-center bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif')]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  */}
        <section className="mt-5 border-b-8 border-[#404040]">
          <div className="text-center my-8 mb-16">
            <h1 className="text-[1.8rem] font-semibold">Watch everywhere.</h1>
            <h2 className="text-[1.19rem] px-3 font-medium">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
        </section>

        {/* Create profile for kids */}
        <section className="mt-5 border-b-8 border-[#404040]">
          <div className="text-center my-8 mb-16">
            <h1 className="text-[1.8rem] font-semibold">
              Create profiles for kids.
            </h1>
            <h2 className="text-[1.19rem] px-3">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </h2>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/kids.webp"
              alt="kids"
              height="240"
              width="330"
            />
          </div>
        </section>

        <Footer />
      </Layout>
    </div>
  ); 
}
