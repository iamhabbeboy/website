import Link from 'next/link'

import pageConfig from "../utility/pageConfig";

export default function Navigation() {
  return (
    <div className="bg-theme">
      <div className="flex item-center justify-between w-10/12 mx-auto py-3 text-white">
        <h1 className="text-3xl font-bold">
          <Link href="/">
            {pageConfig.nav.logo}
          </Link>
          {" "}<span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
        </h1>
        <div className="mt-2">&nbsp;</div>
      </div>
    </div>
  );
}
