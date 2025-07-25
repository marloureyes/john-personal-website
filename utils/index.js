export const formatDate = (date, isYearOnly) => {
  const newDate = new Date(date);
  let options;
  if (isYearOnly) {
    options = {
      year: "numeric",
    };
  } else {
    options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
  }

  console.log(options);
  const formattedDate = newDate.toLocaleDateString("en-GB", options);
  return formattedDate;
};
