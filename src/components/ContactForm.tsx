"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";
import { Button } from "@/ui/Button";
import { validateContactForm } from "@/lib/forms";
import type { SupportedLang } from "@/lib/i18n";

type ContactFormProps = {
  lang: SupportedLang;
};

export function ContactForm({ lang }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    field: keyof typeof formState,
    value: string
  ) {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateContactForm(formState);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setIsSubmitting(true);
    // In a real project this would call an API route or external service.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  }

  const labels =
    lang === "pt"
      ? {
          name: "Nome completo",
          email: "E-mail",
          company: "Empresa",
          phone: "Telefone / WhatsApp",
          message: "Contexto da demanda",
          submit: "Enviar mensagem",
          success: "Mensagem enviada com sucesso. Em breve entraremos em contato."
        }
      : {
          name: "Full name",
          email: "Email",
          company: "Company",
          phone: "Phone / WhatsApp",
          message: "Context of your request",
          submit: "Send message",
          success: "Message sent successfully. We will contact you shortly."
        };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-2xl border border-border/60 bg-black/60 p-6 shadow-lg shadow-black/40"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-200">
            {labels.name}
          </label>
          <Input
            value={formState.name}
            onChange={(event) => handleChange("name", event.target.value)}
            required
          />
          {errors.name ? (
            <p className="text-xs text-red-400">{errors.name}</p>
          ) : null}
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-200">
            {labels.email}
          </label>
          <Input
            type="email"
            value={formState.email}
            onChange={(event) => handleChange("email", event.target.value)}
            required
          />
          {errors.email ? (
            <p className="text-xs text-red-400">{errors.email}</p>
          ) : null}
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-200">
            {labels.company}
          </label>
          <Input
            value={formState.company}
            onChange={(event) => handleChange("company", event.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-200">
            {labels.phone}
          </label>
          <Input
            value={formState.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-200">
          {labels.message}
        </label>
        <Textarea
          value={formState.message}
          onChange={(event) => handleChange("message", event.target.value)}
        />
      </div>
      <div className="flex items-center justify-between gap-4 pt-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : labels.submit}
        </Button>
        {submitted ? (
          <p className="text-xs text-emerald-400">{labels.success}</p>
        ) : null}
      </div>
    </form>
  );
}

