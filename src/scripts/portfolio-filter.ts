// src/scripts/portfolio-filter.ts
import Isotope from 'isotope-layout';

window.addEventListener('load', () => {
  const grid = document.querySelector<HTMLElement>('#project-grid');
  const filters = document.querySelector<HTMLElement>('#filters');

  if (grid) {
    const iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows' // O 'masonry' si prefieres ese efecto
    });

    if (filters) {
      filters.addEventListener('click', (event) => {
        const target = event.target as HTMLButtonElement;
        
        if (!target.matches('.filter-btn')) {
          return;
        }

        const filterValue = target.getAttribute('data-filter');
        if (filterValue) {
          iso.arrange({ filter: filterValue });
        }

        const currentChecked = filters.querySelector('.is-checked');
        if (currentChecked) {
          currentChecked.classList.remove('is-checked');
        }
        target.classList.add('is-checked');
      });
    }
  }
});