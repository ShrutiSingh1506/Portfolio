// @flow strict
import Link from "next/link";

function Footer() {
  return (
    <div className="relative border-t bg-[#2F2F2F] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        
        {/* Top gradient line */}
        <div className="flex justify-center">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left text */}
          <p className="text-sm text-gray-300 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#16f2b3] font-medium">
              Shruti Singh
            </span>
            . All rights reserved.
          </p>

          {/* Right text */}
          <p className="text-sm text-gray-400 text-center md:text-right">
            Built with Next.js & Tailwind CSS
          </p>

        </div>
      </div>
    </div>
  );
}

export default Footer;
