import { useState, useEffect } from 'react';
import Recapcha from '../../../../../../assets/images/recaptcha.png';

const Recaptach = (props) => {
    const { formField, onChange } = props;

    return (
        <>
            <div className={`main-input-wrapper ${!formField.sitekey ? 'recaptcha' : ''}`}>
                <p>{__("reCAPTCHA has been successfully added to the form.", "catalogx")}</p>
            </div>
        </>
    )
}

export default Recaptach;