import { IPreference } from "../App";

const UserPreferences = ({
  onChangeUserPreference,
  preferences,
}: {
  onChangeUserPreference: (e: any) => void;
  preferences: IPreference;
}) => {
  const onChangeHandler = (e: any) => {
    onChangeUserPreference(e);
  };
  return (
    <div>
      <label>
        Password Length :<>{preferences.length}</>
        <input
          type="range"
          min={8}
          max={20}
          name="length"
          value={preferences.length}
          onChange={onChangeHandler}
        />
      </label>
      <>
        <label>
          <input
            type="checkbox"
            name="all"
            checked={preferences.all}
            onChange={onChangeHandler}
          />
          All
        </label>
        <label>
          <input
            type="checkbox"
            name="alphabets"
            checked={preferences.alphabets}
            onChange={onChangeHandler}
          />
          Alphabets
        </label>
        <label>
          <input
            type="checkbox"
            name="numbers"
            checked={preferences.numbers}
            onChange={onChangeHandler}
          />
          Numbers
        </label>
        <label>
          <input
            type="checkbox"
            name="symbols"
            checked={preferences.symbols}
            onChange={onChangeHandler}
          />
          Symbols
        </label>
      </>
    </div>
  );
};

export default UserPreferences;
