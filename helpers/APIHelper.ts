const { request } = require("playwright");

class ApiHelper {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async makeRequest(method, endpoint, options = {}) {
    const requestContext = await request.newContext();
    const url = `${this.baseURL}${endpoint}`;
    const response = await requestContext[method](url, options);
    if (method != "delete") {
      const responseBody = await response.json();
      return { status: response.status(), body: responseBody };
    }
    return { status: response.status() };
  }

  async get(endpoint, headers = {}) {
    return this.makeRequest("get", endpoint, { headers });
  }

  async post(endpoint, data, headers = {}) {
    return this.makeRequest("post", endpoint, {
      data,
      headers: { "Content-Type": "application/json", ...headers },
    });
  }

  async put(endpoint, data, headers = {}) {
    return this.makeRequest("put", endpoint, {
      data,
      headers: { "Content-Type": "application/json", ...headers },
    });
  }

  async patch(endpoint, data, headers = {}) {
    return this.makeRequest("patch", endpoint, {
      data,
      headers: { "Content-Type": "application/json", ...headers },
    });
  }

  async delete(endpoint, headers = {}) {
    return this.makeRequest("delete", endpoint, { headers });
  }
}

module.exports = ApiHelper;
