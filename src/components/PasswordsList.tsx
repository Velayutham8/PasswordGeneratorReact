import logo from "../assets/clipboard.png";
import ticklogo from "../assets/greentick.png";

const PasswordsList = ({ prevPasswords }: { prevPasswords: Array<string> }) => {
  return (
    <div>
      {prevPasswords &&
        prevPasswords.length > 0 &&
        prevPasswords.map((el, index) => (
          <div className="pwd-list" key={index}>
            {el}
          </div>
        ))}
    </div>
  );
};

export default PasswordsList;
