import Text from "../components/text"
import TrashIcon from "../assets/icons/Trash-Regular.svg?react"
import CheckIcon from "../assets/icons/Check.svg?react"
import Pencil from "../assets/icons/Pencil.svg?react"
import PlusIcon from "../assets/icons/Plus.svg?react"
import Spinner from "../assets/icons/Spinner.svg?react"
import Icon from "../components/Icon"
import Badge from "../components/badge"
import Button from "../components/button"
import ButtonIcon from "../components/button-Icon"
import InputText from "../components/input-text"
import InputCheckbox from "../components/input-checkbox"
import Card from "../components/card"
import Container from "../components/container"
import Skeleton from "../components/skeleton"

export default function Pagecomponets(){
    return (
    <Container>
      <div>

        <div className="grid gap-3">
          
          <Text variant={"body-md-bold"} className="text-green-base"> Hello World! </Text>

        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base"/>
          <Icon svg={CheckIcon} className="fill-green-base"/>
          <Icon svg={Pencil} className="fill-green-base"/>
          <Icon svg={PlusIcon} className="fill-green-base"/>
          <Icon svg={Spinner} animate />
        </div>

        <div className="flex gap-1">
          <Badge variant={'primary'}>Gentle</Badge>
          <Badge variant={'secondary'}>Burn</Badge>
          <Badge loading={true} />
        </div>

        <div>
          <Button icon={PlusIcon} >Nova tarefa</Button>
        </div>

        <div className="gap-1 flex">
          <ButtonIcon icon={TrashIcon}></ButtonIcon>
          <ButtonIcon icon={TrashIcon} variant={"secondary"}></ButtonIcon>
          <ButtonIcon icon={TrashIcon} variant={"tertiary"}></ButtonIcon>
          <ButtonIcon icon={TrashIcon} loading={true}></ButtonIcon>
        </div>

        <div>
          <InputText  />
        </div>

        <div>
          <InputCheckbox/>
          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Hello, World!</Card>
        </div>

        <div>
          <Skeleton className="w-96 h-6" />
        </div>

      </div>
    </Container>
  )
}