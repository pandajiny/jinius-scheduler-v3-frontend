type RestMethod = "GET" | "POST" | "PUT" | "DELETE";

function getRequestOptions(method: RestMethod, body?: Object): RequestInit {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    throw `please login first`;
  }
  const headers: AuthHeader = {
    Authorization: `Bearer ${token}`,
  };

  if (body) {
    return {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
  } else {
    return {
      method,
      headers,
    };
  }
}

export async function doGetRequest<T>(url: string): Promise<T> {
  console.log(`get request to ${url}`);
  const response = await fetch(url, getRequestOptions("GET"));

  if (!response.ok) {
    throw new Error(await response.json());
  }

  const result = (await response.json()) as HttpResponse<T>;
  if (!result.ok || !result.data) {
    throw result.error_message;
  }
  return result.data;
}

export async function doPostRequest<T>(args: {
  url: string;
  body: Object;
}): Promise<T> {
  const { body, url } = args;
  console.log(`post request to ${url}`);
  const response = await fetch(url, getRequestOptions("POST", body));

  if (!response.ok) {
    throw new Error(`cannot fetch request to ${url}`);
  }

  const result = (await response.json()) as HttpResponse<T>;

  if (!result.ok || !result.data) {
    throw new Error(result.error_message);
  }

  return result.data;
}

export async function doDeleteRequest<T>(args: { url: string }) {
  const { url } = args;
  const response = await fetch(url, getRequestOptions("DELETE"));

  if (!response.ok) {
    throw new Error(`cannot fetch request to ${url}`);
  }

  const result = (await response.json()) as HttpResponse<T>;

  if (!result.ok || !result.data) {
    throw new Error(result.error_message);
  }

  return result.data;
}

export async function doPutRequest<T>(args: { url: string; body: Object }) {
  const { body, url } = args;
  console.log(`post request to ${url}`);
  const response = await fetch(url, getRequestOptions("PUT", body));

  if (!response.ok) {
    throw new Error(`cannot fetch request to ${url}`);
  }

  const result = (await response.json()) as HttpResponse<T>;

  if (!result.ok || !result.data) {
    throw new Error(result.error_message);
  }

  return result.data;
}
