import React from "react";

function Input({ name, state, setState, label = false }) {
  return <div className="flex flex-col gap-2">
    {
      label && (
        <label htmlFor={name} className="text-teal-light font-medium text-lg px-2">{name}</label>
      )
    }

    <div>
      <input
        className="bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-4 py-2 w-full"
        type="text"
        name={name}
        value={state}
        onChange={(e) => setState(e.target.value)} />
    </div>

  </div>;
}

export default Input;
