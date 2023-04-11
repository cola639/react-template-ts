import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import {
  selectCount,
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  multiplyAsync,
  divideByAmount,
  divideAsync,
  divideIfOdd
} from '../../store/slices/counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const dispatch = useAppDispatch()

  const [incrementAmount, setIncrementAmount] = useState('2')
  const count = useAppSelector(selectCount)

  const incrementValue = Number(incrementAmount) || 0
  const onSetIncrementAmount = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIncrementAmount(e.target.value)

  // Add
  const handleAdd = () => dispatch(incrementByAmount(incrementValue))
  const handleAsyncAdd = () => dispatch(incrementAsync(incrementValue))
  const handleAddOdd = () => dispatch(incrementIfOdd(incrementValue))

  // Multiply
  const handleMultiply = () => dispatch(multiplyAsync(incrementValue))

  // Divide
  const handleDivideAmount = () => dispatch(divideByAmount(incrementValue))
  const handleDivideAsync = () => dispatch(divideAsync(incrementValue))
  const handleDicideOdd = () => dispatch(divideIfOdd(incrementValue))

  return (
    <div>
      {/* Value */}
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      {/* Add */}
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => onSetIncrementAmount(e)}
        />
        <button className={styles.button} onClick={handleAdd}>
          Add Amount
        </button>
        <button className={styles.asyncButton} onClick={handleAsyncAdd}>
          Add Async
        </button>
        <button className={styles.button} onClick={handleAddOdd}>
          Add If Odd
        </button>
        <button className={styles.asyncButton} onClick={handleMultiply}>
          Multiply Async
        </button>
      </div>
      {/* Multiply */}
      <div className={styles.row}>
        <button className={styles.asyncButton} onClick={handleMultiply}>
          Multiply Async
        </button>
      </div>
      {/* Divide */}
      <div className={styles.row}>
        <button className={styles.button} onClick={handleDivideAmount}>
          Divide Amount
        </button>
        <button className={styles.asyncButton} onClick={handleDivideAsync}>
          Divide Async
        </button>
        <button className={styles.button} onClick={handleDicideOdd}>
          Divide If Odd
        </button>
      </div>
    </div>
  )
}
