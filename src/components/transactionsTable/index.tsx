import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

//RETORNAR-> CHAPTERII-> 01-> 04-> AULA 04
//link figma: https://www.figma.com/file/iLFkm80Hm9YeC0lMuasNFN/dtmoney-Ignite?node-id=0%3A1

export function TransacctionsTable(){

    useEffect(() => {
        api.get('transactions')
         .then(response => console.log(response.data))
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td>Hamburguer</td>
                        <td className="withdraw">-R$59,00</td>
                        <td>Alimentação</td>
                        <td>10/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="withdraw">-R$1200,00</td>
                        <td>Casa</td>
                        <td>27/03/2021</td>
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$5.400,00</td>
                        <td>Venda</td>
                        <td>15/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}