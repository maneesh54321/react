import React from "react";

export interface Props<P> {
  data: P;
  idx: number;
}

type ListProps<T> = {
  forecastData: T[];
  forecastCard: React.ComponentType<{ data: T; idx: number }>;
};

const ForecastTable = <T,>({ forecastData, forecastCard }: ListProps<T>) => {
  const ForeCastCard = forecastCard;
  return (
    <div className="forecast-table">
      {forecastData.map((data, idx) => (
        <ForeCastCard data={data} key={idx} idx={idx} />
      ))}
    </div>
  );
};

export default ForecastTable;
