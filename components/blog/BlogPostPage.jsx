import styles from './blog.module.css'
import {Col, Container, Form, Row} from "react-bootstrap";
import PostHeader from "../../common/PostHeader";
import Image from "next/image";
import Link from "next/link";
import {
    TbClock,
    TbUserCircle,
    TbBrandFacebook,
    TbBrandTwitter,
    TbBrandYoutube,
    TbBrandWhatsapp,
    TbChevronRight
} from "react-icons/tb";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import {blogData as relatedPosts} from "../../data/blogData";
import BlogItem from "./BlogItem";

function BlogPostPage() {
    return (
        <div className={styles.blogPostWrapper}>
            <Container>
                <PostHeader />
                <div className={styles.blogPostBanner}>
                    <Image
                        src='/images/image-2.jpg'
                        alt='post image'
                        fill
                    />
                </div>
                <div className={styles.blogPostIntro}>
                    <div className={styles.blogPosTitle}>
                        <h1>This will be the title of the some sample post</h1>
                    </div>
                    <div className={styles.blogPostMeta}>
                        <div className={styles.blogPostCategory}>
                            <span>
                                <TbClock className="me-1" />
                                22/11/2022
                            </span>
                            <span>
                                <TbUserCircle className="me-1" />
                                Mansour Sarhani
                            </span>
                        </div>
                        <div className={styles.blogPostLabel}>
                            <span className="bg-success">
                                <AiOutlineLike className="me-1" />
                                257
                            </span>
                            <span className="bg-danger">
                                <AiOutlineDislike className="me-1" />
                                46
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.blogPostEntry}>
                    <p>
                        Fusce porttitor, eros sed condimentum rhoncus, sapien nisl pharetra erat, vitae molestie diam turpis quis est. Donec sit amet luctus sem, a molestie mauris. Ut mi sapien, sagittis in congue id, cursus nec dui. Suspendisse eleifend a elit et euismod. Praesent vel rhoncus augue. Morbi egestas gravida sem, eget suscipit felis auctor quis. Praesent non congue nibh. In interdum eros ac ipsum placerat finibus. Sed ac aliquet neque. Cras sit amet leo vestibulum, pretium turpis eget, elementum tortor.

                        Fusce ultricies, est sit amet mollis commodo, turpis leo bibendum ipsum, sed imperdiet ante magna quis magna. Mauris eu iaculis ante. Pellentesque ac orci non mi rhoncus pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam lobortis ex vitae urna blandit, ut fermentum nunc hendrerit. Nullam porta malesuada tortor id feugiat. Duis rutrum efficitur libero at cursus.

                        Sed lobortis vitae mauris quis egestas. Duis pharetra tellus vitae metus porta fringilla. Aliquam in dui nunc. Pellentesque eget metus at neque tincidunt porta. Nullam commodo, sapien quis feugiat tincidunt, sem mi vehicula ex, sed rhoncus ligula nisi placerat mauris. Vestibulum ut consectetur nibh. Proin nisi velit, hendrerit vitae suscipit et, dignissim et elit.
                    </p>
                    <p>
                        Fusce porttitor, eros sed condimentum rhoncus, sapien nisl pharetra erat, vitae molestie diam turpis quis est. Donec sit amet luctus sem, a molestie mauris. Ut mi sapien, sagittis in congue id, cursus nec dui. Suspendisse eleifend a elit et euismod. Praesent vel rhoncus augue. Morbi egestas gravida sem, eget suscipit felis auctor quis. Praesent non congue nibh. In interdum eros ac ipsum placerat finibus. Sed ac aliquet neque. Cras sit amet leo vestibulum, pretium turpis eget, elementum tortor.

                        Fusce ultricies, est sit amet mollis commodo, turpis leo bibendum ipsum, sed imperdiet ante magna quis magna. Mauris eu iaculis ante. Pellentesque ac orci non mi rhoncus pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam lobortis ex vitae urna blandit, ut fermentum nunc hendrerit. Nullam porta malesuada tortor id feugiat. Duis rutrum efficitur libero at cursus.

                        Sed lobortis vitae mauris quis egestas. Duis pharetra tellus vitae metus porta fringilla. Aliquam in dui nunc. Pellentesque eget metus at neque tincidunt porta. Nullam commodo, sapien quis feugiat tincidunt, sem mi vehicula ex, sed rhoncus ligula nisi placerat mauris. Vestibulum ut consectetur nibh. Proin nisi velit, hendrerit vitae suscipit et, dignissim et elit.
                    </p>
                    <p>
                        Fusce porttitor, eros sed condimentum rhoncus, sapien nisl pharetra erat, vitae molestie diam turpis quis est. Donec sit amet luctus sem, a molestie mauris. Ut mi sapien, sagittis in congue id, cursus nec dui. Suspendisse eleifend a elit et euismod. Praesent vel rhoncus augue. Morbi egestas gravida sem, eget suscipit felis auctor quis. Praesent non congue nibh. In interdum eros ac ipsum placerat finibus. Sed ac aliquet neque. Cras sit amet leo vestibulum, pretium turpis eget, elementum tortor.

                        Fusce ultricies, est sit amet mollis commodo, turpis leo bibendum ipsum, sed imperdiet ante magna quis magna. Mauris eu iaculis ante. Pellentesque ac orci non mi rhoncus pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam lobortis ex vitae urna blandit, ut fermentum nunc hendrerit. Nullam porta malesuada tortor id feugiat. Duis rutrum efficitur libero at cursus.

                        Sed lobortis vitae mauris quis egestas. Duis pharetra tellus vitae metus porta fringilla. Aliquam in dui nunc. Pellentesque eget metus at neque tincidunt porta. Nullam commodo, sapien quis feugiat tincidunt, sem mi vehicula ex, sed rhoncus ligula nisi placerat mauris. Vestibulum ut consectetur nibh. Proin nisi velit, hendrerit vitae suscipit et, dignissim et elit.
                    </p>

                    <p>
                        Fusce porttitor, eros sed condimentum rhoncus, sapien nisl pharetra erat, vitae molestie diam turpis quis est. Donec sit amet luctus sem, a molestie mauris. Ut mi sapien, sagittis in congue id, cursus nec dui. Suspendisse eleifend a elit et euismod. Praesent vel rhoncus augue. Morbi egestas gravida sem, eget suscipit felis auctor quis. Praesent non congue nibh. In interdum eros ac ipsum placerat finibus. Sed ac aliquet neque. Cras sit amet leo vestibulum, pretium turpis eget, elementum tortor.

                        Fusce ultricies, est sit amet mollis commodo, turpis leo bibendum ipsum, sed imperdiet ante magna quis magna. Mauris eu iaculis ante. Pellentesque ac orci non mi rhoncus pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam lobortis ex vitae urna blandit, ut fermentum nunc hendrerit. Nullam porta malesuada tortor id feugiat. Duis rutrum efficitur libero at cursus.

                        Sed lobortis vitae mauris quis egestas. Duis pharetra tellus vitae metus porta fringilla. Aliquam in dui nunc. Pellentesque eget metus at neque tincidunt porta. Nullam commodo, sapien quis feugiat tincidunt, sem mi vehicula ex, sed rhoncus ligula nisi placerat mauris. Vestibulum ut consectetur nibh. Proin nisi velit, hendrerit vitae suscipit et, dignissim et elit.
                    </p>
                </div>
                <hr/>
                <div className={styles.blogPostFooter}>
                    <div className={styles.blogPostTags}>
                        <Link href='/'>Tag 1</Link>
                        <Link href='/'>Tag 2</Link>
                    </div>
                    <div className={styles.blogPostShare}>
                        <span>Share: </span>
                        <div className={styles.blogPostShareBtns}>
                            <button className={styles.facebookBtn}>
                                <TbBrandFacebook />
                            </button>
                            <button className={styles.twitterBtn}>
                                <TbBrandTwitter />
                            </button>
                            <button className={styles.youtubeBtn}>
                                <TbBrandYoutube />
                            </button>
                            <button className={styles.whatsappBtn}>
                                <TbBrandWhatsapp />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.blogPostComments}>
                    <Row>
                        <Col xs={12} md={8}>
                            <div className={styles.blogPostCommentsSection}>
                                <div className="sectionHeading">
                                    <h5>Comments</h5>
                                </div>
                                <div className={styles.blogPostCommentsWrapper}>
                                    <div className={styles.blogPostCommentItem}>
                                        <div className={styles.blogPostCommentItemImg}>
                                            <TbUserCircle />
                                        </div>
                                        <div className={styles.blogPostCommentItemContent}>
                                            <div className={styles.blogPostCommentItemHeader}>
                                                <span className={styles.blogPostCommentItemAuthor}>Ehsan Khaledi</span>
                                                <span className={styles.blogPostCommentItemDate}>2022/12/27 | 22:45</span>
                                            </div>
                                            <div className={styles.blogPostCommentItemText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam beatae corporis cumque cupiditate dolorem id, iure, laboriosam laborum mollitia nesciunt non numquam perferendis possimus quia quo, rem velit veritatis!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.blogPostCommentItem}>
                                        <div className={styles.blogPostCommentItemImg}>
                                            <TbUserCircle />
                                        </div>
                                        <div className={styles.blogPostCommentItemContent}>
                                            <div className={styles.blogPostCommentItemHeader}>
                                                <span className={styles.blogPostCommentItemAuthor}>Ehsan Khaledi</span>
                                                <span className={styles.blogPostCommentItemDate}>2022/12/27 | 22:45</span>
                                            </div>
                                            <div className={styles.blogPostCommentItemText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam beatae corporis cumque cupiditate dolorem id, iure, laboriosam laborum mollitia nesciunt non numquam perferendis possimus quia quo, rem velit veritatis!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.blogPostCommentItem}>
                                        <div className={styles.blogPostCommentItemImg}>
                                            <TbUserCircle />
                                        </div>
                                        <div className={styles.blogPostCommentItemContent}>
                                            <div className={styles.blogPostCommentItemHeader}>
                                                <span className={styles.blogPostCommentItemAuthor}>Ehsan Khaledi</span>
                                                <span className={styles.blogPostCommentItemDate}>2022/12/27 | 22:45</span>
                                            </div>
                                            <div className={styles.blogPostCommentItemText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam beatae corporis cumque cupiditate dolorem id, iure, laboriosam laborum mollitia nesciunt non numquam perferendis possimus quia quo, rem velit veritatis!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.blogPostCommentItem}>
                                        <div className={styles.blogPostCommentItemImg}>
                                            <TbUserCircle />
                                        </div>
                                        <div className={styles.blogPostCommentItemContent}>
                                            <div className={styles.blogPostCommentItemHeader}>
                                                <span className={styles.blogPostCommentItemAuthor}>Ehsan Khaledi</span>
                                                <span className={styles.blogPostCommentItemDate}>2022/12/27 | 22:45</span>
                                            </div>
                                            <div className={styles.blogPostCommentItemText}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam beatae corporis cumque cupiditate dolorem id, iure, laboriosam laborum mollitia nesciunt non numquam perferendis possimus quia quo, rem velit veritatis!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className={styles.blogPostCommentReply}>
                                <div className="sectionHeading">
                                    <h5>Your Comment</h5>
                                </div>
                                <div className={styles.blogPostCommentForm}>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Control as="textarea" rows={5} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <button  className={styles.blogPostCommentLike}>
                                                <AiOutlineLike />
                                                Like
                                            </button>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <button className={styles.blogPostCommentDisLike}>
                                                <AiOutlineDislike />
                                                Dislike
                                            </button>
                                        </Form.Group>
                                        <button  className={styles.blogPostCommentSubmit} type="submit">
                                            Submit
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={styles.blogPostRelated}>
                    <div className="sectionHeading">
                        <h5>Similar Posts</h5>
                        <Link href={'/'}>
                            View all
                            <TbChevronRight />
                        </Link>
                    </div>
                    <div className={styles.blogGrid}>
                        {relatedPosts && relatedPosts.slice(0, 4).map(post => (
                            <BlogItem post={post} key={post.id} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default BlogPostPage;