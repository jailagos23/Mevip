import { Card, Metric, Text, Flex, ProgressBar, ProgressCircle } from '@tremor/react'
import React from 'react'

const CardBase = () => {
  return (
    <Card>
        <Text>Latidos por minuto</Text>
        <Metric> $71,465 </Metric>
        <Flex>
            <Text>32% del objetivo anual</Text>
            <Text> $255,000</Text>
        </Flex>
        <ProgressBar value={60} className='mt-3'>Holaa</ProgressBar>
    </Card>
  )
}

export default CardBase
