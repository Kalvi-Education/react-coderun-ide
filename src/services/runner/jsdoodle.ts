import { Runner } from "./base";
import { IRunner } from "../../models";

export default class Jsdoodle extends Runner implements IRunner {
  id = "jsdoodle";
  baseUrl = "https://api.jdoodle.com/v1";
  runEndpoint = "/execute";
}
