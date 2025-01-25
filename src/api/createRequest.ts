const createRequest = async (options: IApiCreateRequest): Promise<void> => {
  const reqSettings  = {
    headers: { "Content-Type": "application/json" },
    method: options.method,
    body: options.method === 'POST' ? JSON.stringify(options.body) : undefined,
  };

  const response = await fetch(options.url, reqSettings);

  options.callback(await response.json());
};

export default createRequest;
