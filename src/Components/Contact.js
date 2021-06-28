import React, { useState, useRef } from "react";

const formFields = ["name", "email", "message"];

export default function Contact() {
  /* const [formData, setFormData] = useState({}); */
  const [message, setMessage] = useState("");
  const choices = useRef([]);
  /*
  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
    console.log(copyFormData);
  }; */

  const onChoiceChange = ({ target: { checked, name } }) => {
    if (checked) choices.current.push(name);
    else if (choices.current.includes(name)) {
      choices.current = choices.current.filter((choice) => choice !== name);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      target: { elements },
    } = e;
    console.log(elements);

    const payload = formFields.reduce((acc, field) => {
      acc[field] = elements[field].value;
      return acc;
    }, {});

    payload["choice"] = choices.current;
    console.log(payload);
    sendData(payload);
  };

  const sendData = async (payload) => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/doctorste/airtable/SqlAObBeMPyuKlYk?tableName=contact",
        {
          method: "post",
          body: JSON.stringify([payload]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      setMessage("This Worked!");
    } catch (error) {
      console.error("Error:", error);
      setMessage("What the hell");
    }
  };

  return (
    <div className="text-white">
      <p className="pt-6">Contact form</p>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        id="contact"
        name="contact"
        required
        onSubmit={onSubmit}
      >
        <input
          id="name"
          name="name" // name should matched with your airtable table field
          type="text"
          placeholder="Name"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          // onChange={handleInput}
        />
        <input
          id="email"
          name="email" // name should matched with your airtable table field
          type="email"
          placeholder="Email"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          // onChange={handleInput}
        />
        <textarea
          id="message"
          name=" message" // name should matched with your airtable table field
          placeholder="Message"
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          // onChange={handleInput}
        />
        {/*         
        <ul className="flex">
          <li>
            <input
              type="checkbox"
              name="1"
              id="choice_1"
              onChange={onChoiceChange}
              className="form-checkbox h-5 w-5 peer"
            />
            <label htmlFor="choice_1">
              <img
                className=" border-2 rounded peer-checked:border-red-50"
                src="https://picsum.photos/seed/1/100"
                alt=""
              />
              <p className="text-black peer-hover:text-red">Choice name</p>
            </label>
          </li>
          <li className="pl-2">
            <input
              type="checkbox"
              name="2"
              id="choice_2"
              className="form-checkbox h-5 w-5"
              onChange={onChoiceChange}
            />
            <label htmlFor="choice_2">
              <img
                className=" border-2 rounded peer-checked:border-red-50"
                src="https://picsum.photos/seed/2/100"
                alt=""
              />
              <p className="text-black peer-checked:text-red">Choice name</p>
            </label>
          </li>
          <li className="pl-2">
            <input
              type="checkbox"
              name="3"
              id="choice_3"
              className="form-checkbox h-5 w-5"
              onChange={onChoiceChange}
            />
            <label htmlFor="choice_3">
              <img
                className=" border-2 rounded peer-checked:border-red-50"
                src="https://picsum.photos/seed/3/100"
                alt=""
              />
              <p className="text-black peer-checked:text-red">Choice name</p>
            </label>
          </li>
          <li className="pl-2">
            <input
              type="checkbox"
              name="4"
              id="choice_4"
              className="form-checkbox h-5 w-5 peer"
              onChange={onChoiceChange}
            />
            <label htmlFor="choice_4 ">
              <img
                className=" border-2 rounded peer-checked:border-red-50"
                src="https://picsum.photos/seed/4/100"
                alt=""
              />
              <p className="text-black peer-checked:text-red">Choice name</p>
            </label>
          </li>
        </ul>
         */}

        <div className="flex space-x-4 ">
          <label>
            <input
              type="checkbox"
              name="1"
              id="choice_1"
              onChange={onChoiceChange}
              class="form-checkbox h-5 w-5 peer transition duration-100 appearance-none "
            />
            <img
              className="z-0 border-2 rounded peer-checked:border-blue-500 transition duration-100 cursor-pointer"
              src="https://picsum.photos/seed/1/100"
              alt=""
            />
            <p className="text-black peer-checked:text-blue-500 transition duration-100">
              Choice 1
            </p>
          </label>

          <label>
            <input
              type="checkbox"
              name="2"
              id="choice_2"
              onChange={onChoiceChange}
              class="form-checkbox h-5 w-5 peer transition duration-100 appearance-none "
            />
            <img
              className=" border-2 rounded peer-checked:border-blue-500 transition duration-100 cursor-pointer"
              src="https://picsum.photos/seed/2/100"
              alt=""
            />
            <p className="text-black peer-checked:text-blue-500 transition duration-100">
              Choice 2
            </p>
          </label>

          <label>
            <input
              type="checkbox"
              name="3"
              id="choice_3"
              onChange={onChoiceChange}
              class="form-checkbox h-5 w-5 peer transition duration-100 appearance-none "
            />
            <img
              className=" border-2 rounded peer-checked:border-blue-500 transition duration-100 cursor-pointer"
              src="https://picsum.photos/seed/3/100"
              alt=""
            />
            <p className="text-black peer-checked:text-blue-500 transition duration-100">
              Choice 3
            </p>
          </label>

          <label>
            <input
              type="checkbox"
              name="4"
              id="choice_4"
              onChange={onChoiceChange}
              class="form-checkbox h-5 w-5 peer transition duration-100 appearance-none "
            />
            <img
              className=" border-2 rounded peer-checked:border-blue-500 transition duration-100 cursor-pointer"
              src="https://picsum.photos/seed/4/100"
              alt=""
            />
            <p className="text-black peer-checked:text-blue-500 transition duration-100">
              Choice 4
            </p>
          </label>
        </div>
        <br />
        <div className="flex justify-between">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            name="submit"
            type="submit"
            value="Send"
          />
          <p className="text-black pt-2"> {message}</p>
        </div>
      </form>
    </div>
  );
}
