import { GET, urlFor } from "../utils";

const homeUrl = urlFor();
const homeGET = GET(homeUrl);

export { homeGET }
