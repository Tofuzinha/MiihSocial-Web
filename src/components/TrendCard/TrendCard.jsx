import React from 'react';
import { Container, Trend } from './styles';
import {TrendData} from '../../Data/TrendData';


const TrendCard = () => {
    return(
        <Container>
            <h3>Trends for You</h3>
            {TrendData.map((trend) => {
                return(
                    <Trend>
                        <span>#{trend.name}</span>
                        <span> {trend.shares}k shares</span>
                    </Trend>
                )
            })}

        </Container>
    )
}

export default TrendCard;