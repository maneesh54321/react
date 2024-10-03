export interface ForecastDataRow {
  time: Date;
  weatherCode: number;
  temperature_2m: { value: number; unit: string };
  wind: { speed: number; unit: string };
  humidity: number;
}

const ForecastTable = ({
  forecastData,
  forecastCard,
}: {
  forecastData: ForecastDataRow[];
  forecastCard: any;
}) => {
  const ForeCastCard = forecastCard;
  return (
    <div className="forecast-table">
      {forecastData.map((data, idx) => (
        <ForeCastCard data={data} key={idx} />
      ))}
    </div>
  );
};

export default ForecastTable;
