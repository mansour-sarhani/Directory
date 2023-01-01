import postSlide1 from "./blog/postSlide1.jpg";
import postSlide2 from "./blog/postSlide2.jpg";
import postSlide3 from "./blog/postSlide3.jpg";
import postSlide4 from "./blog/postSlide4.jpg";
import postSlide5 from "./blog/postSlide5.jpg";

export const blogSlides = [postSlide1, postSlide2, postSlide3, postSlide4, postSlide5];
export const blogSlidesByIndex = index => blogSlides[index % blogSlides.length];