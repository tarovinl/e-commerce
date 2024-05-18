import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`category/${category}`}
      className="text-decoration-none text-dark   "
    >
      <Card className="custom-card bg-transparent items-center">
        <Card.Body>
          <Card.Text className="text-capitalize text-lg">
            <p class="text-lg m-6 group relative w-max  font-bold">
              <span>{category}</span>
              <span class="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-custom-black group-hover:w-full"></span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CategoryCard;
