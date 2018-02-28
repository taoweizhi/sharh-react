import { GET, urlFor } from "../utils";

// TODO 完善, 参考Authentication

const homeUrl = urlFor();
const homeGET = GET(homeUrl);

export { homeGET }
