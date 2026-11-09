"use client";

import { useState } from "react";

type Option = { slug: string; title: string };

type Fields = {
  name: string;
  email: string;
  phone: string;
  place: string;
  service: string;
  message: string;
  company: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  place: "",
  service: "",
  message: "",
  company: "",
};

export function ContactForm({ services }: { services: Option[] }) {
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function message() {
    return [
      "Hallo Alles Onder Een Dak,",
      "",
      "Ik wil graag een vrijblijvende offerte.",
      `Naam: ${fields.name}`,
      fields.phone ? `Telefoon: ${fields.phone}` : "",
      fields.email ? `E-mail: ${fields.email}` : "",
      fields.place ? `Plaats: ${fields.place}` : "",
      fields.service ? `Dienst: ${fields.service}` : "",
      "",
      fields.message,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function validate() {
    if (fields.company) {
      setNotice("Bedankt, we hebben uw bericht ontvangen.");
      return false;
    }
    if (!fields.name.trim() || !fields.message.trim()) {
      setError("Vul uw naam en een korte omschrijving van het dak in.");
      return false;
    }
    if (!fields.email.trim() && !fields.phone.trim()) {
      setError("Laat een telefoonnummer of e-mailadres achter, zodat we u kunnen bereiken.");
      return false;
    }
    setError("");
    return true;
  }

  function sendWhatsApp() {
    if (!validate()) return;
    const url = `https://wa.me/31622180297?text=${encodeURIComponent(message())}`;
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setNotice(
      opened
        ? "WhatsApp opent met uw bericht. U verstuurt het daar zelf."
        : "WhatsApp kon niet automatisch openen. Gebruik de WhatsApp-knop onderaan de pagina.",
    );
  }

  function sendEmail() {
    if (!validate()) return;
    const href = `mailto:alles.onder.1.dak@outlook.com?subject=${encodeURIComponent(
      "Vrijblijvende offerte dak",
    )}&body=${encodeURIComponent(message())}`;
    window.location.href = href;
    setNotice("Uw e-mailprogramma opent met het bericht. Verstuur het om de aanvraag af te ronden.");
  }

  return (
    <form
      id="offerte"
      className="scroll-mt-28 rounded-3xl bg-white p-5 shadow-[0_20px_60px_-40px_rgba(28,22,18,0.6)] sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        sendWhatsApp();
      }}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Voor- en achternaam" name="name" autoComplete="name" required value={fields.name} onChange={update} />
        <Field label="Telefoon" name="phone" type="tel" autoComplete="tel" value={fields.phone} onChange={update} />
        <Field label="E-mailadres" name="email" type="email" autoComplete="email" value={fields.email} onChange={update} />
        <Field label="Plaats" name="place" autoComplete="address-level2" value={fields.place} onChange={update} />
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-bark">Waar gaat het om?</span>
          <select
            name="service"
            value={fields.service}
            onChange={(event) => update("service", event.target.value)}
            className="mt-1.5 h-12 w-full rounded-xl border border-line bg-cream px-3 text-base text-ink"
          >
            <option value="">Kies een dienst</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Weet ik nog niet">Weet ik nog niet</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-medium text-bark">Bericht</span>
          <textarea
            name="message"
            required
            rows={5}
            value={fields.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="Bijvoorbeeld: lekkage bij de schoorsteen, of het hele pannendak is aan vervanging toe."
            className="mt-1.5 w-full rounded-xl border border-line bg-cream px-3 py-3 text-base text-ink placeholder:text-muted"
          />
        </label>
        <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          Bedrijf
          <input
            tabIndex={-1}
            autoComplete="off"
            value={fields.company}
            onChange={(event) => update("company", event.target.value)}
          />
        </label>
      </div>

      {error ? (
        <p className="mt-4 text-sm font-medium text-clay-deep" role="alert">
          {error}
        </p>
      ) : null}
      {notice ? (
        <p className="mt-4 text-sm text-bark" role="status">
          {notice}
        </p>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-clay-deep px-5 text-base font-semibold text-white hover:bg-ink"
        >
          Stuur via WhatsApp
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-line px-5 text-base font-semibold text-ink hover:border-ink"
        >
          Stuur per e-mail
        </button>
      </div>
      <p className="mt-3 text-sm text-muted">Vrijblijvend. U verstuurt het bericht zelf via WhatsApp of e-mail.</p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: keyof Fields;
  value: string;
  onChange: (key: keyof Fields, value: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-bark">
        {label}
        {required ? <span className="text-clay-deep"> *</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        className="mt-1.5 h-12 w-full rounded-xl border border-line bg-cream px-3 text-base text-ink"
      />
    </label>
  );
}
