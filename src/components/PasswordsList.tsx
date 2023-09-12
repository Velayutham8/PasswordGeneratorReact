import PasswordsListItem from "./PasswordListItem";

const PasswordsList = ({ prevPasswords }: { prevPasswords: Array<string> }) => {
  return (
    <div>
      {prevPasswords &&
        prevPasswords.length > 0 &&
        prevPasswords.map((el, index) => (
          <ul className="pwd-container" key={index}>
            <PasswordsListItem el={el} />
          </ul>
        ))}
    </div>
  );
};

export default PasswordsList;
