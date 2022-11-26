function BirthDateIsValid(date) {
  const today = new Date();
  const birth = new Date(date);

  let year = today.getFullYear() - birth.getFullYear();

  const month = today.getMonth() - birth.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
    year = -1;
  }
  if (year >= 18) {
    return true;
  }
  return false;
}

module.exports = new BirthDateIsValid();
