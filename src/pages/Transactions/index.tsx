import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Salário de Analista de Suporte PL</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 4.500,00
                </PriceHighlight>
              </td>
              <td>Salário</td>
              <td>07/02/2023</td>
            </tr>
            <tr>
              <td width="50%">Pós Graduação</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 160,00
                </PriceHighlight>
              </td>
              <td>Compra</td>
              <td>07/02/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}