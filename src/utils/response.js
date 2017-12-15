function response({ body, statusCode }) {
  const res = {
    statusCode,
    body: JSON.stringify(body)
  };

  res.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  };

  return res;
}

export function success(body) {
  return response({
    body,
    statusCode: 200
  });
}

export function error(body) {
  return response({
    body,
    statusCode: 500
  });
}

export function notFound(body) {
  return response({
    body,
    statusCode: 404
  });
}
