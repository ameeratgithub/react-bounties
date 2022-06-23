import { Droppable } from "react-beautiful-dnd"
import BountyCard from "./bounty-card"

function BountyColumn({ id, bounties }) {
    return <Droppable droppableId={id}>
        {(provided) => {
            return <div ref={provided.innerRef} {...provided.droppableProps}
                className="flex w-full min-h-screen min-w-[270px] flex-col gap-y-4 border-x border-[#4a4a4a] px-3">
                {
                    bounties?.map((bounty, i) => {
                        return <BountyCard bounty={bounty} key={bounty.id} index={i}/>
                    })
                }
                {provided.placeholder}
            </div>
        }}
    </Droppable>
}


export default BountyColumn