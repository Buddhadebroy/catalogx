import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useTour } from '@reactour/tour';
import { useModules } from '../../../contexts/ModuleContext';
import gif from "../../../assets/images/customization-btn.gif"


const Tour = () => {
    const { modules } = useModules();
    const { setIsOpen, setSteps, setCurrentStep } = useTour();
    const [isNavigating, setIsNavigating] = useState(false);

    const waitForElement = (selector) =>
        new Promise((resolve) => {
            const checkElement = () => {
                if (document.querySelector(selector)) {
                    resolve();
                } else {
                    setTimeout(checkElement, 100);
                }
            };
            checkElement();
        });

    const navigateTo = async (url, step, selector) => {
        setIsNavigating(true);
        setIsOpen(false); // Close the tour
        window.location.href = url; // Navigate to the new page
        await waitForElement(selector); // Wait for the element to load
        setCurrentStep(step); // Move to the next step
        setIsOpen(true); // Reopen the tour
        setIsNavigating(false);
    };

    const settingsTourSteps = [
        {
            selector: '[data="catalog-showcase-tour"]',
            content: () => (
                <div class="tour-box">
                    <div 
                        onClick={() => {
                                finishTour();
                            }}
                        className="close-icon"
                    >
                        <i class="admin-font adminLib-close"></i>
                    </div>
                    <h3>Enable Catalog Mode</h3>
                    <h4>Activate Catalog mode to display your site as a product catalog, removing the "Add to Cart" button and optionally hiding prices.</h4>
                    <div className="tour-footer">
                        <button
                            className="btn-purple"
                            onClick={() => {
                                setCurrentStep(1);
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ),
        },
        {
            selector: '[data="enquiry-showcase-tour"]',
            content: () => (
                <div class="tour-box">
                    <div 
                        onClick={() => {
                                finishTour();
                            }}
                        className="close-icon"
                    >
                        <i class="admin-font adminLib-close"></i>
                    </div>
                    <h3>Enable Enquiry Mode</h3>
                    <h4>Turn on Enquiry mode to add an "Enquiry" button for customers, allowing direct communication via submitted forms, viewable in the admin dashboard or via email.</h4>
                    <div className="tour-footer">
                        <button
                            className="btn-purple"
                            onClick={() =>
                                {
                                const checkbox = document.querySelector(`[id="toggle-switch-enquiry"]`);

                                if (checkbox && checkbox.checked) {
                                    navigateTo(
                                        appLocalizer.enquiry_form_settings_url,
                                        2,
                                        '.enable-visibility'
                                    )
                                } else {
                                    setCurrentStep(3);
                                }
                                // modules.includes('enquiry') ?
                            }
                            }
                        >
                            Next
                        </button>
                    </div>
                </div>
            ),
        },

        {
            selector: '.enable-visibility',
            content: () => (
                <div class="tour-box">
                    <div 
                        onClick={() => {
                                finishTour();
                            }}
                        className="close-icon"
                    >
                        <i class="admin-font adminLib-close"></i>
                    </div>
                    <h3>Customize Enquiry Form</h3>
                    <h4>Head to the Enquiry Form Builder to enable the fields customers need to fill out when submitting product inquiries.</h4>
                    <div className="tour-footer">
                        <button
                            className="btn-purple"
                            onClick={() =>
                                navigateTo(
                                    appLocalizer.module_page_url,
                                    3,
                                    '[data="quote-showcase-tour"]'
                                )
                            }
                        >
                            Next
                        </button>
                    </div>
                </div>
            ),
        },

        {
            selector: '[data="quote-showcase-tour"]',
            content: () => (
                <div class="tour-box">
                    <div 
                        onClick={() => {
                                finishTour();
                            }}
                        className="close-icon"
                    >
                        <i class="admin-font adminLib-close"></i>
                    </div>
                    <h3>Enable Quote Module</h3>
                    <h4>Activate the Quote module to let customers request personalized product quotations. Admins can review the quotes and provide tailored pricing for customers to proceed with purchases.</h4>
                    <div className="tour-footer">
                        <button
                            className="btn-purple"
                            onClick={() => {
                                const checkbox = document.querySelector(`[id="toggle-switch-quote"]`);

                                if (checkbox && checkbox.checked) {
                                    navigateTo(
                                        appLocalizer.settings_page_url,
                                        4,
                                        '[data="quote-permission"]'
                                    )
                                } else {
                                    navigateTo(
                                        appLocalizer.customization_settings_url,
                                        5,
                                        '.enquiry-tab'
                                    )
                                    // setCurrentStep(6);
                                }
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ),
        },
        {
            selector: '[data="quote-permission"]',
            content: () => (
                <div class="tour-box">
                    <div 
                        onClick={() => {
                                finishTour();
                            }}
                        className="close-icon"
                    >
                        <i class="admin-font adminLib-close"></i>
                    </div>
                    <h3>Configure Quote Settings</h3>
                    <h4>Set up your quotation settings by defining whether to limit quote requests to logged-in users only.</h4>
                    <div className="tour-footer">
                        <button
                            className="btn-purple"
                            onClick={() => {
                                navigateTo(
                                    appLocalizer.customization_settings_url,
                                    5,
                                    '.enquiry-tab'
                                )
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ),
        },
        {
            selector: '.enquiry-tab',
            content: () => (
                <div class="tour-box">
                    <div 
                        onClick={() => {
                                finishTour();
                            }}
                        className="close-icon"
                    >
                        <i class="admin-font adminLib-close"></i>
                    </div>
                    <h3>Customize with Live Page Builder</h3>
                    <h4>Use the Live Page Builder to select the Enquiry or Quote tab and customize the respective buttons to match your site's design.</h4>
                    <div className="tour-footer">
                        <button
                            className="btn-purple"
                            onClick={() => {
                                setCurrentStep(6);
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ),
        },
        {
            selector: '.enquiry-btn',
            content: () => (
                <div class="tour-box">
                    <div 
                        onClick={() => {
                                finishTour();
                            }}
                        className="close-icon"
                    >
                        <i class="admin-font adminLib-close"></i>
                    </div>
                    <h3>Arrange Enquiry Button</h3>
                    <img src={gif} width="290"/>
                    <h4>With the Enquiry tab selected, drag and drop to position the Enquiry button and customize its look </h4>
                    <div className="tour-footer">
                        <button
                            className="btn-purple"
                            onClick={() => {
                                finishTour()
                            }
                            }
                        >
                            Finish
                        </button>
                    </div>
                </div>
            ),
        },
    ];

    const finishTour = () => {
        console.log('finish')
        setIsOpen(false); // Close the tour
        try {
            axios.post(`${appLocalizer.apiurl}/catalog/v1/tour`, { active: false });
            console.log('Tour marked as complete.');
        } catch (error) {
            console.error('Error updating tour flag:', error);
        }
    };

    useEffect(() => {

        const fetchTourState = async () => {
            if (window.location.href == appLocalizer.module_page_url) {
                try {
                    const response = await axios.get(`${appLocalizer.apiurl}/catalog/v1/tour`);
                    console.log(response)
                    if (response.data.active != '') {
                        setSteps(settingsTourSteps);
                        setIsOpen(true); // Start the tour
                    }
                } catch (error) {
                    console.error('Error fetching tour flag:', error);
                }
            }
        };

        if (!isNavigating) {
            fetchTourState();
        }
    }, [isNavigating, setSteps]);

    return null;

    // useEffect(() => {
    //     if (!isNavigating) {
    //         setSteps(settingsTourSteps);
    //     }
    // }, [isNavigating, setSteps]);

    // return (
    //     <>
    //         {console.log('hii')}

    //         <button onClick={() => setIsOpen(true)} style={{ marginBottom: '10px' }}>
    //             Start Tour
    //         </button>
    //     </>
    // );
};

export default Tour;