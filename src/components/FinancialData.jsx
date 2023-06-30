import React from 'react';
import { styled } from 'styled-components';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from 'react-router-dom';
import img from '../assets/bg.jpg';

export default function FinancialData({ data }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Div>
        <button className="more" type="button" onClick={() => { navigate(`/details/${data.symbol}`); }}>
          <ReadMoreIcon />
        </button>
        <div className="details">
          <p>{data.symbol}</p>
          <span>{data.name}</span>
        </div>
      </Div>
    </Container>
  );
}

const Container = styled.div`
width: 100%;
display: flex;
background-image: url(${img});
background-size: cover;
background-position: center center;
`;
const Div = styled.div`
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
gap: 25px;
background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(236, 76, 138, 0.8));
color: white;
border: 1px solid white;
padding-right: 5px;
.details {
    display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-end;
   font-size: 18px;
   font-weight: 500;
   span {
    font-size: 14px;
   }
}
button{
    border: none;
    color: white;
    background-color: transparent;
}
`;
