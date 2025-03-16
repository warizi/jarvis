import { useLocation } from "react-router-dom";

const useIsCurrentLink = () => {
  const { pathname } = useLocation();

  const isCurrentLink = (link: string) => {
    const terminatedSlushLink = link.split("/").join("");
    const terminatedSlushPathname = pathname
      .split("/")
      .join("");

    return terminatedSlushLink === terminatedSlushPathname;
  };

  return isCurrentLink;
};

export default useIsCurrentLink;
