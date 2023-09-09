import { IPreference } from "../App";

const GeneratePassword = ({
  preferences,
  onGeneratePassword,
}: {
  preferences: IPreference;
  onGeneratePassword: (pwd: string) => void;
}) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_+=";

  const getEncryptionString = (): string => {
    const { all: allPref } = preferences;

    let encryptionString: string = "";

    if (allPref) {
      encryptionString = encryptionString.concat(alphabets, numbers, symbols);
    }

    if (!allPref) {
      if (preferences.alphabets) {
        encryptionString = encryptionString.concat(alphabets);
      }

      if (preferences.numbers) {
        encryptionString = encryptionString.concat(numbers);
      }

      if (preferences.symbols) {
        encryptionString = encryptionString.concat(symbols);
      }
    }

    return encryptionString;
  };

  const GenerateRandomPassword = () => {
    let password: string = "";

    const { length } = preferences;

    const encryptionString = getEncryptionString();

    for (let i = 0; i < length; i++) {
      const randomnumber: number = Math.floor(
        Math.random() * encryptionString.length
      );

      const char: string = encryptionString.charAt(randomnumber);

      password = password.concat(char);
    }

    onGeneratePassword(password);
  };

  return (
    <div className="generate-btn">
      <button onClick={GenerateRandomPassword} className="button-19">
        Generate Password
      </button>
    </div>
  );
};

export default GeneratePassword;
