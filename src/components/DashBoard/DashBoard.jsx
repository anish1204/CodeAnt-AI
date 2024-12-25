import React, { useState, useEffect } from 'react';
import HeaderLogo from '../HeaderLogo';
import Button from '../Button';
import Item from '../Item';
import SideBarButton from '../SideBarButton';

const DashBoard = () => {
    const [user, setUser] = useState('Anish');
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    const data = [
        {
            title: 'design-system',
            status: 'Public',
            activity: 'Updated 1 day ago',
            size: '7320 KB',
            stack: 'React'
        },
        {
            title: 'codeant-ci-app',
            status: 'Private',
            activity: 'Updated 2 days ago',
            size: '3420 KB',
            stack: 'React'
        },
        {
            title: 'analytics dashboard',
            status: 'Public',
            activity: 'Updated 5 days ago',
            size: '4521 KB',
            stack: 'Python'
        },
        {
            title: 'mobile app',
            status: 'Private',
            activity: 'Updated 5 days ago',
            size: '4521 KB',
            stack: 'Python'
        },
        {
            title: 'e-commerce platform',
            status: 'Public',
            activity: 'Updated 5 days ago',
            size: '4521 KB',
            stack: 'Python'
        },
        {
            title: 'blog website',
            status: 'Public',
            activity: 'Updated 5 days ago',
            size: '4521 KB',
            stack: 'Python'
        }
    ];

    const sidebarButtons = [
        { text: 'Repositories', imgSrc: '../assets/dashboard/home.svg' },
        { text: 'AI Code Review', imgSrc: '../assets/dashboard/code.svg' },
        { text: 'Cloud Security', imgSrc: '../assets/dashboard/cloud.svg' },
        { text: 'How to Use', imgSrc: '../assets/dashboard/book.svg' },
        { text: 'Settings', imgSrc: '../assets/dashboard/gear.svg' },
        { text: 'Support', imgSrc: '../assets/dashboard/phone.svg' },
        { text: 'Sign Out', imgSrc: '../assets/dashboard/sign-out.svg',link:'/' },
    ];

    const [activeTab, setActiveTab] = useState(sidebarButtons[0].text);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Debouncing logic for the search term
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); // Delay of 300ms

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    // Filtering logic when debounced search term changes
    useEffect(() => {
        if (debouncedSearchTerm) {
            const lowercasedSearchTerm = debouncedSearchTerm.toLowerCase();
            const filtered = data.filter(item =>
                item.title.toLowerCase().includes(lowercasedSearchTerm) ||
                item.stack.toLowerCase().includes(lowercasedSearchTerm)
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data);
        }
    }, [debouncedSearchTerm,data]);

    return (
        <>
            <div className="dashboard-container">
                {/* Sidebar for larger screens */}
                <div className="sidebar">
                    <HeaderLogo />
                    <select className="user-select" value="">
                        <option value={user}>{user}</option>
                    </select>
                    <div className="sidemenu-container">
                        <ul className="sidemenu-bar top-buttons">
                            {sidebarButtons.slice(0, 5).map((button, index) => (
                                <SideBarButton
                                    key={index}
                                    text={button.text}
                                    link={button.link || "#"}
                                    imgSrc={button.imgSrc}
                                    isActive={activeTab === button.text}
                                    onClick={() => handleTabClick(button.text)}
                                />
                            ))}
                        </ul>
                        <ul className="sidemenu-bar bottom-buttons">
                            {sidebarButtons.slice(5, 7).map((button, index) => (
                                <SideBarButton
                                    key={index}
                                    text={button.text}
                                    imgSrc={button.imgSrc}
                                    isActive={activeTab === button.text}
                                    onClick={() => handleTabClick(button.text)}
                                />
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Dropdown for mobile */}
                <div className="mobile-header">
                    <button className="dropdown-button" onClick={toggleDropdown}>
                        <HeaderLogo /> {!showDropdown ? '☰' : 'X'}
                    </button>

                    {showDropdown && (
                        <div className="dropdown-menu">
                            <select className="user-select-m" value="">
                                <option value={user}>{user}</option>
                            </select>
                            <ul>
                                {sidebarButtons.map((button, index) => (
                                    <li className="ind-opt" key={index} onClick={() => handleTabClick(button.text)}>
                                        <img alt="image" src={button.imgSrc} width={25} height={25} /> <p>{button.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Main content */}
                <div className="content-container">
                    <div className="content1">
                        <div className="d-flex justify-content-between head-sec1" style={{ padding: '1.5rem 1rem' }}>
                            <div className="d-col">
                                <span className="primary_h f-24">Repositories</span>
                                <span className="f-12 text-grey inter" style={{ marginTop: '0.5rem' }}>
                                    {filteredData.length} Repositories
                                </span>
                            </div>
                            <div className="d-flex g-1 flex-wrap">
                                <Button data={0} btntitle={'Refresh'} imgSrc={'../assets/dashboard/refresh.svg'} />
                                <Button data={1} btntitle={'Add Repository'} imgSrc={'../assets/dashboard/plus.svg'} />
                            </div>
                        </div>
                        <div className="search-sec">
                            <input
                                className="search-box"
                                placeholder="Search Repositories"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="resuts" style={{ marginTop: '1rem' }}>
                            {filteredData.map((item, index) => (
                                <Item key={index} data={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoard;
