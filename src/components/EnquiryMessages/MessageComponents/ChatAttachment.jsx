import React from 'react';
import { FaAt, FaMoneyBillWaveAlt } from "react-icons/fa";

const MediaUploader = (props) => {
    let frame
    const runUploader = (event) => {
        event.preventDefault()

        // If the media frame already exists, reopen it.
        if (frame) {
            frame.open()
            return
        }

        // Create a new media frame
        frame = wp.media({
            title: 'Select or Upload Media Of Your Chosen Persuasion',
            button: {
                text: 'Use this media',
            },
            multiple: false, // Set to true to allow multiple files to be selected
        })

        frame.on('select', function(){
            var selection = frame.state().get('selection');
            selection.map( function( attachment ) {
              attachment = attachment.toJSON();
                props.onChange(attachment);
            });
        });

        // Finally, open the modal on click
        frame.open()
    }

    return (
        <React.Fragment>
            <button className='media-uploader' type='button' onClick={runUploader}>
                {props.children}
            </button>
        </React.Fragment>
    )
}

const ChatAttachment = ( { enquiry } ) => {
  
  return (
    <>
        <section className='chat-attachment-wrapper'>
            <MediaUploader
                    onChange={(attachment) => {
                        setFile(attachment);
                    }}
                >
                    <i className="admin-font adminLib-attachment" />
                    <span>Document</span>
            </MediaUploader>
            <button onClick={()=> setMessage(message + ' ' + "@")} className='option-btn'>
                <FaAt />
                <span>Tag</span>
            </button>
            <button className='option-btn' >
                <FaMoneyBillWaveAlt />
                <span>Profile</span>
            </button>
        </section>
        
    </>
  )
}

export default ChatAttachment;