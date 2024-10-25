import { ChangeEvent, useEffect, useState } from "react";
import { FormDataInterface } from "../../types/weatherType";

import cls from "./WeatherForm.module.scss";
import { InputText } from "primereact/inputtext";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import {
  useGetMembersOptionsQuery,
  useGetWeatherOptionsQuery,
} from "../../features/slice/optionsApi";
import { Calendar } from "primereact/calendar";

interface WeatherFormProps {
  getFormData: (data: FormDataInterface) => void;
}

export const WeatherForm = (props: WeatherFormProps) => {
  const { getFormData } = props;
  const { data: weatherOptionsData } = useGetWeatherOptionsQuery();
  const { data: membersOptionsData } = useGetMembersOptionsQuery();

  const [formData, setFormData] = useState<FormDataInterface>({
    comment: "",
    date: undefined,
    temp: 0,
    member: { id: 0, name: "" },
    weather: { id: 0, name: "" },
  });

  useEffect(() => {
    getFormData(formData);
  }, [formData]);

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, comment: e.target.value };
    });
  };

  const onChangeTemp = (e: InputNumberValueChangeEvent) => {
    setFormData((prev) => {
      return { ...prev, temp: e.value || 0 };
    });
  };

  return (
    <>
      <div className={cls.formDemo}>
        <div style={{display: 'grid'}}>
          <label className={cls.label} htmlFor="comment">Комментарий</label>{" "}
          <InputText
            id="comment"
            onChange={onChangeComment}
            value={formData.comment}
          />
          <label className={cls.label} htmlFor="temp">Температура</label>{" "}
          <InputNumber
            min={-50}
            max={60}
            id="temp"
            onValueChange={onChangeTemp}
            value={formData.temp}
            suffix="℃"
            maxFractionDigits={2}
          />
          <label className={cls.label} htmlFor="date">Дата</label>{" "}
          <Calendar
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, date: e.value };
              });
            }}
            value={formData.date}
            hourFormat="24"
            showTime={true}
            showSeconds={false}
            placeholder="Выберите дату и время"
          />
          <label className={cls.label} htmlFor="weather">Погода</label>
          <Dropdown
            id="weather"
            value={formData.weather}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, weather: e.value };
              })
            }
            options={weatherOptionsData}
            optionLabel="name"
            placeholder="Выбери погоду"
            className="w-full md:w-14rem"
          />
          <label className={cls.label} htmlFor="member">Заполнил (-а)</label>{" "}
          <Dropdown
            id="member"
            value={formData.member}
            onChange={(e) =>
              setFormData((prev) => {
                return { ...prev, member: e.value };
              })
            }
            options={membersOptionsData}
            optionLabel="name"
            placeholder="Кто заполнил"
            className="w-full md:w-14rem"
          />
        </div>
        <div> </div>
      </div>
    </>
  );
};
