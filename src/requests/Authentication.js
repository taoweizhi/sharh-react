import { GET, POST, urlFor } from "../utils";
import { authentication } from "../config/sitemap";

const {root, login, logout, signin} = authentication;

const loginUrl = urlFor(`${root}/${login}`);
const logoutUrl = urlFor(`${root}/${logout}`);
const signinUrl = urlFor(`${root}/${signin}`);

const loginGET = GET(loginUrl);
const logoutGET = GET(logoutUrl);
const signinGET = GET(signinUrl);

const loginPOST = (data) => POST(loginUrl, data);
const signinPOST = (data) => POST(signinUrl, data);

export {loginUrl, logoutUrl, signinUrl, loginGET, loginPOST, logoutGET, signinGET, signinPOST}
