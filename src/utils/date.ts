export const formatDateDDMMYYYY = (date?: Date | null): string => {
  if (!date) return '';

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

// 20 oct 2003
// export const formatDateDayMonthShortYear = date => {
//   if (!date) return '';

//   return date?.toLocaleDateString('en-GB', {
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric',
//   });
// };

export const formatDateDayMonthShortYear = date => {
  if (!date) return '';

  const parsedDate = new Date(date.replace(' ', 'T'));

  if (isNaN(parsedDate.getTime())) return '';

  return parsedDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

//////////////

// oct 28 , 2026,  7:10 AM
export const formatDateWithTime = (dateString: string) => {
  if (!dateString) return '';

  const date = new Date(dateString.replace(' ', 'T'));

  return date.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

// todigit formmated date 20
export const getAgeTwoDigit = (dob: string) => {
  const [day, month, year] = dob.split('-');
  const birthDate = new Date(+year, +month - 1, +day);

  return new Date().getFullYear() - birthDate.getFullYear();
};
