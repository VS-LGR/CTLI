type ContactFormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

type ContactValidationResult =
  | { valid: true; errors: Record<string, string> }
  | { valid: false; errors: Record<string, string> };

export function validateContactForm(
  state: ContactFormState
): ContactValidationResult {
  const errors: Record<string, string> = {};

  if (!state.name.trim()) {
    errors.name = "Informe seu nome.";
  }

  if (!state.email.trim()) {
    errors.email = "Informe um e-mail.";
  } else if (!state.email.includes("@")) {
    errors.email = "Informe um e-mail válido.";
  }

  if (state.message.trim().length < 10) {
    errors.message = "Descreva brevemente sua necessidade.";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return { valid: true, errors: {} };
}

