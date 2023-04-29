import moment from "moment/moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  // console.log(news);
  return (
    <Card>
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1 ">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("yyyy-MM-D")}</small>
          </p>
        </div>
        <div className="d-flex">
          <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />

        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read More..</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>

      <Card.Footer className="d-flex align-items-center">
        <Rating
          placeholderRating={rating?.number ?? 0}
          readonly
          emptySymbol={<FaRegStar />}
          placeholderSymbol={<FaStar className="text-warning" />}
          fullSymbol={<FaStar />}
        />
        <span className="flex-grow-1 ps-2">{rating?.number ?? 0}</span>
        <div>
          <FaEye /> <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
