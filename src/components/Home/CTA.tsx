import Image from "next/image";
import Link from "next/link";
const CTA = ()=>{
    return (
            <div className="my-28 pb-0 mx-auto w-11/12 max-w-screen-xl flex flex-col px-2 max-sm:pt-4 sm:pl-8 sm:flex-row items-center justify-center gap-10 shadow-2xl rounded-xl bg-gradient-to-r from-[#912980] via-[#d68253] to-[#fcb43a]">
                    <div className="w-full sm:w-1/2 max-w-lg">
                    <h2 className="max-sm:text-2xl text-4xl text-gray-300/75 font-semibold lg:text-5xl lg:!leading-tight">
                            Enjoy the experience of shopping more and <span className="text-white">paying less!</span>
                        </h2>
                        <div className="mt-6">

            <div className=" flex items-center justify-start gap-3 mt-3 ">
              <Link href="" className=" block">
                <Image
                  src="/app-store-white.png"
                  width={100}
                  height={100}
                    className="w-32"
                  alt="app store logo"
                />
              </Link>
              <Link href="" className=" block">
                <Image
                  src="/google-play-white.png"
                  width={100}
                  height={100}
                  className="w-32"
                  alt="app store logo"
                />
              </Link>
            </div>
            </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <Image src='/last-LP.png' className='' width={600} height={600} quality={100} alt='mobile comment'/>
                    </div>
            </div>
    )
}

export default CTA;