"use client";

import React from 'react'
import { useState } from "react";
 const Phone = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const regex = /^\+?\d{8}$/;

  const handleChange = (event) => {
    let v = event.target.value;

    if (!/^\+?\d*$/.test(v)) return;

    const digits = v.startsWith("+") ? v.slice(1) : v;
    if (digits.length > 8) return;

    setValue(v);

    if (regex.test(v)) {
      setError("");
    } else {
      setError("Утасны дугаар буруу байна");
    }
  };
 return (
      <div className='font-2 text-txt text-medku'>Phone <span className="text-red">*</span>
              </div>
  )
}
export { Phone }