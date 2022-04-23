import Md5 from "md5";

interface Options {
  url: string;
  params?: object;
  method?: "POST" | "GET" | "DELETE";
}

interface Respones<T> {
  code: number;
  data: T;
  message: string;
}

export const http = async <T = any>(options: Options) => {
  const timestamp = new Date().getTime();
  const headers = {};
  headers["version"] = "1.0.0";
  headers["timestamp"] = timestamp;
  headers["sign"] = setSign(options, timestamp);

  const { data } = await useFetch<Respones<T>>(options.url, {
    method: options.method,
    params: options.params,
    baseURL: "http://api.xl686.com",
    async onRequest(ctx) {
      ctx.options.headers = headers;
    },
    async onResponse({ request, response, options }) {
      //console.log(response._data);
    },
  });
  return data.value.data;
};

function setSign(config: Options, timestamp: number) {
  let str = "";
  if ((config.method == "GET" || config.method == "DELETE") && config.params) {
    let keys = Object.keys(config.params).sort();
    for (let i = 0; i < keys.length; i++) {
      str += config.params[keys[i]];
    }
  }
  return Md5(str + Md5(timestamp.toString().substring(0, 8)) + timestamp);
}
