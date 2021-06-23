import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = e => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
        console.log(copyFormData);
    };

    const sendData = async e => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/doctorste/airtable/SqlAObBeMPyuKlYk?tableName=contact",
                {
                    method: "post",
                    body: JSON.stringify([formData]),
                    headers: {
                        "Content-Type": "application/json"
                    }
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
        <div className="App">
            <p>Contact form</p>
            <form
                className="input-form"
                id="contact"
                name="contact"
                required
                onSubmit={sendData}
            >
                <input
                    name="name"  // name should matched with your airtable table field
                    type="text"
                    placeholder="Name"
                    required
                    onChange={handleInput}
                />
                <input
                    name="email"  // name should matched with your airtable table field
                    type="email"
                    placeholder="Email"
                    required
                    onChange={handleInput}
                />
                <textarea
                    name="message"  // name should matched with your airtable table field
                    placeholder="Message"
                    onChange={handleInput}
                />

                <label htmlFor="number">Choose a number</label>
                <select id="number" name="choice" onChange={handleInput}>
                    <option value="1" >Pick 1</option>
                    <option value="2" >Pick 2</option>
                    <option value="3" >Pick 3</option>
                </select>
	
	<br/>
                <input name="submit" type="submit" value="Send" />
                <br/> {message}
            </form>
        </div>
    );
}