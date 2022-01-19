import React from "react"
import styled from "styled-components"
import emailLogo from "../../assets/icons/contact/email.svg"
import address from "../../assets/icons/contact/address.svg"
import phoneIcon from "../../assets/icons/contact/phone.svg"
import useForm from "../useForm"
const Form = ({ lang = "ar" }) => {
  const words = {
    ar: {
      emailText: "الإيميل",
      name: "الإسم",
      phone: "الهاتف",
      country: "البلد",
      text: "نص الرسالة",
      buttonText: "ارسال",
    },
    en: {
      emailText: "Email",
      name: "Name",
      phone: "Phone",
      country: "Country",
    },
    tr: {
      emailText: "email",
      name: "isim",
      phone: "Telefon",
      country: "Ülke",
    },
  }

  const { emailText, name, phone, country, text, buttonText } = words[lang]
  const { values, updateValue } = useForm({
    personName: "",
    email: "",
    phoneNumber: "",
    formCountry: "",
    messageBody: "",
  })
  const { personName, email, phoneNumber, formCountry, messageBody } = values
  return (
    <FormStyle>
      <div className="messageInput">
        <h3>راسلنا</h3>
        <FormMessageStyle className={` ${lang !== "ar" && "langFormStyle"}`}>
          <div className="inputsContainer">
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={updateValue}
                placeholder={emailText}
              />
            </div>
            <div>
              <input
                type="text"
                name="personName"
                value={personName}
                placeholder={name}
                onChange={updateValue}
              />
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                placeholder={phone}
                onChange={updateValue}
              />
            </div>
            <div>
              <input
                type="text"
                name="formCountry"
                value={formCountry}
                placeholder={country}
                onChange={updateValue}
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder={text}
              value={messageBody}
              name="messageBody"
              onChange={updateValue}
            />
          </div>
          <div className="button">
            <button>{buttonText}</button>
          </div>
        </FormMessageStyle>
      </div>
      <div className="infoSection ">
        <h3>:البريد الإلكتروني</h3>
        <div className="info">
          <div>
            <a href="mailto:info@sanabelamal.org">info@sanabelamal.org</a>
            <a href="mailto:sanabellamal@hotmail.com">
              sanabellamal@hotmail.com
            </a>
          </div>
          <img src={emailLogo} alt="email" className="icon" />
        </div>
        <h3 className="mt-5 ">:الهاتف</h3>
        <div className="info">
          <div>
            <a href="tel:  +352 681 557 130 "> +352 681 557 130</a>
            <a href="tel: +90 552 578 67 54">+90 552 578 67 54</a>
          </div>
          <img src={phoneIcon} alt="email" className="icon" />
        </div>
        <h3 className="mt-5">:العنوان</h3>
        <div className="info">
          <div className="w" style={{}}>سوريا ريف حلب الشمالي أعزاز</div>
          <img src={address} alt="email" className="icon" />
        </div>
      </div>
    </FormStyle>
  )
}

export default Form

const FormStyle = styled.section`
  margin-top: -8rem;
  margin-bottom: -2rem;
  position: relative;
  display: flex;
  justify-content: center;
  .messageInput {
    width: 60%;
    background: linear-gradient(
      24deg,
      rgba(146, 207, 88, 1) 0%,
      rgba(255, 255, 255, 1) 41%
    );
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: var(--shadow);
    padding: 2.5rem;
    h3 {
      color: var(--dark);
      font-weight: bold;
    }
  }
  .infoSection {
    box-shadow: var(--shadow);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 2.5rem;
    background: linear-gradient(
      24deg,
      rgba(146, 207, 88, 1) 0%,
      rgba(42, 60, 53, 1) 57%
    );
    width: 30%;
  }
  .icon {
    width: 50px;
  }
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
`

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
`
