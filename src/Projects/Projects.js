// import logo from './logo.svg';
import '../Home/App.css';
import './style-projects.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {theInfo} from './script-projects';
import ReactModal from 'react-modal';

function Projects() {
    useEffect(() => {

    });
    const [modalIsOpen, setModalOpen] = useState(false);
    const [infoKey,setInfoKey] = useState("taserGuitar");

    return (
        <div className="Projects">

            <header>
                <h1 >Jakob Coughlan</h1>
                <h3>Projects</h3>
                <div className="back">
                    {/* <a href="index.html"> */}
                    <Link to="/Home">
                        <button className="mid">back ={'>'}</button>
                    </Link>
                    {/* </a> */}
                </div>
            </header>
            <ReactModal className="popup"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalOpen(false)}
                shouldCloseOnOverlayClick={true}>
                <div className='exit'><button className='back' onClick={() => setModalOpen(false)}>close</button></div>

                <div className='modalContainer'>
                    <img id='modalPicture' src={theInfo[infoKey].image} />
                    <div className='modalTextBox'>
                        <h3>{theInfo[infoKey].title}</h3>
                        <h5>{theInfo[infoKey].date}</h5>
                        <p className = 'des'>{theInfo[infoKey].text}</p>
                        <a href={theInfo[infoKey].link}>~~Link~~</a>
                    </div>

                </div>
            </ReactModal>

            <div className='container'>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("doorPuller")]}>
                    <img src='doorPuller.png' />
                    <p>Door Opener</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("dressPants")]}>
                    <img src='dressPants.png' />
                    <p>Dress Pants</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("headPhoneHanger")]}>
                    <img src='headphonehanger.png' />
                    <p>Headphone Hanger</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("stuffedDog")]}>
                    <img src='stuffeddog.png' />
                    <p>Stuffed Dog</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("TikTokGen")]}>
                    <img src='reddittiktok.png' />
                    <p>Reddit Tik-Tok Generator</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("SharpenerSpeedrun")]}>
                    <img src='sharpen.png' />
                    <p>Pencil Sharpener Speedrun</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("AAA")]}>
                    <img src='AAA.png' />
                    <p>Anti Anime Automata</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("taserGuitar")]}>
                    <img src='taser-guitar.png' />
                    <p>Taser Guitar</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("Klangschalter")]}>
                    <img src='klangschalter.png' />
                    <p>DAC Audio Changer</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("ICarly")]}>
                    <img src='icarly.png' />
                    <p>iCarly Remote</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("connectFourTrophy")]}>
                    <img src='connectFourTrophy.png' />
                    <p>Connect 4 Trophy</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("PencilHand")]}>
                    <img src='pencilhand.png' />
                    <p>Pencil Hand Holder</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("DiscordVizual")]}>
                    <img src='calander.png' />
                    <p>Discord Usage Visualization</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("Duck")]}>
                    <img src='needy-duckling.png' />
                    <p>Needy Duckling</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("RenFaire")]}>
                    <img src='RenFaire.png' />
                    <p>Ren Faire Costume</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("ShoeBench")]}>
                    <img src='bench.png' />
                    <p>Shoe Bench</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("ArduinoTetris")]}>
                    <img src='tetris.png' />
                    <p>Arduino Tetris</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("breadboardClock")]}>
                    <img src='solderClock.png' />
                    <p>Perfboard Clock</p>
                </div>
                <div className='item' onClick={() => [setModalOpen(true),setInfoKey("JTicTac")]}>
                    <img src='tictactoe.png' />
                    <p>Java Tic Tac Toe</p>
                </div>
                
            </div>



        </div>

    );
}

export default Projects;
