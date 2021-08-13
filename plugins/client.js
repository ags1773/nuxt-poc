class Client {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getCollectionBySlug(slug, opts = {}) {
    return getResource(this.httpClient, `/api/v1/collections/${slug}`, opts);
  }
}

async function getResource(httpClient, url, opts = {}) {
  const { qs = {} } = opts;
  const queryString = isEmpty(qs)
    ? ""
    : Object.keys(qs).reduce((accumulator, key, idx) => {
        return idx === 0
          ? (accumulator += `${key}=${qs[key]}`)
          : (accumulator += `&${key}=${qs[key]}`);
      }, "");
  const resourceUrl = queryString ? `${url}?${queryString}` : url;
  return httpClient.$get(resourceUrl);
}

function isEmpty(obj) {
  obj && obj.constructor === Object && Object.keys(obj).length === 0;
}

export default function (context, inject) {
  const httpClient = context.$http;
  inject("client", new Client(httpClient));
}
