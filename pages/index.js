import Layout from "../components/Layout";
import{Header, Footer} from '../components/index';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Layout pageTitle="Neflix clone">
        <Header />
        {/* Tv Section */}
        <section className="lg:flex items-center sm:p-14 h-[27rem] mt-5 border-b-8 border-[#404040]">
          <div className="lg:text-left  text-center">
            <h1 className="lg:text-[3.5rem] text-[2rem] font-semibold">
              Enjoy on your TV.
            </h1>
            <h2 className="lg:text-[1.7rem] text-[1.2rem] px font-medium">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </h2>
          </div>

          <div className="flex justify-center w-full ">
            <div className="relative">
              <div className="md:w-[32rem] w-[20rem] md:h-[23rem] h-[15rem] relative">
                <Image
                  src="/assets/tv.webp"
                  alt="tv"
                  layout="fill"
                  className="z-10"
                />
                <video
                  className="md:w-[24rem] w-[16rem] md:h-[20rem] h-[12rem]  md:left-[4rem] left-[2.5rem] bottom-9 absolute"
                  autoPlay
                  loop
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
        <section className="lg:flex items-center flex-row-reverse px-3 py-1 border-b-8 border-[#404040] ">
          <div className="sm:text-left text-center w-full">
            <h1 className="sm:text-[3rem] text-[1.8rem] font-bold">
              Download your shows to watch offline.
            </h1>
            <h2 className="sm:text-[1.8rem] text-[1.19rem] font-medium">
              Save your favourites easily and always have something to watch.
            </h2>
          </div>

          <div className="flex sm:justify-start justify-center w-full mb-24">
              <div className="sm:h-[25rem] h-[20rem] sm:w-[30rem] w-[22rem] relative">
                <Image
                  src="/assets/mobile-0819.webp"
                  alt="download"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="flex items-center m-auto bg-[#000] absolute bottom-[5%] z-10  left-[16%] sm:min-w-[23rem] min-w-[16rem] w-[60%] sm:h-[5rem] h-[4rem] border-2 border-[#404040] rounded-xl">
                  <div className="flex items-center px-2 relative">
                    <Image
                      src="/assets/boxshot.webp"
                      alt="box-shot"
                      height={50}
                      width={35}
                    />
                    </div>
                    <span className="ml-2">
                      <h2 className="font-semibold">Stranger things</h2>
                      <h4 className="text-[0.9rem] font-semibold text-[#0071eb]">
                        Downloading...
                      </h4>
                    </span>
                    <div className="absolute right-1  w-[3rem] h-[3rem] bg-center bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif')]"></div>
                  </div>
                </div>
              </div>
        </section>

        {/*  */}
        <section className="mt-5 border-b-8 border-[#404040]">
          <div className="sm:text-left md:pl-24 text-center my-8 mb-16 sm:w-[45rem]">
            <h1 className="sm:text-[2.9rem] text-[1.8rem] font-semibold">Watch everywhere.</h1>
            <h2 className="sm:text-[1.9rem] text-[1.19rem] w-full  font-medium">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
        </section>

        {/* Create profile for kids */}
        <section className="flex md:flex-row-reverse items-center flex-col px-12 py-12 border-b-8 border-[#404040]">
          <div className="md:text-left text-center w-full">
            <h1 className="md:text-[3rem] text-[1.8rem] font-semibold">
              Create profiles for kids.
            </h1>
            <h2 className="md:text-[1.8rem] w-[70%] text-[1.19rem]">
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </h2>
          </div>
          <div className="flex justify-center w-[60%] md:h-[24rem] h-[20rem] relative">
            <Image
              src="/assets/kids.webp"
              alt="kids"
              layout="fill"
            />
          </div>
        </section>
        
        {/* frequently asked questions */}

        <section className="mt-5 border-b-8 border-[#404040]">
          <h2 className="text-center text-[3rem] font-bold">Frequently Asked Questions</h2>
        </section>

        <Footer />
      </Layout>
    </div>
  ); 
}
