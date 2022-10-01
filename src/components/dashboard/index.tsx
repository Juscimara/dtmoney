import { TransacctionsTable } from "../../transactionsTable";
import { Summmary } from "../summary";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summmary />
      <TransacctionsTable />
    </Container>
  );
}
