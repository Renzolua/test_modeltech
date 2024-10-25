import "./App.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  useGetWeatherQuery,
  useRemoveWeatherElementMutation,
} from "./features/slice/weatherApi";
import { Button } from "primereact/button";
import { weatherDataElement } from "./types/weatherType";
import { AddWeatherElementModal } from "./entities/AddWeatherElementModal/AddWeatherElementModal";

function App() {
  const { data: weatherData, isLoading} = useGetWeatherQuery();
  const [removeElement] =
    useRemoveWeatherElementMutation();

  // useGetWeatherQuery();
  
  return (
    <>
      <AddWeatherElementModal/>
      <DataTable
        loading={isLoading}
        value={weatherData}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="date" header="Дата и время"></Column>
        <Column field="temp" header="Температура"></Column>
        <Column field="weather.name" header="Погода"></Column>
        <Column field="member.name" header="Кто заполнил"></Column>
        <Column field="comment" header="Комментарий"></Column>
        <Column
          field="extra"
          header=""
          body={(data: weatherDataElement) => (
            <Button
              onClick={() => {
                removeElement(data.id);
              }}
            >
              Удалить
            </Button>
          )}
        ></Column>
      </DataTable>
    </>
  );
}

export default App;
