import LifePodImage from "/LifePod.svg"

export default function FarmPod() {

    return (
        <>
        <main>
            <p>Introducing The FarmPod</p>
            <p>The World's First Autonomous Off-Grid Container Farm</p>
            <a href="https://www.lifepod.co" target="_blank">
            <img className="logo" src={LifePodImage} alt="Lifepod Image" />
            </a>          
        </main>
        <button>Learn More</button>
        </>
    )
}