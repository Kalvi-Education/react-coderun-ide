// import axios from "axios";

import {
  IRunner,
  IRunnerCredentials,
  allowedLanguagesType,
} from "../../models";

export class Runner implements IRunner {
  id = "runner";
  baseUrl = "";
  runEndpoint = "";
  credentials: IRunnerCredentials;
  languageMap: any = {
    javascript: "nodejs",
  };

  constructor(credentials: IRunnerCredentials) {
    this.credentials = credentials;
  }

  async runCode(code: string, language: allowedLanguagesType): Promise<string> {
    let output = "";
    try {
      // ! STUBBED
      // const response = await axios.post(`${this.baseUrl}${this.runEndpoint}`, {
      //   script: code,
      //   language: this.languageMap[language as unknown as string] ?? language,
      //   versionIndex: "0",
      //   clientId: this.credentials.clientId,
      //   clientSecret: this.credentials.clientSecret,
      // });

      const response = {
        data: {
          output: "",
        },
      };

      output = response.data.output;
    } catch (e) {
      output = "Error running code";
    }

    return output;
  }
}
