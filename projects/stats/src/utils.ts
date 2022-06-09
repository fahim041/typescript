export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split("/")
    .map((e: string): number => parseInt(e));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
