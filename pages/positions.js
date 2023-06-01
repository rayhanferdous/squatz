import Container from "@/components/Layout/Container";
import React from "react";

function positions() {
    return (
        <Container className={"flex justify-between pt-20"}>
            <div className="flex flex-col gap-14">
                <div className="flex gap-40 ">
                    <div className="flex flex-col gap-8 font-medium">
                        <h2 className="text-2xl text-btnSecondery">Your Positions</h2>
                        <p className="text-[22px] text-white">No active positions</p>
                    </div>
                    <div className="flex gap-8">
                        <span className="text-[22px] !font-normal text-cardText"> XTZ Price:</span>
                        <span className="font-medium text-[22px] text-white">$ 1805.74</span>
                    </div>
                </div>

                <div className="flex flex-col gap-8 font-medium">
                    <h2 className="text-2xl text-btnSecondery">Your Vaults</h2>
                </div>
                <div className="flex flex-col gap-8 font-medium">
                    <h2 className="text-2xl text-btnSecondery">Transaction History</h2>
                </div>
            </div>
        </Container>
    );
}

export default positions;
