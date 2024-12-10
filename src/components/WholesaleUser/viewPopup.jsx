import React, { useState, useEffect } from 'react';
import { __ } from "@wordpress/i18n";


const ViewPopup = (props) => {
    const {addiionalFields, setOpenDialog} = props;

    return (
        <>
            <main className='view-wholesale-wrapper'>
            <section className="popup-main-wrapper">
                <nav className="popup-navigation">
                    <p>View Form</p>
                    <div className='popup-close-icon' onClick={()=> setOpenDialog(false)}>
                        <i className='adminLib-close'></i>
                    </div>
                </nav>
            </section>

                
                {
                    Object.entries(addiionalFields).map(([key, value], index)=>{
                        return(
                            <div key={index} className='popup-content-wrapper'>
                                <label>{key}:</label>
                                <input 
                                    type="text"
                                    value={value}
                                    readOnly
                                />
                            </div>
                        )
                    })
                }
                {
                    !addiionalFields && <p className='empty-form'>No Data Found</p>
                }
                <div className='popup-content-wrapper right-alignment'>
                    <button className='modal-close' onClick={()=> setOpenDialog(false)}>Decline</button>
                    <button className='main-btn btn-purple' onClick={()=> setOpenDialog(false)}>Approve</button>
                </div>
            </main> 
        </>
    )
}
export default ViewPopup