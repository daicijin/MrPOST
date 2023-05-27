import Greeting from "./modules/Greeting";
import { SCRIPT_ID } from "./constants/gas.constant";

function main() {
  let greeting = new Greeting("hayashi daichi", 26);
  greeting.sayHello();
  greeting.sayAge();

  console.log(SCRIPT_ID);
}
