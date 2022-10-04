import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeCartCardContainer, RemoveButton } from "./styles";
import { Trash } from "phosphor-react"
import { CartItem } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrase() {
    changeCartItemQuantity(coffee.id, "increase")
  }

  function handleDecrase() {
    changeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <CoffeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
      
        <div>
          <RegularText color="subtitle">
            {coffee.name}
          </RegularText>
          <ActionsContainer>
            <QuantityInput 
              size="small"
              onIncrease={handleIncrase}
              onDecrease={handleDecrase} 
              quantity={coffee.quantity} 
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16}/>
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      
      <p>R$ {formattedPrice}</p>
    </CoffeCartCardContainer>
  )
}