import { Draggable } from "react-beautiful-dnd"

function BountyCard({ bounty, footerBgColor, footerTextColor, index }) {

    return <Draggable draggableId={bounty.id} index={index}>
        {
            (provided) => {
                return <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                className="bg-[#5a4860] overflow-hidden text-white rounded-[12px] pt-5">
                    <h3 className="font-bold text-lg mb-5 px-5 capitalize">{bounty.title}</h3>
                    <p className="px-5 mb-4 text-sm">
                        {bounty.content}
                    </p>
                    <div className="flex text-[13px] font-semibold justify-between items-center  px-5  py-2"
                        style={{ backgroundColor: footerBgColor, color: footerTextColor }}>
                        <div>Reward: ${bounty.reward}</div>
                        <div>Time Left: ${bounty.daysLeft} days</div>
                    </div>
                </div>
            }
        }
    </Draggable>
}


export default BountyCard