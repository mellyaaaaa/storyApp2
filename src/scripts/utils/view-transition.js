export const applyViewTransition = () => {
  if (!document.startViewTransition) {
    return;
  }
  
  document.startViewTransition(() => {
    const main = document.getElementById('mainContent');
    
    if (main) {
      main.classList.add('page-transition');
      
      setTimeout(() => {
        main.classList.remove('page-transition');
      }, 300);
    }
  });
};