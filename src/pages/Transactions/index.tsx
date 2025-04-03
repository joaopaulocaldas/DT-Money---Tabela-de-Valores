import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighLight, TransactionsContainer } from "./styles"

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
        <TransactionsContainer>
            <SearchForm/>
            <table>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de Site</td>
                        <td>
                            <PriceHighLight variant="income"> 
                                R$ 12.000,00
                            </PriceHighLight> 
                        </td>
                        <td>Venda</td>
                        <td>25/03/2025</td>
                    </tr>
                    <tr>
                        <td width="50%">Hamburguer</td>
                        <td>
                            <PriceHighLight variant="outcome"> 
                               - R$ 59,00
                            </PriceHighLight> 
                            </td>
                        <td>Alimentação</td>
                        <td>20/03/2025</td>
                    </tr>
                </tbody>
            </table>
        </TransactionsContainer>
        </div>
    )
}