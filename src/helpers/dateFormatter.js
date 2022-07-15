const dateFormatter = (ms) => {
  const date = new Date(ms);

  return date.toDateString();
};
