import { http, HttpResponse } from "msw";

const data = [
  {
    id: 1,
    comment: "123",
    date: "2024-10-30T16:03:20.519Z",
    temp: 0,
    member: {
      id: 2,
      name: "Маша",
    },
    weather: {
      id: 2,
      name: "Облачно",
    },
  },
  { id: 2,
    comment: "123",
    date: "2024-10-23T18:06:20.519Z",
    temp: 0,
    member: {
      id: 1,
      name: "Никита",
    },
    weather: {
      id: 1,
      name: "Солнечно",
    },
  },
];

const optionsWeather = [
  {
    id: 1,
    name: "Солнечно",
  },
  {
    id: 2,
    name: "Облачно",
  },
  {
    id: 3,
    name: "Дождь",
  },
  {
    id: 4,
    name: "Снег",
  },
  {
    id: 5,
    name: "Туман",
  },
  {
    id: 6,
    name: "Гроза",
  },
];

const membersOptions = [
  { id: 1, name: "Никита" },
  { id: 2, name: "Маша" },
  { id: 3, name: "Артур" },
];

export const handlers = [
  http.get("http://localhost:5173/api/weather", () => {
    return HttpResponse.json(data, { status: 200 });
  }),
  http.get("http://localhost:5173/api/options/weather", () => {
    return HttpResponse.json(optionsWeather, { status: 200 });
  }),
  http.get("http://localhost:5173/api/options/members", () => {
    return HttpResponse.json(membersOptions, { status: 200 });
  }),
  http.post("http://localhost:5173/api/weather/add", () => {
    return HttpResponse.json({}, { status: 200 });
  }),
  http.delete(`http://localhost:5173/api/weather/delete/:id`, ({ params }) => {
    const { id } = params;

    const deletedItem = data.find((item) => item.id === Number(id));

    if (!deletedItem) {
      return new HttpResponse(null, { status: 404 });
    }

    const filteredData = data.filter((dataItem) => dataItem.id !== Number(id));

    console.log(filteredData);
    return HttpResponse.json(filteredData);
  }),
];
