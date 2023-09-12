import { useEffect, useState } from "react";
import logo from "../assets/clipboard.png";
import ticklogo from "../assets/greentick.png";

const PasswordsListItem = ({ el }: { el: string }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <>
      <li className="pwd-list">{el}</li>
      {!copied && (
        <img
          src={logo}
          alt="clipboard"
          onClick={() => {
            setCopied(true);
            navigator.clipboard.writeText(el);
          }}
        />
      )}
      {copied && <img src={ticklogo} alt="tick" />}
    </>
  );
};

export default PasswordsListItem;
