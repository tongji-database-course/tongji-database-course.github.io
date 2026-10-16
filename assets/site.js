const search = document.querySelector('#course-search');
if (search) {
  const rows = [...document.querySelectorAll('tbody tr')];
  search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    rows.forEach(row => {
      row.hidden = !row.dataset.search.toLocaleLowerCase().includes(query);
      if (!row.hidden) visible++;
    });
    document.querySelector('#result-count').textContent = `${visible} 份课件`;
    document.querySelector('#empty-state').hidden = visible !== 0;
  });
}
