function Info() {
    return (
        <header className="info-header">
            <img src="./src/assets/koja.jpg" alt="this is amir's photo"/>
            <div className="info-text">
                <h2>Kassim Amir</h2>
                <p>Fullstack Developer</p>
                <button id="email" type="button" onClick={() => window.location.href="www.gmail.com"}>Email</button>
                <button id="linkedin" type="button">LinkedIn</button>
            </div>
        </header>
    )
}

export default Info