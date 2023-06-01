import RightSidebarContent from '@/components/Index/RightSideBar/RightSidebarContent';
import Container from '@/components/Layout/Container';
import HeroBtn from '@/components/utilities/HeroBtn';
import React from 'react'

function lp() {
  return (
      <Container className={"flex justify-between pt-8"}>
          <div className="w-[1244px] flex flex-col gap-11">
              <div className="">
                  <div className="flex gap-2 items-center">
                      <img className="w-[88px]" src="/assets/logo.svg" alt="" />
                      <div>
                          <h2 className="font-medium text-[25px] text-white">Quipuswap LP SQTZ - XTZ Pool</h2>
                          <p className="text-xl text-linkText">arn LP fees for providing SQTZ-XTZ liquidity</p>
                      </div>
                  </div>
                  <div className="flex gap-10 items-center mt-5 ml-6">
                      <div className="min-w-[459px] max-w-[459px] h-[181px] flex flex-col gap-3.5 rounded-xl bg-card p-8">
                          <div className="flex justify-between">
                              <HeroBtn titleOne={"XTZ² Price"} />
                              <HeroBtn titleOne={"XTZ² Price"} />
                              <HeroBtn titleOne={"XTZ² Price"} />
                          </div>
                          <div className="flex gap-10">
                              <HeroBtn titleOne={"XTZ² Price"} />
                              <HeroBtn titleOne={"XTZ² Price"} />
                          </div>
                      </div>
                      <div className="min-w-[459px] max-w-[459px] text-white text-lg h-[181px] flex flex-col gap-3.5 rounded-xl bg-card p-8">
                          No LP Positions
                      </div>
                  </div>
              </div>
              <div className="w-[270px] h-[63px] border py-1.5 px-1 flex items-center border-btnSecondery rounded-xl">
                  <div className="w-full h-full bg-[#2A4041] text-btnSecondery font-semibold text-lg rounded-xl flex items-center justify-center">
                      Buy and LP
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-cardText font-semibold text-lg">
                      Buy and LP
                  </div>
              </div>
              <div>
                  <h2 className="font-medium text-[25px] text-btnSecondery">Buy squeeth and LP</h2>
                  <p className="font-medium text-white text-lg">Earn a payoff similar to XTZ1.5</p>
              </div>
              <div>
                  <h2 className="font-medium text-[22px] text-btnSecondery">Details</h2>
                  <p className="font-medium text-white mt-3">
                      Buying and LPing gives you a leverage position with a payoff similar to XTZ1.5. You give up some
                      of your squeeth upside in exchange for trading fees. You are paying funding for being long
                      squeeth, but earning fees from LPing on Quipuswap.
                  </p>
              </div>
              <div>
                  <h2 className="font-medium text-[22px] text-btnSecondery">Payoff</h2>
                  <img className="mt-3" src="/assets/chart.png" alt="" />
              </div>
              <div className='pb-20'>
                  <h2 className="font-medium text-[22px] text-btnSecondery">Risks</h2>
                  <p className="font-medium text-white mt-3">
                      Buying and LPing gives you a leverage position with a payoff similar to XTZ1.5. You give up some
                      of your squeeth upside in exchange for trading fees. You are paying funding for being long
                      squeeth, but earning fees from LPing on Quipuswap.
                  </p>
                  <p className="font-medium text-white mt-3">
                      Buying and LPing gives you a leverage position with a payoff similar to XTZ1.5. You give up some
                      of your squeeth upside in exchange for trading fees. You are paying funding for being long
                      squeeth, but earning fees from LPing on Quipuswap.
                  </p>
              </div>
          </div>
          <div></div>
      </Container>
  );
}

export default lp