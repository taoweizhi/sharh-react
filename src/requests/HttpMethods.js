export { GET, POST }

const GET = (url) => {
  return {
    method: 'get',
    url: url
  }
};

const POST = (url, data) => {
  return {
    method: 'post',
    url: url,
    data: data
  }
};
