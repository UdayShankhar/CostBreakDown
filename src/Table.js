import React, { useState } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Chip from '@mui/material/Chip';

export default function TableData() {

    const [homeArray, setHomeArray] = useState({ design: 3, IandA: 2, Integration: 0 })
    const [service, setService] = useState({ design: 1, IandA: 1, Integration: 0 })
    const [aboutUs, setAboutUs] = useState({ design: 2, IandA: 0, Integration: 1 })
    const [partners, setPartners] = useState({ design: 1, IandA: 1, Integration: 0 })
    const [contactUs, setContactUs] = useState({ design: 3, IandA: 0, Integration: 1 })

    const handleHomeArrayPlus = (index) => {
        console.log(`Index ${index}`);
        if (index == 0) {
            setHomeArray(homeArray.design = 2)
        }
    }

    const handleHomeArrayMinus = (index) => {
        console.log(`Index ${index}`);
    }

    const handleServiceArray = (index) => {
        console.log(`Index ${index}`);
    }

    const handleAboutUsArray = (index) => {
        console.log(`Index ${index}`);
    }

    const handlePartnersArray = (index) => {
        console.log(`Index ${index}`);
    }

    const handleContactUsArray = (index) => {
        console.log(`Index ${index}`);
    }

    return (
        <>
            <table class="table" id='tableData'>
                <thead>
                    <tr>
                        <th scope="col" className='tableHead'>Pages<span><InfoOutlinedIcon fontSize='small' /></span></th>
                        <th scope="col">Design<span><InfoOutlinedIcon fontSize='small' /></span></th>
                        <th scope="col">Interactions & Animations<span><InfoOutlinedIcon fontSize='small' /></span></th>
                        <th scope="col">Intergration<span><InfoOutlinedIcon fontSize='small' /></span></th>
                        <th scope="col">Cost<span><InfoOutlinedIcon fontSize='small' /></span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">01.<span style={{ fontWeight: 500 }}>Home</span></th>
                        {Object.values(homeArray).map((data, index) => (
                            <td>
                                <div className='reactChips' style={{ display: 'flex' }}>
                                    <span style={{ padding: '4px' }} onClick={() => handleHomeArrayMinus(index)}>-</span>
                                    <Chip
                                        variant="outlined"
                                        label={data == 0 ? 'None' : data == 1 ? 'Basic' : data == 2 ? 'Advanced' : 'Complex'}
                                        style={{
                                            backgroundColor: data == 0 ? 'rgba(0, 0, 0, 0.2)' : data == 1 ? '#91D4A8' : data == 2 ? '#E9BE74' : '#F57F6C',
                                            width: data == 0 ? '60px' : data == 1 ? '88px' : '104px'
                                        }}
                                    />
                                    <span style={{ padding: '4px', marginLeft: data == 0 ? '50px' : data == 1 ? '50px' : '18px' }} onClick={() => handleHomeArrayPlus(index)}>+</span>
                                </div>
                            </td>
                        ))}
                        <td style={{ fontWeight: '800' }} >$200</td>
                    </tr>
                    <tr>
                        <th scope="row">02.<span style={{ fontWeight: 500 }}>Service</span></th>
                        {Object.values(service).map((data, index) => (
                            <td>
                                <div className='reactChips' style={{ display: 'flex' }}>
                                    <span style={{ padding: '4px', cursor: 'pointer' }}>-</span>
                                    <Chip
                                        variant="outlined"
                                        onClick={() => handleServiceArray(index)}
                                        label={data == 0 ? 'None' : data == 1 ? 'Basic' : data == 2 ? 'Advanced' : 'Complex'}
                                        style={{ 
                                            backgroundColor: data == 0 ? 'rgba(0, 0, 0, 0.2)' : data == 1 ? '#91D4A8' : data == 2 ? '#E9BE74' : '#F57F6C',
                                            width: data == 0 ? '60px' : data == 1 ? '88px' : '104px' }}
                                    />
                                    <span style={{ padding: '4px', cursor: 'pointer', marginLeft: data == 0 ? '50px' : data == 1 ? '50px' : '18px' }}>+</span>
                                </div>
                            </td>
                        ))}
                        <td style={{ fontWeight: '800' }}>$200</td>
                    </tr>
                    <tr>
                        <th scope="row">03.<span style={{ fontWeight: 500 }}>About Us</span></th>
                        {Object.values(aboutUs).map((data, index) => (
                            <td>
                                <div className='reactChips' style={{ display: 'flex' }}>
                                    <span style={{ padding: '4px' }}>-</span>
                                    <Chip
                                        variant="outlined"
                                        onClick={() => handleAboutUsArray(index)}
                                        label={data == 0 ? 'None' : data == 1 ? 'Basic' : data == 2 ? 'Advanced' : 'Complex'}
                                        style={{ backgroundColor: data == 0 ? 'rgba(0, 0, 0, 0.2)' : data == 1 ? '#91D4A8' : data == 2 ? '#E9BE74' : '#F57F6C', width: data == 0 ? '60px' : data == 1 ? '88px' : '104px' }}
                                    />
                                    <span style={{ padding: '4px', marginLeft: data == 0 ? '50px' : data == 1 ? '50px' : '18px' }}>+</span>
                                </div>
                            </td>
                        ))}
                        <td style={{ fontWeight: '800' }}>$200</td>
                    </tr>
                    <tr>
                        <th scope="row">04.<span style={{ fontWeight: 500 }}>Partners</span></th>
                        {Object.values(partners).map((data, index) => (
                            <td>
                                <div className='reactChips' style={{ display: 'flex' }}>
                                    <span style={{ padding: '4px' }}>-</span>
                                    <Chip
                                        variant="outlined"
                                        onClick={() => handlePartnersArray(index)}
                                        label={data == 0 ? 'None' : data == 1 ? 'Basic' : data == 2 ? 'Advanced' : 'Complex'}
                                        style={{ backgroundColor: data == 0 ? 'rgba(0, 0, 0, 0.2)' : data == 1 ? '#91D4A8' : data == 2 ? '#E9BE74' : '#F57F6C', width: data == 0 ? '60px' : data == 1 ? '88px' : '104px' }}
                                    />
                                    <span style={{ padding: '4px', marginLeft: data == 0 ? '50px' : data == 1 ? '50px' : '18px' }}>+</span>
                                </div>
                            </td>
                        ))}
                        <td style={{ fontWeight: '800' }}>$200</td>
                    </tr>
                    <tr>
                        <th scope="row">05.<span style={{ fontWeight: 500 }}>Services</span></th>
                        {Object.values(contactUs).map((data, index) => (
                            <td>
                                <div className='reactChips' style={{ display: 'flex' }}>
                                    <span style={{ padding: '4px' }}>-</span>
                                    <Chip
                                        variant="outlined"
                                        onClick={() => handleContactUsArray(index)}
                                        label={data == 0 ? 'None' : data == 1 ? 'Basic' : data == 2 ? 'Advanced' : 'Complex'}
                                        style={{ backgroundColor: data == 0 ? 'rgba(0, 0, 0, 0.2)' : data == 1 ? '#91D4A8' : data == 2 ? '#E9BE74' : '#F57F6C', width: data == 0 ? '60px' : data == 1 ? '88px' : '104px' }}
                                    />
                                    <span style={{ padding: '4px', marginLeft: data == 0 ? '50px' : data == 1 ? '50px' : '18px' }}>+</span>
                                </div>
                            </td>
                        ))}
                        <td style={{ fontWeight: '800' }}>$200</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}