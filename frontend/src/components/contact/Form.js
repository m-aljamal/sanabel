import React from "react";
import styled from "styled-components";
import emailLogo from "../../assets/icons/contact/email.svg";
import address from "../../assets/icons/contact/address.svg";
import phoneIcon from "../../assets/icons/contact/phone.svg";
import useForm from "../useForm";
import { useLang } from "../../context/lang-context";
import { footerText, text } from "../../data/text";
const Form = () => {
  const [lang] = useLang();

  const { values, updateValue } = useForm({
    personName: "",
    email: "",
    phoneNumber: "",
    formCountry: "",
    messageBody: "",
  });
  const { personName, email, phoneNumber, formCountry, messageBody } = values;
  const { emailText, name, phone, message, send, country } = text[lang].contact;

  return (
    <div
      className="-mt-10  relative md:flex justify-center shadow-xl  mb-10 w-[90%] mx-auto rounded-xl "
      style={{
        background: `linear-gradient(
      24deg,
      rgba(146, 207, 88, 1) 0%,
      rgba(255, 255, 255, 1) 41%
    )`,
      }}
    >
      <ContactInfo />
      <div className="p-2  md:w-3/5">
        <h3 className="text-AppDark font-bold text-xl mb-3">
          {text[lang].contact.title}
        </h3>
        <div>
          <div className="grid grid-cols-2 gap-4   ">
            <Input
              type="email"
              name="email"
              value={email}
              placeholder={emailText}
              onChange={updateValue}
            />
            <Input
              type="text"
              name="personName"
              value={personName}
              placeholder={name}
              onChange={updateValue}
            />

            <Input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              placeholder={phone}
              onChange={updateValue}
            />
            <Input
              type="text"
              name="formCountry"
              value={formCountry}
              placeholder={country}
              onChange={updateValue}
            />
          </div>
          <div>
            <textarea
              placeholder={message}
              value={messageBody}
              name="messageBody"
              onChange={updateValue}
              className="w-full p-2 ring-1 ring-AppGreen mt-4 rounded-md"
            />
          </div>

          <button className="bg-AppDark p-2 text-white rounded-md ">
            {send}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

const Input = ({ name, value, placeholder, onChange, type }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="  w-full p-2 ring-1 ring-AppGreen rounded-md outline-none "
      />
    </div>
  );
};

const ContactInfo = () => {
  const [lang] = useLang();
  const { emailText, phone, addressText } = text[lang].contact;
  return (
    <div
      className={`shadow-lg ${
        lang === "ar"
          ? "rounded-tr-xl md:rounded-br-xl  rounded-tl-xl md:rounded-tl-none   "
          : "rounded-tl-xl rounded-bl-xl"
      }  p-2   text-white  md:w-2/5  `}
      style={{
        background: `linear-gradient(
      24deg,
      rgba(146, 207, 88, 1) 0%,
      rgba(42, 60, 53, 1) 57%
    )`,
      }}
    >
      <SingleInfo title={emailText} logo={emailLogo}>
        <>
          <a href={`mailto:${footerText.email}`}>{footerText.email}</a>
          <a href={`mailto:${footerText.email2}`}>{footerText.email2}</a>
        </>
      </SingleInfo>
      <SingleInfo title={phone} logo={phoneIcon}>
        <>
          <a href={`tel:${footerText.phone} `} style={{ direction: "ltr" }}>
            {footerText.phone}
          </a>
          <a href={`tel:${footerText.phone2}`} style={{ direction: "ltr" }}>
            {footerText.phone2}
          </a>
        </>
      </SingleInfo>

      <SingleInfo title={addressText} logo={address}>
        <p>{footerText[lang].address}</p>
      </SingleInfo>
    </div>
  );
};

const SingleInfo = ({ title, logo, children }) => {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="flex gap-2 my-3">
        <img src={logo} alt="email" className="w-10" />
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
};

const FormStyle = styled.section`
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  a {
    display: block;
    &:hover {
      color: var(--green);
    }
  }
  h3 {
    color: white;
    font-size: 2.5rem;
    text-align: end;
    margin-bottom: 1.7rem;
  }
  @media (max-width: 991px) {
    .infoSection {
      width: 45%;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    h3 {
      font-size: 2rem;
    }
    .infoSection,
    .messageInput {
      width: 95%;
      border-radius: 25px;
    }
  }
`;

const FormMessageStyle = styled.form`
  .langFormStyle {
    input,
    textarea,
    .button {
      text-align: start;
    }
  }
  .inputsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  input {
    width: 100% !important;
  }
  input,
  textarea,
  button {
    text-align: end;
    border: 1px solid var(--green);
    font-size: 2rem;
    padding: 15px 30px;
    border-radius: 10px;

    &:focus {
      outline: none !important;
      box-shadow: var(--shadow);
    }
  }
  textarea {
    width: 100%;
    margin-top: 20px;
    height: 160px;
  }
  button {
    text-align: end;
    background: var(--gradiant);
    padding: 10px 15px;
    border-radius: 15px;
    color: white;
  }
  .button {
    text-align: end;
  }
  @media (max-width: 365px) {
    input,
    textarea,
    button {
      font-size: 1.5rem;
      padding: 10px 10px;
    }
  }
`;
