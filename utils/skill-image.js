// utils/skill-image.js

export const skillsImage = (skill) => {
  const id = skill
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\//g, "-")
    .replace(/\+/g, "plus")
    .replace(/&/g, "");

  // All images are stored in public/image/
  return {
    png: `/image/${id}.png`,
    svg: `/image/${id}.svg`,
  };
};
