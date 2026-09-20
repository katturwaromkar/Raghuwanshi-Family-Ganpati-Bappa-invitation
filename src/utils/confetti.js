/**
 * Petal & Flower Confetti Burst Utility
 * Emits beautiful marigold & rose flower petals with gentle physical flutter
 */

export function triggerFlowerShower() {
  const count = 45;
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '99999';
  container.style.overflow = 'hidden';
  document.body.appendChild(container);

  const colors = [
    '#F59E0B', // Marigold Yellow
    '#EA580C', // Saffron Orange
    '#DC2626', // Vermilion Red
    '#F43F5E', // Rose Pink
    '#FDE047', // Light Gold
    '#D97706'  // Deep Ochre
  ];

  const emojis = ['🌸', '🌺', '🌼', '✨', '🏵️'];

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    const isEmoji = Math.random() > 0.4;
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * 18 + 14;
    const duration = Math.random() * 3 + 2.5;
    const delay = Math.random() * 0.8;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const drift = (Math.random() - 0.5) * 300;
    const rotation = Math.random() * 720 - 360;

    if (isEmoji) {
      petal.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      petal.style.fontSize = `${size}px`;
    } else {
      petal.style.width = `${size}px`;
      petal.style.height = `${size * 1.4}px`;
      petal.style.backgroundColor = color;
      petal.style.borderRadius = '50% 0 50% 50%';
      petal.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
      petal.style.opacity = '0.9';
    }

    petal.style.position = 'absolute';
    petal.style.left = `${startX}px`;
    petal.style.top = '-40px';
    petal.style.transition = `transform ${duration}s cubic-bezier(0.25, 1, 0.5, 1), opacity ${duration}s ease-out`;
    petal.style.transform = `translate3d(0, 0, 0) rotate(0deg)`;

    container.appendChild(petal);

    setTimeout(() => {
      petal.style.transform = `translate3d(${drift}px, ${window.innerHeight + 60}px, 0) rotate(${rotation}deg)`;
      petal.style.opacity = '0';
    }, delay * 1000 + 20);
  }

  setTimeout(() => {
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }, 6500);
}
