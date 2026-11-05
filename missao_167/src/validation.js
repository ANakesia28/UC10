
// Função que extrai os campos nome, email, telefone e modalidade do formulário
function validateLead({ name, email, phone, interest } = {}) {

  // Cria um vetor para armazenar mensagens de erro
  const errors = [];

  // Validação do nome
  if (typeof name !== "string") {
    errors.push("Informe seu nome (mínimo de 2 caracteres).");
  } else if (name.trim().length === 0) {
    errors.push("Informe seu nome (mínimo de 3 caracteres).");
  } else if (name.trim().length < 2) {
    errors.push("Informe seu nome (mínimo de 2 caracteres).");
  }

  // Validação do e-mail
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    errors.push("Informe um e-mail válido.");
  }

  // Validação do telefone
  if (phone && typeof phone !== "string") {
    errors.push("Preencha o telefone corretamente.");
  }

  // Validação da modalidade
  const allowedInterests = ["Online", "Presencial", "Ainda não sei"];

  if (interest && !allowedInterests.includes(interest)) {
    errors.push("Selecione uma modalidade válida.");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

function normalizeCourseFilter(modality) {
  if (!modality || modality === "Todos") return null;

  const allowed = ["Online", "Presencial"];

  return allowed.includes(modality) ? modality : null;
}

module.exports = { validateLead, normalizeCourseFilter };
