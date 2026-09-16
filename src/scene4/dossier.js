/**
 * Technical Project Dossier logic for Jeyasurya G.
 * Provides interactive category filtering, technical specs HUD modal,
 * and card highlighting when clicked from the 3D gallery.
 */

import { PROJECTS_DATA } from '../data/portfolio_data.js';

export { PROJECTS_DATA };

export function initDossier() {
  const grid = document.getElementById('dossierGrid');
  const filterBtns = document.querySelectorAll('[data-filter]');
  const modal = document.getElementById('hudModal');
  const modalClose = document.getElementById('hudModalClose');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalBullets = document.getElementById('modalBullets');
  const modalArch = document.getElementById('modalArch');
  const modalStack = document.getElementById('modalStack');
  const modalGithub = document.getElementById('modalGithub');

  if (!grid) return;

  function render(filter = 'all') {
    grid.innerHTML = '';
    const filtered = filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('article');
      card.className = 'p-card';
      card.id = `project-${p.id}`;
      card.innerHTML = `
        <div class="p-card__head">
          <div class="p-card__top">
            <span class="p-card__badge">${p.badge}</span>
            <span class="p-card__status">${p.status}</span>
          </div>
          <h3 class="p-card__title">${p.title}</h3>
          <p class="p-card__desc">${p.desc}</p>
          <ul class="p-card__bullets">
            ${p.bullets.slice(0, 3).map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="p-card__stack">
            ${p.stack.map(s => `<span class="p-tag">${s}</span>`).join('')}
          </div>
          <div class="p-card__actions">
            <button type="button" class="p-btn p-btn--primary" data-inspect="${p.id}">
              <span>Technical Specs</span> ▸
            </button>
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="p-btn p-btn--ghost">
              GitHub ↗
            </a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    // bind inspect buttons
    grid.querySelectorAll('[data-inspect]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-inspect');
        openModal(pid);
      });
    });
  }

  function openModal(pid) {
    const p = PROJECTS_DATA.find(item => item.id === pid);
    if (!p || !modal) return;
    modalTag.textContent = `${p.badge} // ${p.status}`;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modalArch.textContent = p.architecture;
    modalBullets.innerHTML = p.bullets.map(b => `<li>${b}</li>`).join('');
    modalStack.innerHTML = p.stack.map(s => `<span class="p-tag">${s}</span>`).join('');
    modalGithub.href = p.github;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      render(btn.getAttribute('data-filter'));
    });
  });

  render('all');

  // Exposed globally so 3D gallery cards can jump directly to any project
  window.highlightProject = (projectId) => {
    const target = document.getElementById(`project-${projectId}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('is-highlighted');
      setTimeout(() => target.classList.remove('is-highlighted'), 3200);
    } else {
      // if current filter hid it, reset to all
      render('all');
      filterBtns.forEach(b => b.classList.toggle('is-active', b.getAttribute('data-filter') === 'all'));
      setTimeout(() => {
        const card = document.getElementById(`project-${projectId}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('is-highlighted');
          setTimeout(() => card.classList.remove('is-highlighted'), 3200);
        }
      }, 100);
    }
  };
}
