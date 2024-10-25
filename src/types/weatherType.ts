import { Nullable } from "primereact/ts-helpers";

export interface weatherDataElement {
  id: number;
  date: Nullable<Date>;
  temp: number;
  member: { id: number; name: string };
  weather: { id: number; name: string };
  comment: string;
}

export interface FormDataInterface extends Omit<weatherDataElement, "id"> {}
