import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContiner } from "./styles";

export function OurCoffees() {
  return(
    <OurCoffeesContiner className="container">
      <TitleText size="l" color="subtitle">Nossos cafés</TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContiner>
  )
}