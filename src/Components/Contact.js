import React, { useState, useRef } from "react";

const formFields = ["name", "email", "message"];

export default function Contact() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const choices = useRef([]);

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
    console.log(copyFormData);
  };

  const onChoiceChange = ({ target: { checked, name } }) => {
    if (checked) choices.current.push(name);
    else if(choices.current.includes(name)) {
        choices.current =choices.current.filter(choice => choice !== name)
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

    payload['choice'] = choices.current
    console.log(payload)
    sendData(payload)
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
      setMessage("What the fuck");
    }
  };

  return (
    <div className="text-white">
      <p>Contact form</p>
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
        <ul>
          <li>
            <input
              type="checkbox"
              name="1"
              id="choice_1"
              onChange={onChoiceChange}
            />
            <label htmlFor="choice_1">
              <img src="https://picsum.photos/seed/1/100" alt=''/>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="2"
              id="choice_2"
              onChange={onChoiceChange}
            />
            <label htmlFor="choice_2">
              <img src="https://picsum.photos/seed/2/100" alt=''/>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="3"
              id="choice_3"
              onChange={onChoiceChange}
            />
            <label htmlFor="choice_3">
              <img src="https://picsum.photos/seed/3/100" alt=''/>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="4"
              id="choice_4"
              onChange={onChoiceChange}
            />
            <label htmlFor="choice_4">
              <img src="https://picsum.photos/seed/4/100" alt=''/>
            </label>
          </li>
        </ul>
        <br />
        <input name="submit" type="submit" value="Send" />
        <br /> {message}
      </form>
    </div>
  );
}
