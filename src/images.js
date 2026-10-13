// Every picture dropped into src/content/home or src/content/portfolio shows up automatically.
// The file name becomes the caption: "blue-moon-vase.jpg" → "Blue moon vase".
// Files are shown in name order, so start names with 01-, 02-… to choose the order.
const home = import.meta.glob('./content/home/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const portfolio = import.meta.glob('./content/portfolio/*.{jpg,jpeg,png,webp,avif}', { eager: true });

const toList = (files) =>
  Object.entries(files)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, mod]) => {
      const name = path.split('/').pop().replace(/\.[^.]+$/, '').replace(/^\d+[-_ ]*/, '');
      const caption = name.replace(/[-_]+/g, ' ').trim();
      return { src: mod.default, caption: caption.charAt(0).toUpperCase() + caption.slice(1) };
    });

export const homeImages = toList(home);
export const portfolioImages = toList(portfolio);
