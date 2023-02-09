import { useContext } from "react";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

import { TransactionsContext } from "../../context/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B73E"/>
        </header>

        <strong>R$ 4.500,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68"/>
        </header>

        <strong>R$ 3.100,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF"/>
        </header>

        <strong>R$ 1.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}