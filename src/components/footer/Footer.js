import "./footer.css"

const Footer = () => {

    let year;
    let time;
    let date;
    (() => {
        date = new Date()
        year = new Date().getFullYear()
        time = new Date().toLocaleTimeString('en-EU');
    })();


    return (
        <div className='footer'>
          <span className="footerText"> (c) {year} All rights reserved</span>
        </div>

    )
}
export default Footer
