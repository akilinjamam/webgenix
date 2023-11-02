import intro from './Intro.module.css';
import world from '../exports/left-background-img.png';
import Lottie from 'react-lottie';
import  data from '../animation.json'

const Intro = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: data,
        rendererSettings: {
          preserveAspectRatio:'xMidYMid slice'
        }
      };

    return (
        <div id='home' className={intro.main}>
            <div className={intro.container}>
                <div className={intro.intro_left}>
                   <div className={intro.intro_left_container}>
                        <img className={intro.image} src={world} alt="" />
                        <div>
                            <div className={intro.intro_left_title}>
                                <span>&quot;Optimizing the Web for</span>
                                <br />
                                <span>Enterprise Level Performance&quot;</span>
                            </div>
                            <br />
                            <div className={intro.des}>
                            <p>
                                At WEBGENIX, we are on a mission to revolutionize the way businesses engage with the online world. As a leading web development company, we bring together creativity, technology, and expertise to craft digital experiences that leave a lasting impression. Whether you are a startup or an established enterprise, we have the solutions to catapult your online presence to new heights. Explore our offerings and let shape the future of your digital success story together.
                                </p>
                            </div>
                            <br />
                            <button  className={intro.btnOne}>work with us</button>
                            <button  className={intro.btnTwo}>learn more</button>
                        </div>
                   </div>
                </div>
                <div className={intro.intro_right}>
                    <div style={{height:'320px'}}>
                        <Lottie options={defaultOptions} height={350} width={350}/>
                    </div>
                    {/* <div style={{width:'350px', height:'350px'}}>
                        
                    </div> */}
                    <div>
                        <div >
                            <p className={intro.right_title}>Website Solutions</p>
                            <p className={intro.right_des}>
                            Our team will work with you to bring
                            <br />
                            your business ideas to life. . .
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Intro;