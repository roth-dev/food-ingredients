import moment from 'moment';

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getDateTime = (
  yFormat?: string | null,
  mFormat?: string | null,
  dFormat?: string | null
) => {
  const CurrentDate = new Date();
  const year = moment(CurrentDate).format(yFormat ? yFormat : 'YYYY');
  const month = moment(CurrentDate).format(mFormat ? mFormat : 'M');
  const today = moment(CurrentDate).format(dFormat ? dFormat : 'D');
  const first_day_of_month = moment(
    startOfMonth(CurrentDate)
  ).format(dFormat ? dFormat : "DD-MM-YYYY");
  const last_day_of_month = moment(
    new Date(Number(year), CurrentDate.getMonth() - 1, 0)
  ).format(dFormat ? dFormat : "DD-MM-YYYY");

  return {
    year,
    month,
    today,
    last_day_of_month,
    first_day_of_month
  }
}

export function timeConvert(n: number) {
  const num = n;
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  if (n < 60) {
    return `${rminutes} min`;
  };

  return `${rhours}h ${rminutes}min`;
}

