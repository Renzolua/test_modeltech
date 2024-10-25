import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { WeatherForm } from "../WeatherForm/WeatherForm";
import { FormDataInterface } from "../../types/weatherType";
import { useAddWeatherElementMutation } from "../../features/slice/weatherApi";

export const AddWeatherElementModal = () => {
  const [addElement,] = useAddWeatherElementMutation();

  const [isShow, setIsShow] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataInterface>();

  const getFormData = (data: FormDataInterface) => {
    setFormData(data);
  };

  return (
    <>
      <Button
        label="Добавить"
        icon="pi pi-add"
        iconPos="right"
        onClick={() => setIsShow(true)}
      />
      <Dialog
        header="Добавить запись"
        closeOnEscape 
        closable
        visible={isShow}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!isShow) return;
          setIsShow(false);
        }}
        footer={
          <Button
            label="Добавить"
            icon="pi pi-save"
            iconPos="right"
            formNoValidate={false}
            onClick={() => {
              addElement(formData);
              setIsShow(false);
            }}
            disabled={!formData}
          />
        }
      >
        <WeatherForm getFormData={getFormData} />
      </Dialog>
    </>
  );
};
