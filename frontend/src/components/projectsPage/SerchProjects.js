import React, { useState } from "react";
import styled from "styled-components";
import { projectsTypes } from "../../data/text";
import { useLang } from "../../context/lang-context";
const SerchProjects = ({ setProjects, setToAll, allProjects }) => {
  const [index, setIndex] = useState(0);

  const showProjects = (type, i) => {
    setIndex(i);
    if (type === "all") {
      setToAll();
    } else setProjects(allProjects.filter((proj) => proj.projectType === type));
  };

  const [lang] = useLang();
  return (
    <div className=" grid lg:grid-cols-5  space-y-2 lg:space-y-0 text-center mt-8  container  ">
      {projectsTypes.map((type, i) => (
        <p
          key={i}
          className={`
            ${
              index === i
                ? "bg-gradient-to-r from-AppGreen to-AppBack rounded-lg    "
                : undefined
            } cursor-pointer py-2 text-lg`}
          onClick={() => showProjects(type.value, i)}
        >
          {type[lang]}
        </p>
      ))}
    </div>
  );
};

export default SerchProjects;

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
`;
