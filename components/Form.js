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

  document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    let imgValue = document.getElementById("img").value;
    let locationValue = document.getElementById("location").value;
    let titleValue = document.getElementById("title").Value;
    let descripitonValue = document.getElementById("description").value;
    let priceValue = document.getElementById("price").value;
    let longValue = document.getElementById("long").value;
    let latValue = document.getElementById("lat").value;

    const data = {
      img: imgValue,
      location: locationValue,
      title: titleValue,
      description: descripitonValue,
      price: priceValue,
      long: longValue,
      lat: latValue,
    };
    console.log(JSON.stringify(data));
    fetch("https://airbnb-tawny.vercel.app/api/send", {
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
  });
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
          <Form>
            <FormGroup>
              <Label for="img">Choose an image</Label>
              <Input type="img" name="img" id="img" />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input type="text" name="location" id="location" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="title">Name of your place</Label>
              <Input type="text" name="title" id="title" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price by night</Label>
              <Input type="number" name="price" id="price" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="long">Longitude</Label>
              <Input type="number" name="long" id="long" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="lat">Latitude</Label>
              <Input type="number" name="lat" id="lat" placeholder="" />
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
