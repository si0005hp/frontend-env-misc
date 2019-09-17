import { decolateStr } from "./lib";
import _ from "lodash";

const msg: string = "Hello TypeScript!";
console.log(decolateStr(msg));

const nums = [1, 5, 8, 10, 1, 5, 15, 42, 5];
console.log(_.uniq(nums));
