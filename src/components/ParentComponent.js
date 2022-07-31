//passing/using props/function from parent to child
import { ChildComponent } from "./Childcomponent"

export const ParentComponent = () => {
    const welcomeParent = (childname) => {
        alert(`Hello Parent ${childname}`)
    }
    return <ChildComponent welcomeHandler={welcomeParent}></ChildComponent>
}