/* global appLocalizer */
import React, { Component } from 'react';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import './popupContent.scss';

const PopupPluginDependency = () => {
    return (
        <>
            <DialogContent>
                <DialogContentText>
                    <div className="admin-module-dialog-content">
                        <div className="admin-image-overlay">
                            <div className="admin-overlay-content">
                                <div className="admin-banner-content">
                                    <h2>Add Enquiry Button for Out of Stock Products</h2>
                                    <p id='description'>Install the "Back In Stock Notifier for WooCommerce" plugin to enable the Enquiry button for out-of-stock products.</p>
                                </div>
                                <a className="admin-go-pro-btn" target="_blank" href="https://wordpress.org/plugins/woocommerce-product-stock-alert/">Download now</a>
                            </div>
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>
        </>
    );
}

export default PopupPluginDependency;