"use client";

const defaultLanguage = window.navigator.language || "fr-FR";

export default function Price({
  value,
  currency = "EUR",
  language = defaultLanguage,
}) {
  return new Intl.NumberFormat(language, {
    style: "currency",
    currency,
  }).format(value);
}
