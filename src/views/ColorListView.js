import React from "react";
import ColorList from "../components/ColorList";
import AddColorForm from "../components/AddColorForm";
import ColorProvider from "../components/ColorProvider"

export default function ColorListView() {

  return (

      <ColorProvider >
        <AddColorForm />
        <ColorList />
      </ColorProvider>

  );
}
