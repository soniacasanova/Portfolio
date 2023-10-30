export const scrollToTargetDiv = () => {
    const targetDiv = document.getElementById('anchor');
  
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };
  