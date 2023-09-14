import { Container, Statistic, StatisticName, StatisticNumber } from "./styles"

export const GlobalStatistics = () => {
    return (
        <Container>
            <Statistic>
                <StatisticNumber>10+</StatisticNumber>
                <StatisticName>Years of experience</StatisticName>
            </Statistic>
            <Statistic>
                <StatisticNumber>75+</StatisticNumber>
                <StatisticName>Projects completed</StatisticName>
            </Statistic>
            <Statistic>
                <StatisticNumber>15+</StatisticNumber>
                <StatisticName>Opensource libraries</StatisticName>
            </Statistic>
            <Statistic>
                <StatisticNumber>68+</StatisticNumber>
                <StatisticName>Happy clients</StatisticName>
            </Statistic>
        </Container>
    )
}