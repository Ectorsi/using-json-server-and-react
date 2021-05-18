import React from 'react';
import PromotionCard from '../Card/Card';
import './PromotionList.css'
const PromotionList = ({loading, promotions}) => {
  if(loading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="promotion-list">
      {promotions.map((promotion) => (
        <PromotionCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  )

}

export default PromotionList;