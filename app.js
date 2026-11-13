const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
const form = document.querySelector('#request-form');
const result = document.querySelector('#request-result');
const summary = document.querySelector('#request-summary');
const copyStatus = document.querySelector('#copy-status');
const whatsappNumber = '5521965305624';
function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
function openWhatsApp(url) {
  window.location.assign(url);
}
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  summary.value = [
    'Olá, DWS! Gostaria de solicitar um orçamento.',
    `Nome: ${String(data.get('nome')).trim()}`,
    `Contato: ${String(data.get('telefone')).trim()}`,
    `Linha: ${data.get('linha')}`,
    `Solicitação: ${String(data.get('mensagem')).trim()}`
  ].join('\n');
  copyStatus.textContent = '';
  result.hidden = false;
  const url = whatsappUrl(summary.value);
  document.querySelector('#whatsapp-continue').href = url;
  openWhatsApp(url);
});
document.querySelector('.copy-button').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(summary.value);
    copyStatus.textContent = 'Solicitação copiada.';
  } catch {
    summary.focus();
    summary.select();
    copyStatus.textContent = 'Selecione e copie o resumo acima.';
  }
});

// Motion is progressive: without JS, every section remains visible.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll(
  '.section-heading, .product-card, .catalog-note, .about-copy, .about-photo, ' +
  '.specialties-inner > .eyebrow, .specialties-inner > h2, .specialties-inner > p, ' +
  '.segment, .catalogs > div, .request > div, #request-form, .faq-intro, .faq-list, .footer-main > div'
);
let revealObserver;
function reveal(element) {
  element.classList.add('is-visible');
  revealObserver?.unobserve(element);
}
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.product-grid, .segment-grid, .footer-main').forEach(group => {
    Array.from(group.children).forEach((child, index) => {
      child.style.setProperty('--reveal-delay', `${(index % 3) * 40}ms`);
    });
  });
  revealTargets.forEach(element => {
    element.classList.add('motion-reveal');
    // Anchor targets and deep links should never wait to become usable.
    if (element.getBoundingClientRect().top < innerHeight) reveal(element);
    else revealObserver.observe(element);
  });
  document.documentElement.classList.add('motion-ready');
}
document.addEventListener('focusin', event => {
  const section = event.target.closest('.motion-reveal');
  if (section) {
    section.style.transition = 'none';
    reveal(section);
  }
});
reducedMotion.addEventListener('change', event => {
  if (event.matches) {
    revealObserver?.disconnect();
    revealTargets.forEach(reveal);
    document.documentElement.classList.remove('motion-ready');
    document.getAnimations().forEach(animation => animation.cancel());
  }
});
document.querySelectorAll('.faq-list details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open && !reducedMotion.matches) {
      item.querySelector('.faq-answer').animate(
        [{ opacity: 0, transform: 'translateY(-7px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 300, easing: 'cubic-bezier(.2,.65,.3,1)' }
      );
    }
  });
});
