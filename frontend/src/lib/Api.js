class Api {
  static headers() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    };
  }

  static get(route) {
    return this.xhr(route, null, "GET");
  }

  static put(route, params) {
    return this.xhr(route, params, "PUT");
  }

  static post(route, params) {
    return this.xhr(route, params, "POST");
  }

  static delete(route, params) {
    return this.xhr(route, params, "DELETE");
  }

  static xhr(route, params, verb) {
    const host = "http://localhost:3001";
    const url = `${host}${route}`;
    let options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null
    );
    options.headers = Api.headers();

    return fetch(url, options).then(resp => {
      return resp;
    });
  }
}

export default Api;
