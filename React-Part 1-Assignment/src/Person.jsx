import React from "react";

export default function Person({name, age}) {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}
