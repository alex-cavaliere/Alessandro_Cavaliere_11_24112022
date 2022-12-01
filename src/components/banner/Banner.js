import './Banner.css'


function Banner(props){
    const className = props.className
    return(
        <div id="banner" className={className}>
                <div>
                    {className === 'banner_1' && <h1>chez vous, partous, ailleurs</h1>}
                </div>
        </div>
    );
}
export default Banner;
