import React, { useState } from 'react';

const CovidForm = () => {

const [form,setForm] = useState('none');

const causeHandler = (event) => {
    setForm(event.target.value);
    console.log(form);
}
 

    return (
        <div className="mt6 pa4">
            <div className="">
                <h2 className="mr2">I am a</h2>
                <select name="covidform" id="provider" onClick={causeHandler}>
                    <option value="none">---Select Type---</option>
                    <option value="Plasma-donor">Plasma Donor</option>
                    <option value="Ventilator">Ventilator/Oxygen Vendor</option>
                    <option value="Beds">Beds Availability</option>
                    <option value="Remdesivir">Remdesivir Vendor</option>
                </select>
                <div className="f5 mt3 dim br2 ph3 pv1 dib white bg-dark-blue ml3">Next</div>
            </div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScu9ZAB2YAtnP_A9875A4kEKwRNpK0lpOGqYqT8pBk_SxMvxQ/viewform?embedded=true" width="640" height="1163" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfm7NJ05VwjzANe5neg6wb3aDk8F1l2K-9F-PsZpsvqutFlPg/viewform?embedded=true" width="640" height="821" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkNntYYajU1NstTP9soAw_73uCUhn19NSV0fPrfkOKKlXDBQ/viewform?embedded=true" width="640" height="821" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScaENOz-rkQziZp_GOfBh3Ue_lCEM9Tx6L1qItU2RxQ12C3TQ/viewform?embedded=true" width="640" height="821" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    );
}

export default CovidForm;