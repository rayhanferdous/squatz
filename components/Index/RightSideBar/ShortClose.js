import React from 'react'
import RightSideBarTotalCard from './RightSideBarTotalCard';
import RightSideBarBtnCard from './RightSideBarBtnCard copy';
import SettingSvg from '@/components/Svg/SettingSvg';
import RightSideBarShortCloseCard from './RightSideBarShortCloseCard';
import InfoText from './InfoText';

function ShortClose() {
  return (
      <div className="p-8">
          <div className="flex items-center justify-between">
              <p className="font-medium text-sm text-cardText mb-5">Sell squeeth ERC20 to get ETH</p>
              <SettingSvg />
          </div>
          <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                  <RightSideBarShortCloseCard />
                  <RightSideBarShortCloseCard />
                  <div className="border-b border-cardText">
                      <p className="font-medium text-xl text-cardText mb-2">Full Close</p>
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                      <InfoText />
                      <InfoText />
                  </div>
              </div>
              <RightSideBarTotalCard />
              <RightSideBarBtnCard name="SELL TO CLOSE" />
              <div className="text-center">
                  <span className=" font-medium text-cardText">Trades on Uniswap via Auto Router</span>
              </div>
          </div>
      </div>
  );
}

export default ShortClose