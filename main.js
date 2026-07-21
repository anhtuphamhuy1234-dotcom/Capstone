const section = document.querySelector('.reputation-section');

if (section) {
  const tabItems = section.querySelectorAll('.rep-tab-item');
  const tabPanels = section.querySelectorAll('.rep-tab-panel');

  tabItems.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-rep-tab');

      tabItems.forEach((item) => item.classList.remove('active'));
      tabPanels.forEach((panel) => panel.classList.remove('active'));

      tab.classList.add('active');

      const activePanel = section.querySelector(`.rep-tab-panel[data-rep-panel="${targetTab}"]`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}