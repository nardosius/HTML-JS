import headerLogo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
        <img src={headerLogo} alt='Money bag img' height={150} width={150}/>
        <h1>Investment Calculator</h1>
        </header>
    );
}