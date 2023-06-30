import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getFinanceDetails } from '../redux/finance/FinanceSlice';

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getFinanceDetails(id));
    };
    fetchData();
  }, [dispatch, id]);
  const { financeDetail } = useSelector((store) => store.finance);
  return (
    <Div>
      <div className="back-link"><Link to="/"><ArrowBackIosIcon /></Link></div>

      {financeDetail.map((finance) => (
        <div className="detail-container" key={finance.symbol}>
          <div>
            <span className="title">Company Name: </span>
            <span>{finance.companyName}</span>
          </div>
          <div>
            <span className="title">Currency: </span>
            <span>{finance.currency}</span>
          </div>
          <div>
            <span className="title">Exchange: </span>
            <span>{finance.exchange}</span>
          </div>
          <div>
            <span className="title">Sector: </span>
            <span>{finance.sector}</span>
          </div>
          <div>
            <span className="title">Country: </span>
            <span>{finance.country}</span>
          </div>
          <div>
            <span className="title">CEO: </span>
            <span>{finance.ceo}</span>
          </div>
          <div>
            <span className="title">Industry: </span>
            <span>{finance.industry}</span>
          </div>
          <div>
            <span className="title">Changes: </span>
            <span>{finance.changes}</span>
          </div>
          <div>
            <span className="title">Price: </span>
            <span>{finance.price}</span>
          </div>
        </div>
      ))}

    </Div>
  );
}

const Div = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
.back-link{
  padding: 10px;
}
.detail-container{
border: 2px solid #EC4C8A;
padding: 10px;
margin: 10px;
.title{
  font-size: 18px;
  font-weight: 400;
}
}
`;
