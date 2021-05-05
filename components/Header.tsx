import pageConfig from "../utility/pageConfig";
import Link from "next/link";

type Props = {
  background?: string;
  children: React.ReactNode;
};



const Header: React.FC<Props> = ({ background, children }) => {
  const textColor: string =
    background !== "bg-theme" ? "text-theme" : "text-white";

  return (
    <div
      className={`min-h-screen flex  justify-center ${background}`}
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse justify-between">
        <div className={`mt-20 md:w-2/5 w-24 ${textColor}`}>
          <div className="border-r-2 border-red-500">
            {pageConfig.nav.links.map((link, index) => {
              return (
                <div className="text-right py-3" key={index}>
                  <Link href={link.url}>
                    <a
                      className={
                        "text-3xl hover:text-red-500 transition duration-500 ease-in-out mr-4"
                      }
                    >
                      {link.text}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-white mt-10">{children}</div>
      </div>
    </div>
  );
  {
    ("");
  }
};

export default Header;

// Header.getInitialProps = () => {
//   return {
//     blogTitle: "Rookie for life!",
//   };
// };
