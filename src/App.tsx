import { AppContainer } from "./styles";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";

export const App = () => {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((task) => (
        <Column
          key={task.id}
          id={task.id}
          text="Generate app scaffold"
        />
      ))}
      <AddNewItem
        onAdd={console.log}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
};
