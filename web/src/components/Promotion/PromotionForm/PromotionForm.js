import React, { useEffect, useState } from 'react';
import './PromotionForm.css'
import axios from 'axios';
import { useHistory } from 'react-router';
const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  price: '',
}
const PromotionForm = ({id}) => {
  const [values, setValues] = useState(id ? null : initialValue);
  const history = useHistory();

  
  

  useEffect(() => {
    if(id){
      axios.get(`http://localhost:5000/promotions/${id}`)
      .then((response) => {
        setValues(response.data)
      })
    }
  }, [id])

  function onChange(e) {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }
  function onSubmit(e) {
    e.preventDefault();

    const method = id ? 'put': 'post';

    const url = id
    ? `http://localhost:5000/promotions/${id}`
    : 'http://localhost:5000/promotions';
    axios[method](url, values)
    .then((response) => {
      history.push('/')
    })
  }

  function click() {


    axios.delete(`http://localhost:5000/promotions/${id}`)
      .then(response => {
        history.push('/')
      })
  }

  return (
    <div >
    <h1>Promo Show</h1>
    <h2>Nova Promoção</h2>
    {!values 
    ? (
      <div>Carregando...</div>
    ) :
    (

    <form onSubmit={onSubmit} >
      <div className="promotion-form__group">
        <label htmlFor="title">Título</label>
        <input id="title" name="title" type="text" onChange={onChange} value={values.title}/>
      </div>
      <div className="promotion-form__group">
        <label htmlFor="url">Link</label>
        <input id="url" name="url" type="text" onChange={onChange} value={values.url} />
      </div>
      <div className="promotion-form__group">
        <label htmlFor="imageUrl">Imagem (URL)</label>
        <input id="imageUrl" name="imageUrl" type="text" onChange={onChange} value={values.imageUrl} />
      </div>
      <div className="promotion-form__group">
        <label htmlFor="price">Preço</label>
        <input id="price" name="price" type="number" onChange={onChange} value={values.price} />
      </div>
      <div className="promotion-form__buttons">
        <button type="submit" className="promotion-card__save-button" >Salvar</button>
        <button className="promotion-card__delete-button" type="button" onClick={() => click()} >Excluir</button>
      </div>
    </form>

    )
    }

    </div>
  )

}

export default PromotionForm;