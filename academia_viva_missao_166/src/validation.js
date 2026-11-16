// essa função extrai os campos do formulario

function validateLead({ name, email, phone, interest }) {
  // Cria um vetor para armazenar mensagens de erro
  const errors = [];
  //validaçõa de nome: validar se  e uma string e se tem pelo menos 3 caracteres 
  if (typeof name !== "string" || name.trim().length < 3) {
    errors.push("Informe seu nome (mínimo de 3 caracteres).");
  }

 // validação de e-mail: 

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // validação de e-mail
  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    errors.push("Informe um e-mail válido.");
  }
 // validação de telefone: verefica se o telefone foi preenchido no formulario e se e uma string, caso não seja uma string, adiciona uma mensagem de erro ao vetor de erros
  if (phone && typeof phone !== "string") {
    errors.push("O telefone deve ser um texto.");
  }

  const allowedInterests = ["Online", "Presencial", "Ainda não sei"];
  if (interest && !allowedInterests.includes(interest)) {
    errors.push("Selecione uma modalidade válida.");
  }

  return { valid: errors.length === 0, errors };
}

function normalizeCourseFilter(modality) {
  if (!modality || modality === "Todos") return null;
  const allowed = ["Online", "Presencial"];
  return allowed.includes(modality) ? modality : null;
}

module.exports = { validateLead, normalizeCourseFilter };
