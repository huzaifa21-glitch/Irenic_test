import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modal.css';
import CrossIcon from '../../assets/gpt-svgs/Cross.svg';
import ExampleIcon from '../../assets/gpt-svgs/Example.svg';
import LimitationIcon from '../../assets/gpt-svgs/Limitation.svg';
import CapabilitiesIcon from '../../assets/gpt-svgs/Capabilities.svg';

const Model = ({ isOpen, closeModal }) => {


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="model"
            overlayClassName="overlay"
        >
            <div className="close-btn" onClick={closeModal}>
                <img src={CrossIcon} alt="search Icon" className="close-svg" />
            </div>
            <div className="modal-header">
                <h2 className="modal-heading">ChatGPT Quick Assistance</h2>
                <p className="modal-subheading">
                    Start by asking the question and let ChatGPT handle the rest.
                    If you're unsure where to begin, take a look at our examples for inspiration.
                </p>
            </div>

            <div className="cards-container">
                <div className="card">
                    <div className='card-header'>
                        <img src={ExampleIcon} alt="search Icon" className="header-svg" />
                        <h3 className="card-heading">Examples</h3>
                    </div>
                    <div className="sub-cards">
                        <div className="sub-card">
                            <p>"Explain quantum computing in simple terms"</p>
                        </div>
                        <div className="sub-card">
                            <p>"Got any creative ideas for a 10 year old’s birthday?"</p>
                        </div>
                        <div className="sub-card">
                            <p>"How do I make an HTTP request in Javascript?"</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className='card-header'>
                        <img src={CapabilitiesIcon} alt="search Icon" className="header-svg" />
                        <h3 className="card-heading">Capabilities</h3>
                    </div>
                    <div className="sub-cards">
                        <div className="sub-card">
                            <p>Remembers what user said earlier in the conversation</p>
                        </div>
                        <div className="sub-card">
                            <p>Allows user to provide follow-up corrections</p>
                        </div>
                        <div className="sub-card">
                            <p>Trained to decline inappropriate requests</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className='card-header'>
                        <img src={LimitationIcon} alt="search Icon" className="header-svg" />
                        <h3 className="card-heading">Limitations</h3>
                    </div>
                    <div className="sub-cards">
                        <div className="sub-card">
                            <p>May occasionally generate incorrect information</p>
                        </div>
                        <div className="sub-card">
                            <p>May occasionally produce harmful instructions or biased content</p>
                        </div>
                        <div className="sub-card">
                            <p>Limited knowledge of world and events after 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Model;
