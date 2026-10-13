// Every picture dropped into src/my-site/home or src/my-site/portfolio shows up automatically.
// The file name becomes the caption: "blue-moon-vase.jpg" → "Blue moon vase".
// Files are shown in name order, so start names with 01-, 02-… to choose the order.
// Folders inside portfolio become collections, named after the folder (numbers at the start set the order too).
// The cover picture is the first one, unless a file name ends in "cover" (e.g. "12-cover.jpg").
const home = import.meta.glob('./my-site/home/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', { eager: true });
const portfolio = import.meta.glob('./my-site/portfolio/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', { eager: true });

// "02-blue_moon-vase" → "Blue moon vase", "01-2025" → "2025". Plain numbers like "07.jpg" get no caption.
const tidy = (name) => {
  const base = name.replace(/\.[^.]+$/, '').replace(/[-_ ]*cover$/i, '');
  if (/^\d*$/.test(base) && name.includes('.')) return '';
  const words = base.replace(/^\d+[-_ .]+(?=\S)/, '').replace(/[-_]+/g, ' ').trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
};

const toList = (files) =>
  Object.entries(files)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, mod]) => ({ path, src: mod.default, caption: tidy(path.split('/').pop()) }));

export const homeImages = toList(home);

const all = toList(portfolio);

// Pictures sitting loose in the portfolio folder (not in a collection folder).
export const looseImages = all.filter((img) => img.path.split('/').length === 4);

// One entry per folder inside portfolio, in folder-name order.
export const collections = [...new Set(all.map((img) => img.path.split('/')[3]).filter((f) => !/\.[a-z]+$/i.test(f)))]
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((folder) => {
    const title = tidy(folder);
    const images = all.filter((img) => img.path.split('/')[3] === folder);
    return {
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      images,
      cover: images.find((img) => /cover\.[^.]+$/i.test(img.path)) ?? images[0],
    };
  });
