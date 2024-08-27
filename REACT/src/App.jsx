import { Components } from "./concepts/a_components/Components";
import { EventHandle } from "./concepts/b_eventHandle/EventHandle";
import { UseState_basic } from "./concepts/c_hooks/a_useState/useState_basic";
import { UseEffect } from "./concepts/c_hooks/b_useEffect/UseEffect";


function App() {
  return (
    <>
      <Components />
      <EventHandle />
      <UseState_basic/>
      <UseEffect/>
    </>
  )
}
export default App;