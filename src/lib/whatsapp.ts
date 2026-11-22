import { site } from '../data/site'

/** Monta um link wa.me com mensagem inicial personalizada. */
export function whatsappLink(
  message: string = site.whatsappMessages.default,
  phone: string = site.contact.whatsapp,
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function procedureMessage(procedureName: string): string {
  return `Olá! Vim pelo site da Dra. Fernanda Fabiani e gostaria de informações sobre ${procedureName}.`
}
