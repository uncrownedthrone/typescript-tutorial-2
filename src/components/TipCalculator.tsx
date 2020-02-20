import React, { useState, useEffect } from 'react'

const TipCalculator = () => {
  const [billTotal, setBillTotal] = useState<number | string>(0)
  const [tipAmount, setTipAmount] = useState<number>(0)

  useEffect(() => {
    const tip: number = parseFloat(billTotal as any) * 0.18
    setTipAmount(tip)
  }, [billTotal])

  return (
    <div>
      <input
        type="number"
        placeholder="Bill Total"
        value={billTotal}
        onChange={e => setBillTotal(e.target.value)}
      />
      <p>18% Tip: ???</p>
      <p>Total Amount: ???</p>
    </div>
  )
}

export default TipCalculator
