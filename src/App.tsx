import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/clipboard.png";
import ticklogo from "./assets/greentick.png";
import GeneratePassword from "./components/GeneratePassword";
import PasswordsList from "./components/PasswordsList";
import UserPreferences from "./components/UserPreferences";

export interface IPreference {
  length: number;
  all: boolean;
  alphabets: boolean;
  numbers: boolean;
  symbols: boolean;
}
function App() {
  const [preferences, setPreferences] = useState<IPreference>({
    length: 15,
    all: true,
    alphabets: false,
    numbers: false,
    symbols: false,
  });

  const [password, setPassword] = useState<string>("");

  const [prevPasswords, setPrevPasswords] = useState<Array<string>>([]);
  const [showPrevPasswords, setShowPrevPasswords] = useState<boolean>(false);

  // useEffect(() => {
  // localStorage.clear();
  // }, []);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  const showPreviousPasswords = () => {
    const arr: any = localStorage.getItem("previouspasswords") || [];

    setPrevPasswords(JSON.parse(arr));
    setShowPrevPasswords(true);
  };

  const onChangeUserPreference = ({ target: { name, value } }) => {
    let data: any;

    if (name === "all") {
      data = {
        ...preferences,
        all: true,
        alphabets: false,
        numbers: false,
        symbols: false,
      };
    }

    if (name === "length") {
      data = { ...preferences, [name]: value };
    }

    if (name !== "length" && name !== "all") {
      data = { ...preferences, all: false, [name]: !preferences[name] };
    }

    if (!data.alphabets && !data.numbers && !data.symbols) {
      data = { ...data, all: true };
    }

    setPreferences(data);
  };

  const onGeneratePassword = (pwd: string) => {
    setShowPrevPasswords(false);
    const getItem = localStorage.getItem("previouspasswords");

    const arr = JSON.parse(getItem) || [];

    if (arr.length >= 5) {
      arr.shift();
    }

    arr.push(pwd);

    localStorage.setItem("previouspasswords", JSON.stringify(arr));

    setPassword(pwd);
  };

  // const setCopiedToTrue = () => {
  //   setCopied(true);
  // };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Random Password Generator</h1>
        <UserPreferences
          onChangeUserPreference={onChangeUserPreference}
          preferences={preferences}
        />
        <div className="btns-container">
          <GeneratePassword
            preferences={preferences}
            onGeneratePassword={onGeneratePassword}
          />
          <button onClick={showPreviousPasswords} className="button-19">
            Show Previous Passwords
          </button>
        </div>

        {password && !showPrevPasswords && (
          <div className="pwd-container">
            <h2 className="show-pwd">{password}</h2>
            {!copied && (
              <img
                src={logo}
                alt="clipboard"
                onClick={() => {
                  setCopied(true);
                  navigator.clipboard.writeText(password);
                }}
              />
            )}
            {copied && <img src={ticklogo} alt="tick" />}
          </div>
        )}

        {showPrevPasswords && <PasswordsList prevPasswords={prevPasswords} />}
      </div>
    </div>
  );
}

export default App;
