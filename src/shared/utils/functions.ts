export const sortListByName = (current: { name?: string }, next: { name?: string }) => {
  current.name = current.name || '';
  next.name = next.name || '';

  if (current.name > next.name) {
    return 1;
  }
  if (current.name < next.name) {
    return -1;
  }

  return 0;
};