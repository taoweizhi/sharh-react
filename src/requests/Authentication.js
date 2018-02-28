import { GET, POST, urlFor } from "../utils";
import { authentication } from "../sitemap";

const {root, login, logout, signin} = authentication;

const loginUrl = urlFor.call(root)(`${root}/${login}`);
const logoutUrl = urlFor(`${root}/${logout}`);
const signinUrl = urlFor(`${root}/${signin}`);

const loginGET = GET(loginUrl);
const logoutGET = GET(logoutUrl);
const signinGET = GET(signinUrl);

const loginPOST = (data) => POST(loginUrl, data);
const signinPOST = (data) => POST(signinUrl, data);

export {loginGET, loginPOST, logoutGET, signinGET, signinPOST}
