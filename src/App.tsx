import { useState } from "react";
import "./App.css";
import GeneratePassword from "./components/GeneratePassword";
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

  return (
    <div className="App">
      <div className="App-header">
        {/* {JSON.stringify(preferences)} */}
        Random Password Generator
        <UserPreferences
          onChangeUserPreference={onChangeUserPreference}
          preferences={preferences}
        />
        <GeneratePassword
          preferences={preferences}
          onGeneratePassword={(pwd) => setPassword(pwd)}
        />
        <p>{password && password}</p>
      </div>
    </div>
  );
}

export default App;
