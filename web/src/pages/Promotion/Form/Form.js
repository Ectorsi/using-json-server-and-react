import UIContainer from 'components/UI/Container/Container';
import React from 'react';
import { useParams } from 'react-router-dom';
import PromotionForm from '../../../components/Promotion/PromotionForm/PromotionForm'

const PagesPromotionForm = () => {
  const { id } = useParams();

  return (
    <UIContainer>
      <PromotionForm />
    </UIContainer>
  );
}

export default PagesPromotionForm;
