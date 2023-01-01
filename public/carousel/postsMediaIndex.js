import postSlide1 from "./posts/postSlide1.jpg";
import postSlide2 from "./posts/postSlide2.jpg";
import postSlide3 from "./posts/postSlide3.jpg";
import postSlide4 from "./posts/postSlide4.jpg";
import postSlide5 from "./posts/postSlide5.jpg";

export const postSlides = [postSlide1, postSlide2, postSlide3, postSlide4, postSlide5];
export const postSlideByIndex = index => postSlides[index % postSlides.length];