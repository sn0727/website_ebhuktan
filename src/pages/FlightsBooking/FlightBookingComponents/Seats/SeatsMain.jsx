import React, { useState } from 'react';
import SeatsList from './SeatsComponents/SeatsList';
import MealList from './SeatsComponents/MealList';
import BaggageList from './SeatsComponents/BaggageList';
import { formStateAtom } from '../../atom/atom';
import { useRecoilValue } from 'recoil';

const TabBar = ({ tabs, initialTab, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <div className="tab-bar">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => handleTabClick(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};


const SeatsMain = ({ setIdComponent }) => {
    const [selectedTab, setSelectedTab] = useState('Seat');
    // const [selectedUserDetail, setSelectedUserDetail] = useRecoilValue(saveUserDetails)

    const handleTabChange = (tab) => {
        setSelectedTab(tab)
    };

    return (
        <>
            <div>
                <h3 className='add-travel-detail-title'>Seats List</h3>
                <div className='my-4 mian-box-clas'>
                    <div className='tabButton'>
                        <TabBar
                            tabs={['Seat', 'Meal', 'Baggage']}
                            initialTab={selectedTab}
                            onTabChange={handleTabChange}
                        />
                    </div>
                    {/* Your content for each tab goes here */}
                    {selectedTab === 'Seat' && <SeatsList setIdComponent={setIdComponent} />}
                    {selectedTab === 'Meal' && <MealList />}
                    {selectedTab === 'Baggage' && <BaggageList />}
                </div>
            </div>
        </>
    )
}

export default SeatsMain