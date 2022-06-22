import { useEffect, useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import BountyColumn from "./bounty-column"
import BountyHeader from "./bounty-header"


function BountiesList() {

    const [bounties, setBounties] = useState([])
    // const [assignedBounties, setAssignedBounties] = useState([])
    // const [underReviewBounties, setUnderReviewBounties] = useState([])
    // const [closedBounties, setClosedBounties] = useState([])

    useEffect(() => {
        populateBounties()
    }, [])

    const getArray = () => {
        const arr = []
        for (let i = 0; i < 3; i++) {
            const obj = {
                id: Math.random().toString(36).substring(2, 9),
                title: 'Write a blog post for DAOHelper',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in er',
                reward: 5,
                daysLeft: 2
            }
            arr.push(obj)
        }
        return arr
    }
    const populateBounties = () => {
        setBounties({
            open: getArray(),
            assigned: getArray(),
            underReview: getArray(),
            closed: getArray(),
        })

    }

    const handleDragEnd = (e) => {
        const _bounties = { ...bounties }

        const movingBounty = _bounties[e.source.droppableId].filter(b => b.id === e.draggableId)[0]

        _bounties[e.destination.droppableId].push(movingBounty)

        _bounties[e.source.droppableId] = _bounties[e.source.droppableId].filter(b => b.id !== e.draggableId)

        setBounties(_bounties)
    }



    return <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-4 gap-4">
            <div>
                <BountyHeader borderColor='rgb(196, 196, 196)' text={`Open Bounties`} />
                <BountyColumn bounties={bounties.open} id="open" footerBgColor='rgb(196, 196, 196)'
                    footerTextColor='rgb(31,31,31)' />
            </div>
            <div>
                <BountyHeader borderColor='rgb(95, 113, 212)' text={`Assigned / IN Progress`} />
                <BountyColumn bounties={bounties.assigned} id="assigned" footerBgColor='rgb(95, 113, 212)'
                    footerTextColor='white' />
            </div>
            <div>
                <BountyHeader borderColor='rgb(165, 22, 185)' text={`Under Review`} />
                <BountyColumn bounties={bounties.underReview} id="underReview" footerBgColor='rgb(165, 22, 185)'
                    footerTextColor='white' />
            </div>
            <div>
                <BountyHeader borderColor='rgb(6, 219, 172)' text={`Closed / Rewarded`} />
                <BountyColumn bounties={bounties.closed} id="closed" footerBgColor='rgb(6, 219, 172)'
                    footerTextColor='white' />
            </div>
        </div>
    </DragDropContext>
}

export default BountiesList