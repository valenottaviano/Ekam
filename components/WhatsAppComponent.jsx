import React, { Fragment } from 'react';

const WhatsAppComponent = () => {
    return (
        <Fragment>
            <div className="whatsapp-container">
                <a href={`https://wa.me/5493815903710`} target="_blank"><img src="icon/whatsapp.svg"/></a>
            </div>
            <style jsx>
                {`
                    .whatsapp-container{
                        heigh:50px;
                        width:50px;
                        position: fixed;
                        right:5%;
                        bottom:5%;
                        cursor:pointer;
                        z-index:3;
                    }
                `}
            </style>
        </Fragment>
    );
}

export default WhatsAppComponent;
