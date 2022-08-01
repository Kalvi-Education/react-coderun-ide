import { ReactEventHandler, useState } from "react";
import { allowedLanguages } from "../constants";
import { allowedLanguagesType } from "../models";

export interface ILanguageSelectProps {
  language?: allowedLanguagesType;
  onChange: Function;
}

const LanguageSelect = (props: ILanguageSelectProps) => {
  const options = allowedLanguages;
  const [selectedLanguage, selectLanguage] = useState<allowedLanguagesType>(
    props.language ?? ("javascript" as unknown as allowedLanguagesType)
  );

  const handleChange = (event: any) => {
    const newLanguage = (event.target as HTMLInputElement)
      .value as unknown as allowedLanguagesType;

    selectLanguage(newLanguage);
    props.onChange(newLanguage);
  };

  return (
    <div>
      <select value={selectedLanguage} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
