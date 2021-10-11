import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/outline";

function FormHost() {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgValue, setImageValue] = useState({ value: " " });
  const [locationValue, setLocationValue] = useState({ value: " " });
  const [titleValue, setTitleValue] = useState({ value: " " });
  const [descriptionValue, setDescriptionValue] = useState({ value: " " });
  const [priceValue, setPriceValue] = useState({ value: " " });
  const [longValue, setLongValue] = useState({ value: " " });
  const [latValue, setLatValue] = useState({ value: " " });

  const customStyle = {
    content: {
      top: "95px",
      overflow: "hidden",
    },
  };

  function handleChange(e) {
    setImageValue({ value: e.target.value });
    setLocationValue({ value: e.target.value });
    setTitleValue({ value: e.target.value });
    setDescriptionValue({ value: e.target.value });
    setPriceValue({ value: e.target.value });
    setLongValue({ value: e.target.value });
    setLatValue({ value: e.target.value });
  }

  function handleSubmit(e) {
    const data = {
      img: imgValue,
      location: locationValue,
      title: titleValue,
      description: descriptionValue,
      price: priceValue,
      long: longValue,
      lat: latValue,
    };
    console.log(JSON.stringify(data));
    fetch("https://airbnb-tawny.vercel.app/api", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Server data", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  }

  return (
    <div>
      <Button
        className="hidden text-base font-semibold px-4 py-2 cursor-pointer hover:rounded-full hover:bg-gray-500 hover:bg-opacity-40 md:inline"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Become a host
      </Button>
      <Modal
        toggle={() => setModalOpen(!modalOpen)}
        isOpen={modalOpen}
        style={customStyle}
      >
        <div className=" modal-header flex justify-between mb-20 items-center">
          <h5
            className=" modal-title text-3xl font-semibold"
            id="exampleModalLabel"
          >
            Register your place
          </h5>
          <XIcon
            aria-label="Close"
            className=" close h-8 cursor-pointer"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          />
        </div>
        <Form
          onSubmit={handleSubmit}
          className="space-y-5 text-xl w-xl max-w-xl text-center ml-auto mr-auto"
        >
          <FormGroup>
            <Label className="label" for="img">
              Choose an image
            </Label>
            <Input
              type="image"
              name="img"
              id="img"
              onChange={handleChange}
              className="input"
            />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="location">
              Location
            </Label>
            <Input
              type="text"
              name="location"
              id="location"
              placeholder=""
              onChange={handleChange}
              className="input"
            />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="title">
              Name of your place
            </Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder=""
              onChange={handleChange}
              className="input"
            />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="description">
              Description
            </Label>
            <Input
              type="text"
              name="description"
              id="description"
              placeholder=""
              onChange={handleChange}
              className="input"
            />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="price">
              Price by night
            </Label>
            <Input
              type="number"
              name="price"
              id="price"
              placeholder=""
              onChange={handleChange}
              className="input"
            />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="long">
              Longitude
            </Label>
            <Input
              type="number"
              name="long"
              id="long"
              placeholder=""
              onChange={handleChange}
              className="input"
            />
          </FormGroup>
          <FormGroup>
            <Label className="label" for="lat">
              Latitude
            </Label>
            <Input
              type="number"
              name="lat"
              id="lat"
              placeholder=""
              onChange={handleChange}
              className="input"
            />
          </FormGroup>
          <Input
            type="submit"
            value="submit"
            name="submit"
            id="submit"
            placeholder=""
            className="cursor-pointer button"
          />
        </Form>
        <div className="float-right mt-14 pr-5">
          <Button
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
            className="button"
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default FormHost;
