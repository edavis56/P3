import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="prodcutscreen__left"></div>
      <div className="left__image">
        <img
          src="https://ca-times.brightspotcdn.com/dims4/default/a924a83/2147483647/strip/true/crop/5709x3806+0+0/resize/840x560!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F63%2Fbe%2Fcf6b47c54e3b9529e8e2d18054cc%2Fsmall-business-taxes-84056.jpg"
          alt="Small Business Tax Preparation"
        />
      </div>

      <div className="left__info">
        <p className="left_name">Small Business Tax Preparation</p>
        <p>$400/Return</p>
        <p>
          Prepare current or prior year federal and state tax returns for
          Sole-Proprietorship, Partnerships, LLC, and S-Corps. Our specialty is
          primarily flow-through entities. Calculating tax credits, deductibles,
          and liabilities. Reviewing if tax reports are in compliance with
          government tax rule and regulations. Answering clients' financial
          questions.
        </p>
      </div>
      <div className="prodcutscreen__right">
        <div className="right__info">
          <p>
            Price:<span>$400/Return </span>
          </p>
          <p>
            Quantity:
            <select>
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
            </select>
          </p>
          <p>
            <button type="button">Checkout </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
