export default function ({ $http }) {
  $http.onRequest((config) => {
    console.log("Making request to " + config.url);
  });

  // $http.onResponse((req, options, res) => {
  //   console.log("Making request to " + req.url);
  //   // console.log("Options :", options);
  //   // console.log("Response data :", res.body);
  //   return res;
  // });
}
