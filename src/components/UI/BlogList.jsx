import React from "react";
import "../../styles/BlogList.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return blogData.map((item) => <BlogItems item={item} key={item.id} />);
};

const BlogItems = ({ item }) => {
    const { title, author, date, imgUrl, description, time } = item;
    return (
  <Col lg='4' md='4' sm='6' className="mb-5">
    <div className="blog__item">
      <img src={imgUrl} alt="" className="w-100" />
      <div className="blog__info p-3">
        <Link to={`/blogs/${title}`} className="blog__title">{title}</Link>
        <p className="section__description mt-3">
          {description.length > 100 ? description.substr(0, 100) : description}
        </p>
        <Link to={`/blogs/${title}`} className="read__more">Read More</Link>

        <div
          className="blog__time pt-3 mt-3 d-flex align-items-center
        justify-content-between"
        >
          <span className="blog__author">
            <i class="ri-user-line"></i>
            {author}
          </span>
          <div className="d-flex align-items-center gap-3">
            <span className="d-flex align-items-center gap-1 section__description">
              <i class="ri-calender-line"></i>
              {date}
            </span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className="d-flex align-items-center gap-1 section__description">
              <i class="ri-calender-line"></i>
              {time}
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  </Col>)
};
export default BlogList;
