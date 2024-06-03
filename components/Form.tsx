"use client";
import React, { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import styled from '../styles/Form.module.css'

const FORMSPARK_FORM_ID = "3RiMmKKN5";

interface AdditionalField {
    name: string;
    email: string;
}

function Form() {
    const [submit, submitting] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    const [showForm, setShowForm] = useState(true);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rsvp, setRsvp] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [additionalFields, setAdditionalFields] = useState<AdditionalField[]>([]);

    const addMoreFields = () => {
        setAdditionalFields([...additionalFields, { name: "", email: "" }]);
    };

    const removeFields = (index: number) => {
        const updatedFields = [...additionalFields];
        updatedFields.splice(index, 1);
        setAdditionalFields(updatedFields);
    };

    const handleAdditionalFieldChange = (index: number, field: keyof AdditionalField, value: string) => {
        const updatedFields = [...additionalFields];
        updatedFields[index][field] = value;
        setAdditionalFields(updatedFields);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // You can include additional fields validation if needed

        const formData = {
            name,
            email,
            ...additionalFields.reduce((acc, field, index) => {
                acc[`name_${index + 2}`] = field.name;
                acc[`email_${index + 2}`] = field.email;
                return acc;
            }, {}),
            rsvp,
            additionalInfo,
        };

        await submit(formData);
        setShowForm(false);
    };

    return (
        <div>
            {showForm ? (
                <form onSubmit={onSubmit}>
                    <div className={styled.formWrapper}>
                        {/* ... existing form fields ... */}

                        <div className={styled.contactInfo}>
                            <label>Your name
                                <input type="text" id="name" name="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                            </label>


                            <label>Your email
                                <input type="email" id="email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                            </label>
                        </div>


                        {/* Additional fields */}
                        {additionalFields.map((field, index) => (
                            <div className={styled.contactInfo} key={index}>
                                <label>Your name
                                    <input
                                        type="text"
                                        value={field.name}
                                        onChange={(e) => handleAdditionalFieldChange(index, "name", e.target.value)}
                                    />
                                </label>

                                <label>Your email
                                    <input
                                        type="email"
                                        value={field.email}
                                        onChange={(e) => handleAdditionalFieldChange(index, "email", e.target.value)}

                                    />
                                </label>

                                {/* "Remove" button */}
                                <button className={styled.removeButton} type="button" onClick={() => removeFields(index)}>
                                    X
                                </button>
                            </div>
                        ))}

                        {/* "Add more" button */}
                        <button className={styled.addButton} type="button" onClick={addMoreFields}>
                            + Add person
                        </button>

                        <label>Are you coming?
                            <label className={styled.radioButton}>
                                <input type="radio" id="coming" name="rsvp" value="Yes" onChange={(e) => setRsvp(e.target.value)} />Yes, I would love to
                            </label>
                            <label className={styled.radioButton}>
                                <input type="radio" id="notComing" name="rsvp" value="No" onChange={(e) => setRsvp(e.target.value)} />No, sadly not
                            </label>
                        </label>

                        <div className={styled.sectionTwo}>
                          
                            <label>Anything else you would like to add? :)
                                <input type="text" id="additionalInfo" name="Comment" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
                            </label>
                        </div>

                        <button className={styled.submitButton} type="submit" disabled={submitting}>
                            Send
                        </button>
                    </div>

                </form>) 
                : 
                (<div className={styled.submitted}>
                    <p>Thank you for your submission, more information will follow ♥️</p>
                    </div>)
                    }
        </div>
    );
}

export default Form;