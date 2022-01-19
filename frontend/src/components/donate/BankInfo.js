import React from "react"
import styled from "styled-components"
const BankInfo = ({ type, icon, iban }) => {
  const words = {
    ar: {
      accountOwner: ":صاحب الحساب",
      bankName: ":اسم البنك",
      branch: " :الشعبة",
      ibanName: " :رقم الأيبان ",
    },
  }
  const { accountOwner, bankName, branch, ibanName } = words["ar"]
  return (
    <BankInfoStyle className="w">
      <img src={icon} alt="currIcon" className="img " />
      <h2>{type}</h2>
      <p>{accountOwner}</p>
      <p className="bold">Umut Başaklar Derneği</p>
      <p className="mt-5">{bankName}</p>
      <p className="bold">Ziraat Bankası</p>
      <p className="mt-5">{branch}</p>
      <p className="bold">Gaziantep Şubesi</p>
      <p className="mt-5">{ibanName}</p>
      <p className="bold">{iban}</p>
    </BankInfoStyle>
  )
}

export default BankInfo
const BankInfoStyle = styled.section`
  background: var(--dark);
  text-align: center;
  border-radius: 50px;
  padding: 0 2rem;
  margin-bottom: 5rem;
  position: relative;
  padding-bottom: 5rem;
  margin-top: -2rem;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -15px;
    border-radius: 50px;
    border: 3px solid var(--green);
    top: -15px;
    z-index: 1;
  }
  .img {
    width: 8rem;
    background: white;
    border-radius: 20px;
    border: 2px solid var(--green);
    margin-top: 3rem;
  }
  h2 {
    color: var(--green);
    padding: 4rem 0;
    font-weight: bold;
  }
  p {
    font-size: 2.5rem;
  }
`
