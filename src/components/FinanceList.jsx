import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import FinancialData from './FinancialData';
import { getFinance } from '../redux/finance/FinanceSlice';

export default function FinanceList() {
  const { finance, isLoading } = useSelector((store) => store.finance);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredCompanies = searchInput === ''
    ? finance
    : finance.filter((company) => company.name.toLowerCase().includes(searchInput.toLowerCase()));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinance());
  }, []);

  return (
    <Div>
      {isLoading === true ? <h3>Loading</h3> : ''}
      <div className="search-container">
        <input type="text" onChange={handleSearchInput} value={searchInput} placeholder="search company" />
      </div>
      <DataContainer>
        {filteredCompanies.map((data) => (
          <FinancialData key={data.symbol} data={data} className={filteredCompanies.length % 2 === 0 ? 'even' : ''} />
        ))}
      </DataContainer>
    </Div>
  );
}

const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
align-items: center;
background-color: #EC4C8A;

.search-container{
    margin-top: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
   input {
    width: 80%;
    padding: 7px 3px;
    border: 2px solid black;
    border-radius: 10px;
    outline: none;
   }
}
`;

const DataContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: auto auto;

`;
