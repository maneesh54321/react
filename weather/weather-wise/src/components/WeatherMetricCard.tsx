const WeatherMetricCard = ({
  icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: number | string;
}) => {
  return (
    <div className="weather-metric-card">
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
      <p className="value">{value}</p>
    </div>
  );
};

export default WeatherMetricCard;
