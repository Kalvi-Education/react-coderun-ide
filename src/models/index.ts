import { allowedLanguages } from "../constants";

// Types
export type allowedLanguagesType = typeof allowedLanguages;

// Helpers
export interface IRunnerCredentials {
  clientId: string;
  clientSecret: string;
}

export interface IRunOutput {
  output?: string;
  error?: string;
}

// Class declarations
export interface IRunner {
  id: string;
  baseUrl: string;
  runEndpoint: string;
  credentials?: IRunnerCredentials;
}

// Props

export interface IIdeOptions {
  title?: string;
  description?: string;
  default_lang: allowedLanguagesType;
  templates: Array<{
    lang: allowedLanguagesType;
    code: string;
  }>;
}
export interface IIdeProps {
  height?: string;
  width?: string;
  value?: string;
  language?: allowedLanguagesType;
  options: IIdeOptions;
  run: (code: string, language: allowedLanguagesType) => Promise<IRunOutput>; // Should catch errors and sucess. Shold be a js o sent in the cb that will have the op or the e as the key
  onChange?: Function;
  onRun?: Function;
}

export interface IEditorProps {
  height?: string | number;
  width?: string | number;
  value?: string;
  onChange?: Function;
  language: allowedLanguagesType;
}

export interface IOutputProps {
  height?: string | number;
  width?: string | number;
  loading?: boolean;
  value?: string;
}
