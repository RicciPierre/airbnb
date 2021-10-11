import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Form() {
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
    fetch("http://localhost:1337/send", {
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
          <form action="post">
            <h3>Choose an image</h3>
            <input id="img" type="img" />
            <h3>Location</h3>
            <input id="location" type="text" />
            <h3>Name of your Place</h3>
            <input id="title" type="text" />
            <h3>Description</h3>
            <input id="description" type="text" />
            <h3>Price by night</h3>
            <input id="price" type="number" />
            <h3>Longitude</h3>
            <input id="long" type="number" />
            <h3>Latitude</h3>
            <input id="lat" type="number" />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button id="submit" className="lul" type="submit">
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Form;
