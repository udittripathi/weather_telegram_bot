/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div>

            <header>
                <h1>Weather Update Telegram Bot</h1>
                <div className="badge-container">
                    <span className="badge">Telegram Bot</span>
                    <span className="badge">Node.js Backend</span>
                    <span className="badge">Express.js Framework</span>
                    <span className="badge">MongoDB Database</span>
                    <span className="badge">REST API</span>
                    <span className="badge">React JS</span>
                </div>
            </header>

            <main>
                <section id="description" className="container">
                    <h2>Description</h2>
                    <p>The Weather Update Telegram Bot is a bot that provides weather updates for cities. Users can subscribe to receive weather updates and get current weather data for specific cities.</p>
                </section>

                <section style={{ textAlign: "center" }} id="motivation" className="container">
                    <h2>Admin Panel</h2>
                    <button onClick={() => navigate('/admin')} style={{ borderRadius: "10px", backgroundColor: "cyan", cursor: "pointer", padding: "5px" }}>
                        <h2 style={{ color: "brown", margin: "0" }}>Click Here</h2></button> 
                </section>

                <section id="features" className="container">
                    <h2>Features</h2>
                    <ul>
                        <li>Subscribe to weather updates</li>
                        <li>Get current weather data for a specific city</li>
                        <li>Unsubscribe from weather updates</li>
                        <li>Get User's usernames</li>
                        <li>Get Usage Statistics</li>
                    </ul>
                </section>

                <section id="demo" className="container">
                    <h2>Demo</h2>
                    <p>Click <a rel="noreferrer" target="_blank" href="https://t.me/ASTTweather_bot">here</a> to view the bot on Telegram.</p>
                    <p> If not Opened, Copy the Link <code>https://t.me/ASTTweather_bot</code> and search or paste in Telegram app to get the Bot access.</p>
                </section>

                <section id="usage" className="container">
                    <h2>Usage</h2>
                    <ul>
                        <li><code>/subscribe</code> - Subscribe to weather updates.</li>
                        <li><code>/unsubscribe</code> - Unsubscribe from weather updates.</li>
                        <li><code>/weather</code> - Get the current weather data for a specific city.</li>
                        <li><code>/help</code> - Display the list of available commands.</li>
                    </ul>
                </section>

                
            </main>


        </div >
    );
}

export default HomePage;