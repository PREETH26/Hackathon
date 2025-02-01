// src/components/ui/card.jsx
import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className || ""}`}>{children}</div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`font-bold text-lg border-b pb-2 ${className || ""}`}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h2 className={`text-xl font-semibold ${className || ""}`}>{children}</h2>
);

export const CardContent = ({ children, className }) => (
  <div className={`text-gray-700 ${className || ""}`}>{children}</div>
);
