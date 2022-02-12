// get date format like "2022-02-22"
const todayIso = new Date().toISOString().slice(0, 10);
// get date format like "22/02/2022"
const todayLocale = new Date().toLocaleDateString('nl-BE');

module.exports = { todayIso, todayLocale };