import media1 from "./image-1.jpg";
import media2 from "./image-2.jpg";
import media3 from "./image-3.jpg";
import media4 from "./image-4.jpg";
import media5 from "./image-5.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];