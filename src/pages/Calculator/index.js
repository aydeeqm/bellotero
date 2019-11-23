import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCalculator } from '../../redux/modules/calculator'
import { monthlyCalculator, employeeCalculator } from '../../redux/modules/calculator/rangeCalculator'
import InputRange from 'react-input-range'
import './styles.scss'

const RangeCalculator = props => {
  const { maxValue, minValue, value, onChange } = props
  const [defaultValue, setDefaultValue] = useState(value)
  return (
    <div className='container__range'>
      <InputRange
        maxValue={maxValue}
        minValue={minValue}
        value={defaultValue}
        onChange={value => setDefaultValue(value)}
        onChangeComplete={value => onChange(value)}
      />
    </div>
  )
}

const PageTwo = props => {
  const {
    monthlyCalculator,
    employeeCalculator,
    estimated,
    employee
  } = props
  useEffect(() => {
    props.getCalculator()
  }, [])
  const { title, description } = props.calculator
  const newTitle = title && title.split(' ')
  return (
    <div className='container'>
      {
        props.calculator && title && (
          <>
            <h1 className='title'>
              <div>{`${newTitle[0]} ${newTitle[1]} ${newTitle[2]}`}</div>
              <div>{`${newTitle[3]}`}</div>
            </h1>
            <p className='description'>{description}</p>
            <div className='monthly'>
              <div className='info'>
                <p className='total__description'>
                  <span>Monthly</span><br />
                  <span>ingredient spending</span>
                </p>
                <div className='info__description align-center'><span>$</span>{estimated.annual}</div>
              </div>
              <RangeCalculator
                {...props.monthly}
                onChange={monthlyCalculator}
              />
            </div>
            <div className='fulltime'>
              <div className='info'>
                <p className='total__description'>
                  <span>Full-time employees that</span><br />
                  <span>process invoices</span>
                </p>
                <div className='info__description--size align-center'>{employee.value}</div>
              </div>
              <RangeCalculator
                {...props.employee}
                onChange={employeeCalculator}
              />
            </div>
            <div className='food__cost'>
              <p className='total__title'><span>$</span>{estimated.foodCost}</p>
              <p className='total__description--align'>Estimated cost food savings</p>
            </div>
            <div className='annual'>
              <p className='total__title'><span>$</span>{estimated.annual}</p>
              <p className='total__description--align'>Your estimated annual savings</p>
            </div>
          </>
        )
      }
    </div>
  )
}

const mapStateToProps = ({ calculator, range }) => ({
  calculator: calculator.info,
  monthly: range.monthlyRange,
  employee: range.employeeRange,
  estimated: range.estimated
})

const mapDispatchToProps = {
  getCalculator,
  monthlyCalculator,
  employeeCalculator
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTwo)
