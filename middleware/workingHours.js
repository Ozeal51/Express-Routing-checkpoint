module.exports = function workingHours(req, res, next) {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWeekday && isWorkingHour) {
    return next();
  }

  return res.status(403).render('closed', {
    title: 'Unavailable',
    message: 'Our web application is available Monday to Friday, from 09:00 to 17:00.'
  });
};
