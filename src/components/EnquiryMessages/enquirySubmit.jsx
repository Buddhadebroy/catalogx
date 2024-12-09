import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./enquiryMessages.scss";
import EmojiPicker from 'emoji-picker-react';
import Products from './MessageComponents/Products.jsx';
import { FaAt, FaMoneyBillWaveAlt } from "react-icons/fa";
import ChatAttachment from './MessageComponents/ChatAttachment.jsx';

const AtSignList = ({ message, enquery, onSelect }) => {

    const pattern = /@[^!#$%^&*()_+{}|:"<>?`~\[\]\\;/\'\s]*$/;
    const metched = pattern.test(message);

    if (!metched) {
        return;
    }

    function getCharactersAfterAt(str) {
        const parts = str.split('@');
        if (parts.length > 1) {
            return parts[1];
        }
        return '';
    }

    function removeCharactersAfterLastAt(str) {
        const lastIndex = str.lastIndexOf('@');
        if (lastIndex !== -1) {
            return str.substring(0, lastIndex + 1); // Include '@' in the result
        }
        return str; // Handle case where '@' is not found
    }

    return (
        <div className='atsign-section'>
            {/* Loop for product */}
            {enquery.product?.map((product) => (
                <>
                    {
                        product.name.toLowerCase().includes(getCharactersAfterAt(message).toLowerCase()) &&
                            <div onClick={() => onSelect(`${removeCharactersAfterLastAt(message)}#${product.id}-${product.name}`)}>{product.name}</div>
                    }
                </>
            ))}
            {/* @ for admin */}
            {appLocalizer.user_role !== 'administrator' && (
                <div onClick={() => onSelect(`${message}Admin `)}>Admin</div>
            )}
            {/* @ for vendor */}
            {appLocalizer.user_role !== 'dc_vendor' && (
                <div onClick={() => onSelect(`${message}Vendor `)}>Vendor</div>
            )}
            {/* @ for customer */}
            {appLocalizer.user_role !== 'customer' && (
                <div onClick={() => onSelect(`${message}User `)}>User</div>
            )}
        </div>
    );
}

const EnquirySubmit = (props) => {
    const { enquiry, message, setMessage, fetchData, FileDisplay, reply, setReply } = props;
    const [file, setFile] = useState(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [quotationModal, setQuotationModal] = useState(false)
    const [addQuote, setAddQuote] = useState(false);
    const [loadQuoteModal, setLoadQuoteModal] = useState(false);
    const [createOrderId, setCreateOrderId] = useState(false);
    const [ShowChatAttachment, setShowChatAttachment] = useState(false);    

    const handleDeleteFile = () => {
        setFile(null);
    };

    const replyClose = () => {
        setReply(null);
    }

    // Function to handle emoji click
    const onEmojiClick = (emojiData, event) => {
        if (emojiData && emojiData.emoji) {
            setMessage((prevMessage) => prevMessage + emojiData.emoji);
        } else {
            console.error('No emoji object received.');
        }
    };

    // Function to toggle emoji picker visibility
    const toggleEmojiPicker = () => {
        setShowChatAttachment(false);
        setShowEmojiPicker(!showEmojiPicker);
    };

    /**
     * handle message send this will send message and attachments
     */
    const handleSendMessage = () => {
        const attachment = file?.id;

        if ( ! message && ! attachment ) return;

        axios({
            method: "post",
            url: `${appLocalizer.apiurl}/catalog/v1/send-messages`,
            data: {
                attachment: attachment,
                msgReply: message,
                enquiry: enquiry,
            },
        }).then((response) => {
            fetchData();
        });
        
        setReply(null)
        setFile(null);
        setMessage('');
    };

    const handleAddQuote = () => {
        setQuotationModal(true);
        setAddQuote(true);
    }

    const handleCreateQuote = () => {
        setAddQuote(false);
        setLoadQuoteModal(true)
        axios({
            method: "post",
            url: `${appLocalizer.apiurl}/catalog/v1/create-quote`,
            data: { enquiry: enquiry },
        }).then((response) => {
            setCreateOrderId(response.data)
            setLoadQuoteModal(false)
        });
    }

    const handleCloseQuoteModal = () => {
        setQuotationModal(false);
        setAddQuote(false);
    }


    const handleShowChatAttachment = () => {
        setShowEmojiPicker(false);
        setShowChatAttachment(!ShowChatAttachment);
    };

    return (
        <>
        <div className="chat-controls">
            <div className="wrapper">
                <div className="chat-attachment">
                    {ShowChatAttachment && <ChatAttachment enquiry={enquiry} />}       
                    <button  onClick={handleShowChatAttachment} className="chat-more-option-button">
                        <i className="admin-font adminLib-plus-circle-o" />
                    </button>
                </div>
                <div className='emoji-wrapper'>
                    <button onClick={toggleEmojiPicker} className='emoji-btn'>
                        <i className="admin-font adminLib-smile-o" />
                    </button>
                </div>
                {showEmojiPicker && (
                    <div className='emoji-picker-container'>
                        <EmojiPicker
                            onEmojiClick={onEmojiClick}
                            autoFocusSearch={false}
                            Theme={'auto'}
                            skinTonesDisabled={true}
                        />
                    </div>
                )}

                {quotationModal &&
                <div className='cart-products-container quotation-section'>
                {/* main Wrapper */}
                   

                    {/* Loading Wrapper */}
                    { loadQuoteModal &&
                        <article className='loader-wrapper'>
                            <div class="loader">
                                <div class="three-body__dot"></div>
                                <div class="three-body__dot"></div>
                                <div class="three-body__dot"></div>
                            </div>
                            <p>Loading....</p>
                    </article>
                    }

                    {/* thank you Wrapper */}
                    { createOrderId && 
                        <section className='thankyou-section-wrapper'>
                                <div className='section-icon'>
                                    <i className='admin-font adminLib-check'></i>
                                </div>
                                <h3 className='section-tittle'>Thank you!</h3>
                                <p className='section-message'>Your personalized quotation has been successfully created and is now ready for review. You can send it to the customer or make any further adjustments if needed.</p>
                                <div className='section-button'>
                                    <a className="" href={`${appLocalizer.order_edit}&id=${createOrderId}`}>
                                        View Quote
                                    </a>
                                </div>
                        </section>
                    }
                </div>
                }
                <div className="typing-section">
                    {
                        <AtSignList
                            message={message}
                            enquery={enquiry}
                            onSelect={setMessage}
                        />
                    }
                    <textarea name="reply_msg" id="reply_msg" value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                    
                </div>
                <div className="send">
                    <button className="message-send-btn" id="send_msg" onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>


        <div className="chat-controls">
            <div className="wrapper">
                <div className="typing-section">
                    {/* @ sections */}
                    {
                        <AtSignList
                            message={message}
                            enquery={enquiry}
                            onSelect={setMessage}
                        />
                    }
                    <textarea name="reply_msg" id="reply_msg" value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                    {reply && (
                        <div className='reply-text-preview'>
                            <p dangerouslySetInnerHTML={{ __html: reply }}></p>
                            <button onClick={replyClose}><i className='admin-font adminLib-close'></i></button>
                        </div>
                    )}
                    {file && (
                        <div className='attachment-details-section'>
                            <p>{file.name}</p>
                            <FileDisplay fileUrl={ file.link } fileType={file.type} />
                            <button onClick={handleDeleteFile}><i className='admin-font adminLib-close'></i></button>
                        </div>
                    )}
                </div>
                <div className="send">
                    <button className="message-send-btn" id="send_msg" onClick={handleSendMessage}>Send</button>
                </div>
            </div>
            <div className="chat-attachment">
                <button onClick={toggleEmojiPicker} className='option-btn controls-btn'>
                    <i className="admin-font adminLib-smile-o"/>
                </button>
                <button onClick={()=> setMessage(message + ' ' + "@")} className='option-btn controls-btn'>
                    <FaAt />
                </button>
                <button className='option-btn controls-btn' onClick={handleAddQuote} >
                    <FaMoneyBillWaveAlt />
                </button>
            </div>
        </div>
        </>
    );
}
export default EnquirySubmit;