import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCustomers } from '../../redux/modules/customers'
import { ArrowLeft, ArrowRight } from '../../components/arrows'
import './styles.scss'

const Slider = ({ name, position, comment }) => (
  <div className='slider'>
    <div>
      <p className='slider__name'>{name}</p>
      <p className='slider__position'>{position}</p>
    </div>
    <p className='slider__comment'>{comment}</p>
  </div>
)

const PageOne = props => {
  const { customers } = props
  const [index, setIndex] = useState(0)
  useEffect(() => {
    props.getCustomers()
  }, [])

  const goToNext = () => {
    return index === customers.reviews.length - 1 ? setIndex(0) : setIndex(index + 1)
  }
  const goToPreview = () => {
    return index === 0 ? setIndex(customers.reviews.length - 1) : setIndex(index - 1)
  }

  return (

    <div className='container__customer'>
      {
        customers.reviews && (
          <>
            <h1 className='title'><span>{customers.title}</span></h1>
            <Slider {...customers.reviews[index]} />
            <div className='navigate'>
              <div className='navigate__counter'>{`${index + 1}/${customers.reviews.length}`}</div>
              <div className='navigate__buttons'>
                <button onClick={goToPreview}><ArrowLeft /></button>
                <button onClick={goToNext}><ArrowRight /></button>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

const mapStateToProps = ({ customers }) => ({
  customers: customers.info
})

const mapDispatchToProps = {
  getCustomers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageOne)
