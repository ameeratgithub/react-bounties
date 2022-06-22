import styled from "styled-components"
import BountiesList from "./bounties-list"

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
`

function BountiesContainer() {
    return <div className="w-full py-16">
        <Container>
            <div className="bg-[#100e2e] overflow-hidden rounded-[10px] p-5 w-full">
                <h1 className="text-white pb-1 mt-[20px] mb-[43px] w-full text-center text-4xl font-bold border-b border-[#4a4a4a]">
                    Bounties                    
                </h1>
                <BountiesList/>
            </div>
        </Container>
    </div>
}

export default BountiesContainer