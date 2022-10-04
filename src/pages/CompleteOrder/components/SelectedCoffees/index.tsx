import { TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { CoffeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}