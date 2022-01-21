import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { useLang } from "../context/lang-context";
const LanguageSelector = ({ location }) => {
  const [lang, setLang] = useLang();

  useEffect(() => {
    if (location.pathname.includes("/en/")) {
      setLang("en");
    } else {
      setLang("ar");
    }
  }, [location, setLang]);

  const setArabic = () => {
    navigate(location.pathname.replace("/" + lang + "/", "/"));
  };

  const setEnglish = () => {
    navigate(`/en${location.pathname}`);
  };

  const languges = [
    {
      name: "English",
      change: setEnglish,
      id: 1,
    },

    {
      name: "عربي",
      change: setArabic,
      id: 2,
    },
  ];

  return (
    <div>
      <SelectLang
        change={lang === "ar" ? languges[0].change : languges[1].change}
        name={lang === "ar" ? languges[0].name : languges[1].name}
      />
    </div>
  );
};

export default LanguageSelector;

const SelectLang = ({ change, name }) => {
  return (
    <p onClick={change} style={{ cursor: "pointer", color: "white" }}>
      {name}
    </p>
  );
};
