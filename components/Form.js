import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function FormHost() {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgValue, setImageValue] = useState({ value: " " });
  const [locationValue, setLocationValue] = useState({ value: " " });
  const [titleValue, setTitleValue] = useState({ value: " " });
  const [descriptionValue, setDescriptionValue] = useState({ value: " " });
  const [priceValue, setPriceValue] = useState({ value: " " });
  const [longValue, setLongValue] = useState({ value: " " });
  const [latValue, setLatValue] = useState({ value: " " });

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
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="img">Choose an image</Label>
              <Input type="img" name="img" id="img" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="title">Name of your place</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price by night</Label>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="long">Longitude</Label>
              <Input
                type="number"
                name="long"
                id="long"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lat">Latitude</Label>
              <Input
                type="number"
                name="lat"
                id="lat"
                placeholder=""
                onChange={handleChange}
              />
            </FormGroup>
            <Input
              type="submit"
              value="submit"
              name="submit"
              id="submit"
              placeholder=""
            />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FormHost;
