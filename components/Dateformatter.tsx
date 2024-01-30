import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="text-xs text-slate-500">
      {format(date, "dd/MM/yyyy")}
    </time>
  );
};

export default DateFormatter;
