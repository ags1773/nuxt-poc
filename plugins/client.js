class Client {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getConfig() {
    return getResource(this.httpClient, "/api/v1/config");
  }
  getPbConfig(publisherId) {
    if (!publisherId)
      throw new Error("publisherId unknown, can't fetch pagebuilder config");
    return getResource(
      this.httpClient,
      `https://pagebuilder.quintype.com/api/v1/accounts/${publisherId}/config`
    );
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

export default function ({ $http }, inject) {
  inject("client", new Client($http));
}
