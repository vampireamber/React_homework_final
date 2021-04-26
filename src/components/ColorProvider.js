import React, { createContext, useState, useContext, useEffect, useMemo } from "react";
import data from "./data";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [lastColor, setLastColor] = useState();
  const [lastEditModel, setLastEditModel] = useState("");
  const [colors, setColors] = useState(data)
  const [startAlertFlg, setStartAlertFlg] = useState(false)
  const [addFlg, setAddFlg] = useState(Boolean());

  useEffect(() => {
    console.log("--ColorProvider--")
  })

  useEffect(() => {
    if (startAlertFlg) {
      console.log(addFlg);
      alert("增加了一个color")
    }
  }, [addFlg]);

  const totalSize = useMemo (()=>{
    console.log("totalSize")
    return colors.length
  },[colors.length])

  const addColor = (title, color) => {

    const newColor = {
      id: Math.random(),
      color: color,
      title: title,
      rating: Math.round(Math.random() * 5),
    }
    const newColors = [
      newColor,
      ...colors,
    ];
    setColors(newColors);
    setStartAlertFlg(true);
    setLastEditModel("增加")
    setLastColor(newColor);
    setAddFlg(!addFlg)
    console.log("colorProvider-addColor")
    console.log(newColor)

  };

  const rateColor = (id, rating) => {

    const newColors = colors.map((c) =>
      c.id !== id
        ? c
        : {
          ...c,
          rating,
        }
    );
    setLastEditModel("更新")
    setLastColor(colors.filter((c) => c.id === id)[0]);
    setColors(newColors);

    console.log("colorProvider-rateColor")
    console.log(colors.filter((c) => c.id === id)[0])
  };

  const removeColor = (id) => {
    const newColors = colors.filter((c) => c.id !== id);
    setLastColor(colors.filter((c) => c.id === id)[0]);
    setColors(newColors);
    setLastEditModel("删除")

    console.log("colorProvider-removeColor")
    console.log(colors.filter((c) => c.id === id)[0])
  };

  return (

    <ColorContext.Provider value={{totalSize, lastColor, lastEditModel, colors, addFlg, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
