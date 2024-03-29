import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PromotionSearch.css'
import PromotionList from '../PromotionList/PromotionList';
const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState('');
    useEffect(() => {
      const params = {};

      if(search) {
        params.title_like = search
      }

      axios.get('http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id', {params})
        .then((response) => {
          setPromotions(response.data);
        });
    }, [search]);
    return (
      <div>
        <header className="promotion-search__header">
          <h1>Promo Show</h1>
          <Link to="/create">Nova Promoção</Link>
        </header>
          <input 
          type="search" 
          className="promotion-search__input"
          placeholder="Buscar"
          value={search}
          onChange={ (e) => setSearch(e.target.value) }
          />
        
        <PromotionList promotions={promotions} loading={!promotions.length} />
      </div>
    )
}

export default PromotionSearch;