// // const $http = require("http");

// /**
//  * getCollectionBySlug
//  *
//  * @param {string} slug collection slug
//  * @param {object} opts options object. All options are optional
//  * @param {object} opts.qs key-value pairs of this query string obj are added to the API call
//  */
// export async function getCollectionBySlug(slug, opts = {}) {
//   // return getResource(`/api/v1/collections/${slug}`, opts);
//   return new Promise()
// }

// async function getResource(url, opts = {}) {
//   const { qs = {} } = opts;
//   const queryString = isEmpty(qs)
//     ? ""
//     : Object.keys(qs).reduce((accumulator, key, idx) => {
//         return idx === 0
//           ? (accumulator += `${key}=${qs[key]}`)
//           : (accumulator += `&${key}=${qs[key]}`);
//       }, "");
//   const resourceUrl = queryString ? `${url}?${queryString}` : url;
//   console.log("resourceUrl >> ", resourceUrl)
//   // const temp = $http.$get(resourceUrl);
//   console.log("temp >> ", temp)
//   // return $http.get(resourceUrl);
// }

// function isEmpty(obj) {
//   obj && obj.constructor === Object && Object.keys(obj).length === 0;
// }
