"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "@/lib/dictionary";

export default function PostError({ error, reset }) {
  const { locale } = useParams();
  const [dist, setDist] = useState(null);

  useEffect(() => {
    getDictionary(locale).then(setDist);
  }, [locale]);

  if (!dist) return null;

  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h2>{dist.error.title}</h2>
      <p>{error.message}</p>
      <button onClick={reset}>{dist.error.retry}</button>
    </div>
  );
}
