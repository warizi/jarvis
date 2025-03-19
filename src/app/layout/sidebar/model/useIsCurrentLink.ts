import { useLocation } from "react-router-dom";

const useIsCurrentLink = () => {
  const { pathname } = useLocation();

  const isCurrentLink = (link: string) => {
    const terminatedSlushLink = link.split("/").join("");
    const terminatedSlushPathname = pathname.split("/");

    if (
      terminatedSlushPathname.join("") === "" &&
      terminatedSlushLink === ""
    ) {
      return true;
    } else if (terminatedSlushLink === "") {
      return false;
    }

    return terminatedSlushPathname.includes(
      terminatedSlushLink
    );
  };

  return isCurrentLink;
};

export default useIsCurrentLink;
