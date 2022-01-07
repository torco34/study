import React from "react";

const Input = ({ search, setSearch }) => {
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Buscar"
        onChange={onSearchChange}
        value={search}
      />
    </>
  );
};
export { Input };
