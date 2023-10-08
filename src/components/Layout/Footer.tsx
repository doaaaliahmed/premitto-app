import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const footerNavs = [
    {
      href: "",
      name: "Home",
    },
    {
      href: "",
      name: "About us",
    },
    {
      href: "",
      name: "How it works",
    },
    {
      href: "",
      name: "Faq",
    },
    {
        href: "",
        name: "Contact us",
      },
      {
        href: "",
        name: "Privacy policy",
      },
      {
        href: "",
        name: "Terms & conditions",
      },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex md:px-20">
          <div className="space-y-6">
            <Image
              src="/1.png"
              width={100}
              height={100}
              alt="premitto logo"
              className="w-32"
            />
            <p className="max-w-md max-sm:text-sm ">
              Premitto is an exclusive subscription based service that offers a
              variety of deals and discounts on premium experiences across six
              categories including food and beverages, beauty and wellness,
              entertainment, retail and services, travel and hotel, and online
              deals.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-3 mt-3 sm:block">
              <Link href="">
                <Image
                  src="/Mobile app store badge (2).png"
                  width={100}
                  height={100}
                  alt="app store logo"
                />
              </Link>
              <Link href="" className="mt-0 block sm:mt-3">
                <Image
                  src="/Mobile app store badge.png"
                  width={100}
                  height={100}
                  alt="app store logo"
                />
              </Link>

            </div>
          </div>
        </div>
        
          <ul className="md:px-20 mt-10 flex flex-col md:flex-row items-start  md:items-center gap-4 text-sm sm:text-base">
            {footerNavs.map((item, idx) => (
              <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                <Link  href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        
        <div className="md:px-20 mt-4 py-4 border-t gap-y-4  text-center flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm ">© 2022 Premitto LLC. All rights reserved.</p>
          <div className={`flex items-center gap-x-4 text-gray-700 `}>
            <Link href="">
              <svg
                className="w-5 h-5 hover:text-gray-500 duration-150"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <title>instagram</title>
                <g clipPath="url(#clip0_17_63)">
                  <path d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z" />
                  <path d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z" />
                </g>
                <defs>
                  <clipPath id="clip0_17_63">
                    <path d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href="">
              <svg
                className="w-5 h-5 hover:text-gray-500 duration-150"
                version="1.1"
                id="svg5"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1668.56 1221.19"
                fill="currentColor"
              >
                <title>twitter</title>
                <g id="layer1" transform="translate(52.390088,-25.058597)">
                  <path
                    id="path1009"
                    d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                  />
                </g>
              </svg>
            </Link>
            <Link href="">
              <svg
                className="w-5 h-5 hover:text-gray-500 duration-150"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>LinkedIn</title>
                <path
                  fill="currentColor"
                  d="M5,3.5A2.48,2.48,0,1,1,2.5,1,2.49,2.49,0,0,1,5,3.5ZM5,8H0V24H5Zm8,0H8V24h5V15.6c0-4.67,6-5.05,6,0V24h5V13.87C24,6,15.08,6.28,13,10.16Z"
                />
              </svg>
            </Link>
            <Link href="">
              <svg
                fill="currentColor"
                className="w-5 h-5 hover:text-gray-500 duration-150"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>tiktok</title>
                <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
              </svg>
            </Link>

            <Link href="">
              <svg
                className="w-5 h-5 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <title>facebook</title>
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
