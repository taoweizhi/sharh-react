export {}

import { urlFor } from "../config";
import { GET, POST } from "./HttpMethods";

const urlPrefix = 'attendance';
// TODO 完善
const centerUrl = urlFor(`${urlPrefix}/center`);
const registerUrl = urlFor();
const validateUrl = urlFor();
