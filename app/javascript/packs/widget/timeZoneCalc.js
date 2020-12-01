export function calcTime(offset) {
  let d = new Date();

  let utc_zone = d.getTime() + (d.getTimezoneOffset() * 60000);
  let utc = new Date(utc_zone);

  utc.setSeconds( utc.getSeconds() + offset );

  return utc.toLocaleString();
}