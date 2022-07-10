export const parseParamsObject = (params): string => {
  return Object.keys(params)
    .map((obj) =>
      params[obj] !== null && params[obj] !== undefined
        ? `${obj}=${params[obj]}`
        : false,
    )
    .filter((prop) => prop !== false)
    .join('&');
};
