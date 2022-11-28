import './Banner.css'


function Banner(props){
    const className = props.className
    return(
        <div id="banner" className={className}>
                <div>
                    <h1>chez vous, partous, ailleurs</h1>
                </div>
        </div>
    );
}
export default Banner;
