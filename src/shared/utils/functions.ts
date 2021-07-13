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

export const getLongDateFormat = (prmDate: string): string => {
  let formattedDate = ``;
  let date = new Date(prmDate);
  let monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

  let day = date.getDate();
  let monthNumber = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();

  formattedDate = `${day} de ${monthNames[monthNumber]} de ${year}, às ${hours}h`;

  return formattedDate;
}