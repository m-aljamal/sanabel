import React, { useState } from "react"
import styled from "styled-components"

const SerchProjects = ({ setProjects, setToAll, allProjects }) => {
  const [index, setIndex] = useState(0)
  const words = {
    ar: {
      types: [
        {
          display: "الكل",
          value: "all",
        },
        {
          display: "المشاريع الإغاثية",
          value: "relief",
        },
        {
          display: "المشاريع التعليمية",
          value: "education",
        },
        {
          display: "المشاريع الطبية",
          value: "medical",
        },
        {
          display: "المشاريع الخدمية",
          value: "service",
        },
      ],
    },
  }
  const showProjects = (type, i) => {
    setIndex(i)
    if (type === "all") {
      setToAll()
    } else setProjects(allProjects.filter(proj => proj.projectType === type))
  }
  return (
    <SearchStyle className="container">
      {words["ar"].types.map((type, i) => (
        <p
          key={i}
          className={index === i ? "active" : undefined}
          onClick={() => showProjects(type.value, i)}
        >
          {type.display}
        </p>
      ))}
    </SearchStyle>
  )
}

export default SerchProjects

const SearchStyle = styled.div`
  .active {
    background: var(--gradiant);
    padding: 1rem;
    border-radius: 10px;
    color: white;
    &:hover {
      color: white;
    }
  }

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  align-items: center;
  p {
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: var(--green);
    }
  }
`
