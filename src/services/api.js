import fetch from 'isomorphic-fetch';
import LocalStorage from 'humble-localstorage';

class API {
  static endpoint = 'https://xpenses-draft.firebaseio.com';

  static get(resource, data) {
    return API.call('get', resource, data);
  }

  static post(resource, data) {
    return API.call('post', resource, data);
  }

  static put(resource, data) {
    return API.call('put', resource, data);
  }

  static delete(resource, data) {
    return API.call('delete', resource, data);
  }

  static patch(resource, data) {
    return API.call('patch', resource, data);
  }

  static call(method, resource, data = {}, headers = {}) {
    let url = `${API.endpoint}/${resource}.json`;
    const cached = LocalStorage.getObject(url);

    if (cached) {
      return Promise.resolve(cached);
    }

    const options = {
      method,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };

    if (! Array.from(['get', 'head']).includes(method)) {
      options.body = JSON.stringify(data);
    } else {
      if (Object.keys(data).length) {
        url += '?';

        for (let key of Object.keys(data)) {
          url += `${key}=${data[key]}&`;
        }
      }
    }

    return fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        if (response.errors) {
          return Promise.reject(response);
        }

        LocalStorage.setObject(url, response);

        return Promise.resolve(response);
      });
  }
};

export default API;
