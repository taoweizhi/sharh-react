export {loginGET, loginPOST, logoutGET, signinGET, signinPOST}

import { urlFor } from "../config";
import { GET, POST } from "./HttpMethods";

const urlPrefix = 'authentication';
const loginUrl = urlFor(`${urlPrefix}/login`);
const logoutUrl = urlFor(`${urlPrefix}/logout`);
const signinUrl = urlFor(`${urlPrefix}/signin`);

const loginGET = GET(loginUrl);
const logoutGET = GET(logoutUrl);
const signinGET = GET(signinUrl);

const loginPOST = (data) => POST(loginUrl, data);
const signinPOST = (data) => POST(signinUrl, data);
