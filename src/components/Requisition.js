import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../redux/slices/requisition';

function Requisition() {
  const { data, loading } = useSelector((state) => state.requisition)
  const dispatch = useDispatch();

  useEffect(() => {
    const URL = 'https://restcountries.eu/rest/v2/all';
    dispatch(fetchRecipes(URL))
  }, [dispatch]);
  
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      Requisition
      <h2>Current data from store:
        {data.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </h2>
    </div>
  )
}

export default Requisition;