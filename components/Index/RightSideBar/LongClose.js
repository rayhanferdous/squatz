import React from 'react'
import RightSideBarCard from './RightSideBarCard';
import InfoText from './InfoText';
import RightSideBarTotalCard from './RightSideBarTotalCard';
import RightSideBarBtnCard from './RightSideBarBtnCard copy';
import SettingSvg from '@/components/Svg/SettingSvg';

function LongClose() {
  return (
      <div className="p-8 ">
          <div className="flex items-center justify-between">
              <p className="font-medium text-sm text-cardText mb-5">Sell squeeth ERC20 to get ETH</p>
              <SettingSvg />
          </div>
          <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                  <RightSideBarCard />
                  <RightSideBarCard />
              </div>
              <RightSideBarTotalCard />
              <RightSideBarBtnCard name='SELL TO CLOSE' />
              <div className="text-center">
                  <span className=" font-medium text-cardText">Trades on Uniswap via Auto Router</span>
              </div>
          </div>
      </div>
  );
}

export default LongClose